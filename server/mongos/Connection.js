const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose
	.connect("mongodb+srv://manishkumarrai:@cluster0.epmvr9l.mongodb.net/?retryWrites=true&w=majority",{
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.catch(err => {
		console.log('connection error: ' + err.message);
	})

const db = mongoose.connection

module.exports = db 