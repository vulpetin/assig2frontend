import React from "react";
import { useState } from "react";
import "./Login.css";
import {Link} from "react-router-dom";

export default function Login({setToken}) {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await loginUser(inputs)
        setToken(token);
        //alert(inputs.name + inputs.description + inputs.address);
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(inputs)
        // };
        // fetch('http://localhost:8080/test/users/login', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(inputs)})
        //     .then(response => response.json());
    }

    async function loginUser(credentials){
        return fetch('http://localhost:8080/test/users/login', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(credentials)})
            .then(response => response.json());
    }



    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <Link to="/Register">Register</Link>|{" "}
            <form onSubmit={handleSubmit}>
                <label>Enter the username:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>Enter the password:
                    <input
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
    // Login.propTypes = {
    //     setToken: PropTypes.func.isRequired
    // }
}