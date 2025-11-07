import React from "react";
import { useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
    const location = useLocation();

    const [loginFormData, setLoginFormData] = React.useState({
        email: "",
        password: "",
    });

    const [status, setStatus] = React.useState("idle");

    const [error, setError] = React.useState(null);

    // @todo: use form action

    /**
     * To handle the form submission
     * @param {Event} e
     */
    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        setError(null);
        loginUser(loginFormData)
            .then((data) => {
                setStatus("idle");
                console.log(data);
            })
            .catch((err) => {
                setError(err);
                console.error(err);
            })
            .finally(() => setStatus("idle"));

        console.log(loginFormData);
    }

    /**
     * To update the form data state on input change
     * @param {Event} e
     */
    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="login-container">
            {location.state?.message && (
                <h3 className="login-first">{location.state.message}</h3>
            )}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    );
}
