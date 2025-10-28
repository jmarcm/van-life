import React from "react";
import { Outlet, useParams } from "react-router-dom";

export default function HostVanDetail() {
    const { id } = useParams();

    const [currentVan, setCurrentVan] = React.useState(null);

    React.useEffect(() => {
        // fetch van details
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <div>
            <h1>HostVanDetail Page</h1>
            <Outlet />
        </div>
    );
}
