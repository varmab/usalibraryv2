import React,  {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component {
    constructor(){
        super();

        this.state={
            count:0
        }
    }

    updateCount(){
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        return <h1 className="App-title" onClick={this.updateCount.bind(this)}>Welcome to {this.props.name} ({this.state.count})</h1>
    }
}

Welcome.propTypes={
    name: PropTypes.string.isRequired
}

Welcome.defaultProps={
    name:"USA Library"
}

export default Welcome;

