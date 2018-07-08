import React, {Component} from 'react'

import {
    Link
} from 'react-router-dom'

class Register extends Component{
    render(){
        return (
            <div>
                <h1>Signup here</h1>
                <Link to="/login">If you are already registered, Login here</Link>
            </div>
        )
    }
}

export default Register;