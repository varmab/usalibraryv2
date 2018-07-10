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
                
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                        <p className="card-text">{this.state.book.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted"></small>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Book.propTypes={
    addToWishlist:PropTypes.func
}


export default Book;