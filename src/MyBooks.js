import React, {Component} from 'react'

import {
    Redirect
} from 'react-router-dom'

class MyBooks extends Component{
    constructor(){
        super();
        console.log("userId:" + localStorage.getItem("userId"))
        this.state={
            userId:localStorage.getItem("userId")
        }
        
    }
    render(){
        if(this.state.userId==""){
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