// routes 
const {protect} = require('../middleware/AuthMiddleware')
module.exports = (app) => {
    const controller = require('../controller/TodoController');

    app.get('/getTodo',protect, controller.findAll)
    app.post('/createTodo', protect, controller.create)
    app.get('/deleteTodo/:todoId',protect, controller.delete)
    app.post('/changeStatus/:todoId', protect, controller.changeStatus)
}