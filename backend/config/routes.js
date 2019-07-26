var items = require('../controllers/items.js');
var path = require('path');

module.exports = function(app){
    app.post("/a/register", (req,res)=>{
        items.register(req,res);
    })
    app.post("/a/create", (req, res) =>{
        items.create(req,res);
    })
    app.get('/a/all', (req, res) =>{
        items.all(req, res);
    })
    app.get('/a/one/:id', (req, res)=>{
        items.one(req,res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}