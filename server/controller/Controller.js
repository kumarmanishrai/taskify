const Todo = require('../model/Schema')

// createing a todo
exports.create = (req, res) => {
    if(!req.body.note){
        return res.status(400).send({
            message: "Todo content can be empty"
        })
    }
    const todo = new Todo({
        note: req.body.note
    })
    todo.save()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while creating todo list"
        })
    })
}

// find all 

