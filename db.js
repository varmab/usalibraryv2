var mongoose=require('mongoose');

//Connect
mongoose.connect("mongodb://localhost:27017/usalibrary");

//Make mongoose calls to support ES6 promises
mongoose.Promise=global.Promise;

//Schema & Model
// var books=[{
//     id:1,
//     title: "Express Pro",
//     author:"Azat Madan"
// },
// {
//     id:2,
//     title: "Pro JavaScript",
//     author:"Brendan Eich"
// }];

var bookSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    author: String
})

exports.Book=mongoose.model('Book',bookSchema,'books');

///