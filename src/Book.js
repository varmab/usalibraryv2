import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component{
    constructor(props){
        super(props);

        console.log(JSON.stringify(this.props));
        this.state={
            book:this.props.book
        }

        this.addToWishlist=this.addToWishlist.bind(this);
    }

    addToWishlist(){
        this.props.addToWishlist(this.state.book)
    }

    render(){
        return (
            <React.Fragment>
                <h3>{this.state.book.title}</h3>
                <button onClick={this.addToWishlist}>Add</button>
            </React.Fragment>
        )
    }
}

Book.propTypes={
    addToWishlist:PropTypes.func
}


export default Book;