// routes 

module.exports = (app) => {
    const controller = require('../controller/Controller');

    app.post('/createTodo', controller.create)
}