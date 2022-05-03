import React from "react";
import { useState } from "react";

export default function AddUser() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(inputs.name + inputs.description + inputs.address);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        };
        fetch('http://localhost:8080/test/users/add', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(inputs)})
            .then(response => response.json());
    }

    return (
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
            <label>Enter the email:
                <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>Enter the address:
                <input
                    type="text"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <input type="submit" />
        </form>
    )
}