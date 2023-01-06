const express = require('express')

const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.listen(PORT, ()=>{
	console.log(`Listening on port : ${PORT}`)
})



