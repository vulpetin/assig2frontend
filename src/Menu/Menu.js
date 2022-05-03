import {Link, Outlet, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import useToken from "../login/useToken";


export default function Menu () {

   


    const [foods, setfoods] = useState(null);
    let param = useParams();

    useEffect(()=>{
        fetch('http://localhost:8080/test/restaurants/menu?id='+param.id)
            .then(response => response.json())
            .then(data => setfoods(data));
    }, []);



        return(
                <div>

                    <div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <br/><br/>
                                <h3>Menu</h3><br/>
                                <nav>
                                    <table className="table table-bordered">
                                        <tr>
                                            <th>No</th>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                        </tr>
                                        {
                                            foods ?

                                                foods.map((food, i) =>
                                                    <tr>
                                                        <td>{++i}</td>
                                                        <td>{food.id}</td>
                                                        <td>{food.name}</td>
                                                        <td>{food.description}</td>
                                                        <td>{food.price}</td>
                                                        <td>{food.category}</td>
                                                    </tr>
                                                )
                                                :
                                                null
                                        }
                                    </table>
                                </nav>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
            )
}