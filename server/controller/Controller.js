const Todo = require('../model/Schema')

// createing a todo
exports.create = (req, res) => {
    console.log(req.body);
    if(!req.body.note || !req.body.heading || !req.body.currStatus) {
        res.status(400).send({
            message: "Todo content can be empty"
        })
        return 
    }
    const todo = new Todo({
        heading: req.body.heading,
        note: req.body.note,
        currStatus: req.body.currStatus
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
exports.findAll = (req, res) => {
    Todo.find()
        .then(todos => {
            res.send(todos)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while retrieving"
            })
        })
}

exports.changeStatus = (req, res) => {

    const id = req.params.todoId;
    console.log("reached")
    Todo.findByIdAndUpdate(id, {currStatus: "done"})
        .then((todo) => {
            if(!todo){
                return res.status(404).send({
                    message: "Todonot found with id" + req.params.todoId
                })
            }
            res.send({message: "Todo updated successfully....!"})
        })
        .catch(err => {
            return res.status(404).send({
                message: "Todo not found with Id" + req.params.todoId 
            })
        })
    

}

// delete controller 
exports.delete = (req, res) => {
    console.log(req.params);
    Todo.findByIdAndDelete(req.params.todoId)
        .then(todo => {
            if(!todo){
                return res.status(404).send({
                    message: "Todonot found with id" + req.params.todoId
                })
            }
            res.send({message: "Todo deleted successfully....!"})
        })
        .catch(err => {
            return res.status(404).send({
                message: "Todo not found with Id" + req.params.todoId 
            })
        })
}