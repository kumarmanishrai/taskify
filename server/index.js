const express = require('express')
require('dotenv').config()

const cors = require('cors')



const db = require('./mongos/Connection')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

db.on('error', console.error.bind(console, "MongoDB connection error"))
db.once('open', function(){
	console.log("mongodb connected successfully");
})
app.use(cors({
    origin: ["https://mern-todo-lemon-nu.vercel.app/"],
    method: ['GET','HEAD', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],   
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://mern-todo-lemon-nu.vercel.app/");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

require('./routes/TodoRoute')(app)
require('./routes/UserRoute')(app)



app.listen(PORT, ()=>{
	console.log(`Listening on port : ${PORT}`)
})



