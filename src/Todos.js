import React, {Component} from 'react'

const Todo=(props)=><li>{props.text}</li>

class Todos extends Component{

    constructor(){
        super();

        this.state={
            todos:[]
        }
    }

    addTodo(){
        var todo=this.refs.todo.value;
        this.setState({
            todos:[
                ...this.state.todos,
                todo
            ]
        })
    }

    render(){
        return (
            <div>
                <input type="text" ref="todo"/>
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map((todo)=>{
                            return <Todo text={todo} key={todo}/>
                        })
                    }
                </ul>
            </div>

        )
    }

}

export default Todos;