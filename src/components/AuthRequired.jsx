import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin");
    const location = useLocation();

    if (!isLoggedIn) {
        return (
            // We add to the state the current location pathname so we can use it after login
            <Navigate
                to="/login"
                state={{
                    message: "You must login first",
                    from: location.pathname,
                }}
                replace
            />
        );
    }

    return <Outlet />;
}
