import React from "react";
import { getVans } from "../../api";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [vans, setVans] = React.useState([]);

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans();
                setVans(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, []);

    const typeFilter = searchParams.get("type");

    const displayedCharacters = typeFilter
        ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
        : vans;

    const vanElements = displayedCharacters.map((van) => (
        <div key={van.id} className="van-tile">
            {/* On peut utiliser un lien relatif. Nous sommes dans la route "/vans"
            on peut donc la supprimer. van.id étant de type string on peut l'utiliser seul */}
            <Link
                to={van.id}
                state={{
                    search: searchParams.toString(),
                    type: typeFilter,
                }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ));

    function genNewSearchParamString(key, value) {
        const sp = new URLSearchParams(searchParams);
        if (value === null) {
            sp.delete(key);
        } else {
            sp.set(key, value);
        }

        return `?${sp.toString()}`;
    }

    function handleFilterChange(key, value) {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }

            return prevParams;
        });
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }

    return (
        <div className="host-vans-list">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${
                        typeFilter === "simple" ? "selected" : ""
                    }`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${
                        typeFilter === "luxury" ? "selected" : ""
                    }`}
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${
                        typeFilter === "rugged" ? "selected" : ""
                    }`}
                >
                    Rugged
                </button>
                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >
                        Clear filter
                    </button>
                ) : null}
            </div>
            <div className="van-list">{vanElements}</div>
        </div>
    );
}
