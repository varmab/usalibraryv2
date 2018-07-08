import React,  {Component} from 'react';

class Users extends Component{

    constructor(){
        super();

        this.state={
            users:[],
            loaded: false,
            errored:false
        }

        this.getUsers=this.getUsers.bind(this);
    }

    getUsers(){
        var url="https://jsonplaceholder.typicode.com/users";

        fetch(url)
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users:this.state.users.concat(users),
                loaded:true,
            })
        })
        .catch((err)=>{
            this.setState({
                errored:true
            })
        })
    }

    render(){
        if(this.state.errored){
            return(
                <div>
                    Failed to fetch users, Please try later..
                </div>
            )
        }
        else if(this.state.loaded) {
            return (
                <div>
                    <ul>
                        {
                            this.state.users.map((user)=>{
                                return <li key={user.id}>{user.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
        else
        {
            return(
                <div>
                    Loading..
                </div>
            )
        }
    }

    componentDidMount(){
        this.getUsers();
    }

}

export default Users;