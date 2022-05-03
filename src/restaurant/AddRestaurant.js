import React from "react";
import { useState } from "react";

export default function AddRestaurant() {

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
        fetch('http://localhost:8080/test/restaurants/add', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(inputs)})
            .then(response => response.json());
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label><br/>
            <label>Enter the description:
                <input
                    type="text"
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                />
            </label><br/>
            <label>Enter the address:
                <input
                    type="text"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                />
            </label><br/>
            <input type="submit" />
        </form>
    )
}