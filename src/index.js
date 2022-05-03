import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RestaurantList from "./restaurant/RestaurantList";
import Menu from "./Menu/Menu";
import AddRestaurant from "./restaurant/AddRestaurant";
import AddFood from "./Menu/AddFood";
import AddUser from "./login/Register"; // where we are going to specify our routes

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/Register" element = {<AddUser />}/>
            <Route path="/" element={<App />}>
                <Route path="Restaurants" element={<RestaurantList />}>



                </Route>
                <Route path="/Restaurants/:id" element = {<Menu />}/>
                <Route path="/Restaurants/add" element = {<AddRestaurant />}/>
                <Route path="/Restaurants/addfood/:id" element = {<AddFood />}/>


                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>

        </Routes>

    </BrowserRouter>,

  document.getElementById('root')
);

