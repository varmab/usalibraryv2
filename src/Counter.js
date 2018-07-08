import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super();

        console.log("Constructor")

        this.state={
            count:0
        }

        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
        console.log("Component did mount")
    }

    increment(){
        this.setState({
            count:this.state.count+1
        })
    }

    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        console.log("render")
        return (
            <div>
                <h1>Counter</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment.bind(this)}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }
}

export default Counter;