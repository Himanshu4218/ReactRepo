import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
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

    handleSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:3001/login',user)
        .then(res => console.log(res.data))

        this.setState({
            username: '',
            password: ''
        })
        
    }
    render(){
        return(
            <div id="Login-details">
                <div id="Login-heading">Login</div>

                    <form id="loginForm" onSubmit={this.handleSubmit} >

                        <div id="login-input">
                            <input type="text" name="username" id="username" required placeholder="username" onChange={this.handleInput} value={this.state.username}/><br/>
                            
                            <input type="password" name="password" id="password" required placeholder="Password" onChange={this.handleInput} value={this.state.password}/>
                        </div>
                        
                        <div id="proceed">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    
                    <div className="navigate">
                        <span>Don't have an account?</span> <Link to="Signup">Sign up</Link>
                    </div>

            </div>

        )
    }
}

export default Login;