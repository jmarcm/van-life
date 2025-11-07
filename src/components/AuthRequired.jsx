import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
    const authenticated = true; // @todo: replace with real auth check

    if (!authenticated) {
        return (
            <Navigate to="/login" state={{ message: "You must login first" }} />
        );
    }

    return <Outlet />;
}
