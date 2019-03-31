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
       return response.sendStatus(400);

    }
    crud.createUser(request.body.login, request.body.password, response);
})

app.get("/login", (request,response) => {
    response.sendFile('/home/victor/Documents/forPashuss/app/routes/views/login.html');
})

app.post("/login", urldecoderParser, (request, response) =>  {
    if(!request){
        return response.sendStatus(400);
    }
    crud.checkUser(request.body.login, request.body.password,response);
})

app.get("/users", (request, response) => {
    crud.showUsers(response);
})

app.post("/users", urldecoderParser, (request, response) => {
    if(!request){
        return response.sendStatus(400);
    }
    crud.deleteUsers(request.body.log);
})

app.get("/admintasks", (request, response) => {
    crud.showTasks(response);  
})

app.get('/tasks', (request, response) => {
    crud.showTasksUser(response);
})

app.post("/admintasks", urldecoderParser, (request, response) => {
    if(!request){
        return response.sendStatus(400);
    }
    crud.deleteTasks(request.body.taskID);
})

app.get('/themes', (request,response) => {
    response.sendFile("/home/victor/Documents/forPashuss/app/routes/views/taskthemes.html");
})

app.get('/kinematics', (request,response) => {
    crud.showKinematicTasks(response);
})

app.get('/thermodynamics', (request, response) => {
    crud.showThermodynamicsTasks(response);
})

app.get('/quantumphysics', (request, response) => {
    crud.showQuantumPhysicsTasks(response);
})

app.get('/mechanics', (request, response) => {
    crud.showMechanicsTasks(response);
})
