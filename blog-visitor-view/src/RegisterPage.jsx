import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router";


function RegisterPage() {
    const [credentials, setCredentials] = useState({ username: '', password: '', confirmPassword: '' });
    const [credentialsValidity, setCredentialsValidity] = useState({ username: true, password: true, confirmPassword: true });
    const [usernameInUse, setUsernameInUse] = useState(false);
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
    function handleCredentialsChange(event) {
        const whoChanged = event.target;
        setCredentials({ ...credentials, [whoChanged.name]: whoChanged.value });
    }

    function validate() {
        const newValidity = { username: true, password: true, confirmPassword: true }
        if (credentials.username.length < 3 || credentials.username.length > 30)
            newValidity.username = false;

        if (credentials.password.length < 3 || credentials.password.length > 50)
            newValidity.password = false;

        if (credentials.confirmPassword != credentials.password)
            newValidity.confirmPassword = false;

        setCredentialsValidity(newValidity);
        if (Object.values(newValidity).includes(false))
            return false;
        return true;
    }

    function handdleSubmit(e) {
        e.preventDefault();
        if (!isAllValid()) return;
        register();
    }

    async function register() {
        setUsernameInUse(false);
        const valid = validate();
        if (!valid) return;
        const rawResponse = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (rawResponse.status == 409) {
            setUsernameInUse(true);
            return;
        }

        const response = await rawResponse.json();

        if (response && response.success) {
            navigate("/", { replace: true });
        }
    }

    return (<>
        <div className="auth-container">
            <form onSubmit={handdleSubmit} className="auth-form">
                <h1>Sigin Up</h1>
                <label htmlFor="username">
                    Username:
                </label>
                <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your Username"
                    onChange={handleCredentialsChange}
                    required />
                {!credentialsValidity.username && <p className="comment-invalid">Username length must be between 3 and 30 characteres and can only contain letters, numbers, space, - and .</p>}
                {usernameInUse && <p className="comment-invalid">Username already registered.</p>}


                <label htmlFor="password">
                    Password:
                </label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={handleCredentialsChange}
                    required />
                {!credentialsValidity.password && <p className="comment-invalid">Password length must be between 3 and 50 characteres</p>}

                <label htmlFor="confirmPassword">
                    Confirm password:
                </label>
                <input type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter your password again"
                    onChange={handleCredentialsChange}
                    required />
                {!credentialsValidity.confirmPassword && <p className="comment-invalid">Passwords doesn't match</p>}


                <div className="wrap">
                    <button type="submit">
                        Submit
                    </button>
                </div>
                <p>Already have an account? &nbsp;
                    <Link to={"/login"} className="link-plain">
                        Login
                    </Link>
                </p>
            </form >
        </div >
    </>)
}



export default RegisterPage;