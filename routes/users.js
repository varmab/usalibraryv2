var express=require("express");
var router = express.Router();

var users=[{
    id:1,
    role:"admin",
    name:"Varma Bhupatiraju"
}]


//Develop API for managing users

//Create
router.post("/",(req,res)=>{
    var user=req.body;
    users.push(user);
    res.send(users);
})

//Read
router.get("/",(req,res)=>{
    res.send(users);
})

router.get("/:id",(req,res)=>{
    var id=req.params.id;
    var filteredUsers=users.filter((user)=>{
        return user.id==id
    })
    res.send(filteredUsers[0]);
})

//Update
router.put("/:id",(req,res)=>{
    var id=req.params.id;
    var user = req.body;
    var filteredUsers=users.filter((user)=>{
        return user.id!=id
    })
    filteredUsers.push(user);
    res.send(filteredUsers);
})

//Delete
router.delete("/:id",(req,res)=>{
    var id=req.params.id;
    var filteredUsers=users.filter((user)=>{
        return user.id!=id
    })
    res.send(filteredUsers);
})

module.exports=router;