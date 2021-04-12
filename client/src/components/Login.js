import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
            
            
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {

        const { email, password } = this.state;

        axios("/users/login", {
            method: "POST",
            data:{
                email, 
                password,
            }
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            this.props.history.push("/track");
           
           
            
            
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })

    }

    render() {
        return (
            
            
<div>

<div className="header text-white">
           <h1 className="text-center fw-bold">GREEN</h1>
           <p className="lead fw-bold">OPTIMISE YOUR BEHAVIOUR TO MINIMISE CO2 EMISSIONS</p>
          
       </div>
          
           
            <div className="input" >
                <input 
                className="mb-3" 
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange} /><br></br>

                <input 
                className="mb-3" 
                type="password" 
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange} /><br></br>

                <button className="login-button ml-3" onClick={this.login  }>Sign in</button>
                <p className="text-white mt-2">Not a member? <Link to="/register" className="text-black">Register</Link></p>
            </div>

           
             </div>
           
        )
    }
}

