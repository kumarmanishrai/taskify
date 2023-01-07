// routes 

module.exports = (app) => {
    const controller = require('../controller/Controller');

    app.post('/createTodo', controller.create)
    app.get('/getTodo', controller.findAll)
    app.delete('/todo/:todoId', controller.delete)
}