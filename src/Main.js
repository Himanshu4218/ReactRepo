import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import Login from "./LoginPage";
import SignUp from "./signupPage";

class Main extends Component{
    render(){
        return(
            <div>
                <Switch location={this.props.location}>
                    <Route path="/home" component = { () => <Home/>} />
                    <Route exact path='/Login' component={ () => <Login/> } />
                    <Route exact path='/Signup' component={ () => <SignUp/> } />
                    <Redirect to="/home" />
                </Switch>
            </div>        
        )
    }
}

export default Main;