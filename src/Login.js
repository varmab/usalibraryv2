import React, {Component} from 'react'

import {
    Link,
    Redirect
} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super();

        this.state={
            email:'',
            password:'',
            loggedIn:false
        }

        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleEmailChange(e){
        var email=e.target.value
        this.setState({
            email:email
        })
    }

    handlePasswordChange(e){
        var password=e.target.value
        this.setState({
            password:password,
        })
    }

    handleSubmit(e){
        e.preventDefault();

        //make api call and verify login and password are valid
        localStorage.setItem("userId","1");
        this.setState({
            loggedIn:true
        })
    }

    render(){
        if(this.state.loggedIn){
            return (
                <Redirect to="/mybooks"/>
            )
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Link to="/register">Are you new?, Register here</Link>
            </div>
        )
    }
}

export default Login;