import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

// Ce component sera utilisé comme layout pour les pages de l'hôte
// il affichera une barre de navigation spécifique à l'hôte qui sera partagée
// entre toutes les pages de l'hôte.

export default function HostLayout() {
    // Utilisation de liens relatifs pour la navigation interne
    // Nous sommes sur la page "/host", donc :
    // - Le lien vers le tableau de bord (Dashboard) peut être "."
    // - Le lien vers les revenus (Income) peut être "income"
    // - Le lien vers les avis (Reviews) peut être "reviews"

    // Utilisation de NavLink pour appliquer un style au lien actif

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    return (
        <>
            <nav className="host-nav">
                {/* le end sur le NavLink du dashboard permet de s'assurer
                qu'il n'est actif que sur /host et pas sur les sous-routes */}
                <NavLink
                    to="."
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
}
