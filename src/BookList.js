import React from 'react';
import Book from './Book'

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books:this.props.books
        }

        this.addToWishlist=this.addToWishlist.bind(this);
    }

    componentWillReceiveProps(newProps){
        console.log("newProps : " + JSON.stringify(newProps))
        this.setState({
            books:newProps.books
        })
    }

    addToWishlist(book){
        this.props.addToWishlist(book)
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.state.books.map((book)=>{
                        return <Book book={book} key={book.id} addToWishlist={this.addToWishlist}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default BookList