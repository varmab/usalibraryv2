import React from 'react';
import BookList from './BookList';
import Search from './Search'

class Library extends React.Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JavaScript Fundamentals"
            },
            {
                id:2,
                title:"Node Advanced"
            },
            {
                id:3,
                title:"React Intermediate"
            }
        ]

        this.state={
            books,
            wishlist:[]
        }

        this.addToWishlist=this.addToWishlist.bind(this);
        this.search=this.search.bind(this);
    }

    addToWishlist(book){
        this.setState({
            wishlist:[
                        ...this.state.wishlist, book
            ]
        })
    }

    search(term){
        console.log("term in library:" +  term)
        //
        this.setState({
            books:this.state.books.filter((book)=>book.title.indexOf(term)!=-1)
        })
    }

    render(){
        return (
            <div>
                My wishlist:{this.state.wishlist.length}
                <Search search={this.search}/>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </div>
        )
    }
}

export default Library;