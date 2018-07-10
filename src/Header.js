import React, {Component} from 'react'

import {
    NavLink,
    Redirect
} from 'react-router-dom'

class Header extends Component{
    constructor(){
        super();
        this.logout=this.logout.bind(this);
        this.state={
            logoutComplete:false
        }
    }

    logout(){
        localStorage.clear();
        this.setState({
            logoutComplete:true
        })
    }

    render(){
        if(this.state.logoutComplete){
            return (
                <Redirect to="/login"/>
            )
        }

        return (
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <NavLink activeClassName="text-muted" to="/mybooks">My Books</NavLink>
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="#">USA Library</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                    </a>
                    {
                        !localStorage.getItem("userId") ?
                        (
                            <div>
                                <NavLink activeClassName="btn btn-sm btn-outline-secondary" to="/register">Register</NavLink>&nbsp;&nbsp;
                                <NavLink activeClassName="btn btn-sm btn-outline-secondary" to="/login">Login</NavLink>
                            </div>
                        )
                        :
                        (
                            <NavLink onClick={this.logout} activeClassName="btn btn-sm btn-outline-secondary" to="/">Logout</NavLink>
        
                        )
                    }
                             
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;