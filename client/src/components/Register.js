
import React, { Component } from 'react';



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
           users: [],
           name: "",
           email: "",
           password: "",
           confirmpassword : ""
           
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        fetch(`users`)
        .then((response) => response.json())
        .then((response) => {
            this.setState({ users: response })
        })
    }

    getUserName = () => {
        fetch('users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({ users: response.name })
            })
       };

    addUsers = () => {
        const { name, email, password, confirmpassword } = this.state;
        fetch(`/users`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({name, email, password, confirmpassword}),
        })
    
            .then((response) => response.json())
          
            .then(response => console.log(response.msg))
            this.props.history.push("/login");
 
    }
    

    handleInput = (e)  => {
        const { value, name } = e.target;
    this.setState({
      [name]: value,
    });

    }
    render() {
        const {name, email, password, confirmpassword} = this.state;
        return (
            <div>
                {/* <div className="cover d-flex justify-content-center align-items-center"> */}

                <div className="header text-white">
           <h1 className="text-center fw-bold">GREEN</h1>
           <p className="lead fw-bold">OPTIMISE YOUR BEHAVIOUR TO MINIMISE CO2 EMISSIONS</p>
          
       </div>
<div className="text-center input">
   
    <input 
    className="mb-3" 
    type="text"
    placeholder="Full name"
    name="name"
    value={name}
    onChange={this.handleInput} /><br></br>

    <input 
    className="mb-3" 
    type="text"
    placeholder="Email"
    name="email"
    value={email}
    onChange={this.handleInput} /><br></br>

    <input 
    className="mb-3" 
    type="password" 
    placeholder="Password"
    name="password"
    value={password}
    onChange={this.handleInput}/><br></br>

    <input 
    className="mb-3" 
    type="password" 
    placeholder="Confirm Password"
    name="confirmpassword"
    value={confirmpassword}
    onChange={this.handleInput}/><br></br>

    <button className="signup-button" onClick={this.addUsers}>Sign up</button>

</div>


 </div>
         
        )
    }
}
