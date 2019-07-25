var items = require('../controllers/items.js');

module.exports = function(app){
    app.post("/register", (req,res)=>{
        items.register(req,res);
    })
    app.post("/create", (req, res) =>{
        items.create(req,res);
    })
    app.get('/all', (req, res) =>{
        items.all(req, res);
    })
    app.get('/one/:id', (req, res)=>{
        items.one(req,res);
    })
}