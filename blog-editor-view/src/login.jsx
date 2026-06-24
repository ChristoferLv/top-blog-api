import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";

function LoginPage() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function isAllValid() {
        const inputs = document.querySelectorAll("input");
        const allValid = Array.from(inputs).every((input) => input.reportValidity());
        return allValid;
    }

    /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
    function handlePersonalInfo(event) {
        const whoChanged = event.target;
        setCredentials({ ...credentials, [whoChanged.name]: whoChanged.value });
    }

    function handdleSubmit(e) {
        e.preventDefault();
        if (!isAllValid) return;
        login();
    }

    async function login() {
        const rawResponse = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const content = await rawResponse.json();
        localStorage.setItem("token", content.token);

        const meResponse = await fetch('http://localhost:3000/auth/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': content.token
            }
        });
        const meContent = await meResponse.json();
        console.log(meContent)
        if (meContent && meContent.success) {
            setUser(meContent.data)
            navigate("/", { replace: true });
        }
    }

    return (<>
        <div className="auth-container">
            <form onSubmit={handdleSubmit} className="auth-form">
                <h1>Log in</h1>
                <label htmlFor="username">
                    Username:
                </label>
                <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your Username"
                    onChange={handlePersonalInfo}
                    required />

                <label htmlFor="password">
                    Password:
                </label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={handlePersonalInfo}
                    required />

                <div className="wrap">
                    <button type="submit">
                        Submit
                    </button>
                </div>
                <p>Not registered? &nbsp;
                    <a href="/auth/sign-up" className="link-plain">
                        Create an account
                    </a>
                </p>
            </form >
        </div >
    </>)
}



export default LoginPage;