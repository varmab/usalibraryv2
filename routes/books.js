var express=require("express");
var router = express.Router();
var db=require('../db');

//Develop API for managing books

//Create
router.route("/")
    .post((req,res)=>{
        var newBook=new db.Book(req.body);
        newBook.save()
        .then((book)=>{
            res.status(200).send(book);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    })
    .get((req,res)=>{
        db.Book.find({})
        .then((books)=>{
            res.status(200).send(books);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    })

router.get("/search/:term",(req,res)=>{
        var term=req.params.term;
        const regex = new RegExp(term.toLowerCase().trim(), 'i')

        db.Book.find({title: regex},(err,books)=>{
            res.send(books);
        })
    })

router.route("/:id")
    .get(async (req,res)=>{
        var id=req.params.id;
        var books=await db.Book.find({_id:id});
        res.send(books[0])
    })
    .put((req,res)=>{
        var id=req.params.id;
        db.Book.findByIdAndUpdate(id,req.body,(err,book)=>{
            res.send(book);
        })
    })
    .delete((req,res)=>{
        var id=req.params.id;
        db.Book.findByIdAndRemove(id,(err,book)=>{
            res.send(book);
        })
    })

module.exports=router;


