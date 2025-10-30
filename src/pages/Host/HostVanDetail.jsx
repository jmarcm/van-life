import React from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";

export default function HostVanDetail() {
    const { id } = useParams();

    const [currentVan, setCurrentVan] = React.useState(null);

    React.useEffect(() => {
        // fetch van details
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrentVan(data.vans[0]));
    }, []);

    const activeStyles = {
        color: "#161616",
        fontWeight: "bold",
        textDecoration: "underline",
    };

    if (!currentVan) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            {/* Si on ne précise pas le relative,
            le lien remontera à la route parente "/host" */}
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) =>
                            isActive ? activeStyles : null
                        }
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) =>
                            isActive ? activeStyles : null
                        }
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) =>
                            isActive ? activeStyles : null
                        }
                    >
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={{ currentVan }} />
            </div>
        </section>
    );
}
