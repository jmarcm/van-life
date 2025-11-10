// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZdL9nW0gHTEnOKCMApQVO4FbOEqrgvDQ",
    authDomain: "vanlife-2ba5f.firebaseapp.com",
    projectId: "vanlife-2ba5f",
    storageBucket: "vanlife-2ba5f.firebasestorage.app",
    messagingSenderId: "188325408045",
    appId: "1:188325408045:web:880c4628449de37ba4f7a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getVans() {
    const res = await fetch("/api/vans");

    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        };
    }
    const data = await res.json();
    return data.vans;
}

export async function getHostVans(id) {
    const url = id ? "/api/host/vans/${id}" : "/api/host/vans";
    const res = await fetch(url);

    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        };
    }

    const data = await res.json();
    return data.vans;
}
//
//
//

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };
    }

    return data;
}
