var express=require("express");
var app = express();
var cors = require('cors');

app.use(cors())

var books=require('./routes/books');
var users=require('./routes/users');

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const port=8000;

if((process.env.NODE_ENV) && (process.env.NODE_ENV=='production')){
    console.log("server is running as production")
    app.use(express.static("build"))
}
else
{
    app.use(express.static("public"));
}


app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });

app.get("/",(req,res)=>{
    res.send("Welcome to USA Library API Server")
})

app.use("/api/books",books);
app.use("/api/users",users);

app.listen(port,()=>{
    console.log(`USA Library Server is started at port ${port}`)
})