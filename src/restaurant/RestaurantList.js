import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";
import useToken from "../login/useToken";

export default class RestaurantList extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants:null
        }
    }

  


    componentDidMount(){
        fetch('http://localhost:8080/test/restaurants').then((res)=>{
            res.json().then((result)=>{
                console.warn(result);
                this.setState({restaurants:result})
            })
        })
    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br/><br/>
                        <h3>List of Restaurants</h3><br/>
                        <nav>
                        <table className="table table-bordered">
                            <tr>
                                <th>No</th>
                                <th>id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Address</th>
                            </tr>
                            {
                                this.state.restaurants ?

                                    this.state.restaurants.map((restaurant, i) =>
                                        <tr>
                                            <td>{++i}</td>
                                            <td>{restaurant.id}</td>
                                            <td>{restaurant.name}</td>
                                            <td>{restaurant.description}</td>
                                            <td>{restaurant.address}</td>
                                            <td><Link to={'/Restaurants/'+ restaurant.id }>Menu</Link></td>
                                            <td><Link to={'/Restaurants/addfood/'+ restaurant.id }>Add Food</Link></td>
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
        );
    }


}