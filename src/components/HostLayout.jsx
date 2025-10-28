import React from "react";
import { Link, Outlet } from "react-router-dom";

// Ce component sera utilisé comme layout pour les pages de l'hôte
// il affichera une barre de navigation spécifique à l'hôte qui sera partagée
// entre toutes les pages de l'hôte.

export default function HostLayout() {
    // Utilisation de liens relatifs pour la navigation interne
    // Nous sommes sur la page "/host", donc :
    // - Le lien vers le tableau de bord (Dashboard) peut être "."
    // - Le lien vers les revenus (Income) peut être "income"
    // - Le lien vers les avis (Reviews) peut être "reviews"

    return (
        <>
            <nav className="host-nav">
                <Link to=".">Dashboard</Link>
                <Link to="income">Income</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    );
}
