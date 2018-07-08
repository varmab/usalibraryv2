import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }

        this.search=this.search.bind(this);
    }

    search(e){
        e.preventDefault();
        //var term = e.target.elements.term.value;
        var term = this.refs.term.value;
        console.log("term:" + term);
        this.props.search(term)
    }

    render(){
        return (
            <React.Fragment>
                <form>
                    <input type="text" name="term" ref="term"/>
                    <button onClick={this.search}>Search</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Search;