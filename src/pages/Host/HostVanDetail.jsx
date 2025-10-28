import React from "react";
import { Outlet } from "react-router-dom";

export default function HostVanDetail() {
    return (
        <div>
            <h1>HostVanDetail Page</h1>
            <Outlet />
        </div>
    );
}
