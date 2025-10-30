import React from "react";
import { getVans } from "../../api";
import { Link, useSearchParams } from "react-router-dom";

export default function HostVans() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const typeFilter = searchParams.get("type");

    const displayedCharacters = typeFilter
        ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
        : vans;

    const vanElements = displayedCharacters.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
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
        console.log(sp);
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

    return (
        <div className="host-vans-list">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className="van-type simple"
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className="van-type luxury"
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className="van-type rugged"
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
