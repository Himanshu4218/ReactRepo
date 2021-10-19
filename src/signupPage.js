import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            mobileNumber: '',
            address: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value   
        });
    }

    handleSubmit(event){

        event.preventDefault();
        const user = {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobileNumber: this.state.mobileNumber,
            address: this.state.address
        }

        axios.post('http://localhost:3001/signup',user)
        .then(res => console.log(res.data))

        this.setState({
            username: '',
            name: '',
            email: '',
            password: '',
            mobileNumber: '',
            address: ''
        })
    }
        
    render(){
        return(
            <div id="signup-details">
                <div id="signup-heading">Sign Up</div>

                <form id="signUpForm" onSubmit = {this.handleSubmit}>

                    <div id="signup-input">
                  
                        <input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} required /> <br/>

                        <input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleInput} required /> <br/>

                        <input type="email" name="email" id="email" placeholder="Email Address" value={this.state.email} onChange={this.handleInput} required/><br/>
                        
                        <input type="password" name="password" id="pass1"  placeholder="Password" value={this.state.password} 
                            onChange={this.handleInput} pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}" required/><br/>

                        <input type="tel" id="phone" name="mobileNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Mobile Number" value={this.state.mobileNumber} onChange={this.handleInput} required/><br/>
                        
                        <input type="text" name="address" id="address" placeholder="Address" value={this.state.address} onChange={this.handleInput} required/> <br/>

                    </div>

                    <div id="proceed">
                    
                        <button type="submit">Sign Up</button>
                    
                    </div>
                        
                </form>
                    
                    <div className = "navigate">
                        <span>Already Having an Account?</span> <Link to="/Login">Login</Link>
                    </div>

            </div>

            )
        }
}

export default SignUp;

