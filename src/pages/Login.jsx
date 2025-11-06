import React from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
    const location = useLocation();
    console.log(location);

    const [loginFormData, setLoginFormData] = React.useState({
        email: "",
        password: "",
    });

    // @todo: use form action

    /**
     * To handle the form submission
     * @param {Event} e
     */
    function handleSubmit(e) {
        e.preventDefault();
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
                <h3 className="login-message">{location.state.message}</h3>
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
                <button>Log in</button>
            </form>
        </div>
    );
}
