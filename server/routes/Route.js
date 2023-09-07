// routes 

module.exports = (app) => {
    const controller = require('../controller/Controller');

    app.get('/getTodo', controller.findAll)
    app.post('/createTodo', controller.create)
    app.get('/deleteTodo/:todoId', controller.delete)
    app.post('/changeStatus/:todoId', controller.changeStatus)
}