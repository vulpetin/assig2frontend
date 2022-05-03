import logo from './logo.svg';
import './App.css';
import {Component, useState} from "react";
import RestaurantList from './restaurant/RestaurantList'
import { Outlet, Link } from "react-router-dom";
import Login from "./login/Login";
import useToken from "./login/useToken";


function App() {
    //const [token, setToken] = useState();
    const {token, setToken} = useToken();
    if (!token){
        return <Login setToken={setToken}/>
    }


    let  showing = false ;
    if(token == 'admin')
        showing = true;

  return (
    <div className="App">

        qwertyuiop

        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
        >
            <Link to="/Restaurants">Restaurants</Link> |{" "}

            <div style={{ display: (showing ? 'block' : 'none') }}><Link to="/Restaurants/add">New Restaurant</Link>|{" "}</div>
        </nav>

        <Outlet/>

    </div>
  );
}


export default App;
