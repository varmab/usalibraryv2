import React from 'react';
import BookList from './BookList';
import Search from './Search'

class Library extends React.Component{
    constructor(){
        super();

        this.state={
            books:[],
            wishlist:[],
            loaded:false,
            errored:false
        }

        this.addToWishlist=this.addToWishlist.bind(this);
        this.search=this.search.bind(this);
        this.getBooks=this.getBooks.bind(this);
        this.searchBooks=this.searchBooks.bind(this)
    }

    getBooks(){
        var url="/api/books";

        fetch(url)
        .then((response)=>response.json())
        .then((books)=>{
            this.setState({
                books:this.state.books.concat(books),
                loaded:true,
            })
        })
        .catch((err)=>{
            this.setState({
                errored:true
            })
        })
    }

    searchBooks(term){
        var url="/api/books/search/" +  term;

        fetch(url)
        .then((response)=>response.json())
        .then((books)=>{
            this.setState({
                books:books,
                loaded:true,
            })
        })
        .catch((err)=>{
            this.setState({
                errored:true
            })
        })
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
        this.searchBooks(term);
    }

    render(){
        return (
            <div>
                <Search search={this.search}/>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </div>
        )
    }

    componentDidMount(){
        this.getBooks();
    }
}

export default Library;