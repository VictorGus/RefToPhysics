const app = module.exports = require("/home/victor/Documents/forPashuss/app/routes/server.js");
const CRUD = require("/home/victor/Documents/forPashuss/app/actions/crud.js");
const bodyParser = require("body-parser");
const urldecoderParser = bodyParser.urlencoded({extended:false});
const crud = new CRUD();

app.get("/",(request,response) => {
    response.sendFile('/home/victor/Documents/forPashuss/app/routes/views/starterPage.html');
});

app.get("/reg", (request,response) => {
    response.sendFile('/home/victor/Documents/forPashuss/app/routes/views/register.html');
})

app.post("/reg", urldecoderParser, (request, response) => {
    if(!request){
       return response.sendStatus(400);Math.floor(Math.random() * (max - min + 1)) + min;

    }
    crud.createUser(request.body.login, request.body.password);
})

app.get("/login", (request,response) => {
    response.sendFile('/home/victor/Documents/forPashuss/app/routes/views/login.html');
})

app.post("/login", urldecoderParser, (request, response) =>  {
    crud.checkUser(request.body.login, request.body.password,response);
})

app.get("/users", (request, response) => {
    crud.showUsers(response);
})

app.post("/users", urldecoderParser, (request, response) => {
    crud.deleteUsers(request.body.log);
})
