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

        return `?${sp.toString()}`;
    }

    return (
        <div className="host-vans-list">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <div className="van-list-filter-buttons">
                    <Link
                        className="van-type simple"
                        to={genNewSearchParamString("type", "simple")}
                    >
                        Simple
                    </Link>
                    <Link
                        className="van-type luxury"
                        to={genNewSearchParamString("type", "luxury")}
                    >
                        Luxury
                    </Link>
                    <Link
                        className="van-type rugged"
                        to={genNewSearchParamString("type", "rugged")}
                    >
                        Rugged
                    </Link>
                    <Link
                        className="van-type clear-filters"
                        to={genNewSearchParamString("type", null)}
                    >
                        Clear
                    </Link>
                </div>
            </div>
            <div className="van-list">{vanElements}</div>
        </div>
    );
}
