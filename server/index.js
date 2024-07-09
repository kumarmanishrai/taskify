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
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE"]
}))

require('./routes/TodoRoute')(app)
require('./routes/UserRoute')(app)



app.listen(PORT, ()=>{
	console.log(`Listening on port : ${PORT}`)
})



