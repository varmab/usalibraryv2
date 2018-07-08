import React, {Component} from 'react'

import {
    Redirect
} from 'react-router-dom'

class MyBooks extends Component{
    constructor(){
        super();
        this.state={
            userLoggedIn:false
        }
        
    }
    render(){
        if(!this.state.userLoggedIn){
            return (
                <Redirect to="/login"/>
            )
        }

        return (
            <h1>My Books</h1>
        )
    }
}

export default MyBooks;