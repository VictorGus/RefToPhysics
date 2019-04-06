const app = module.exports = require("./server.js");
const passport = require("../actions/authentication.js");
const CRUD = require("../actions/crud.js");
const bodyParser = require("body-parser");
const urldecoderParser = bodyParser.urlencoded({extended:false});
const crud = new CRUD();
app.get("/",(request,response) => {
    response.sendFile('views/starterPage.html', { root: __dirname });
    //response.sendFile('/home/victor/Documents/forPashuss/app/routes/views/starterPage.html');
});

app.get("/reg", (request,response) => {
    response.sendFile('views/regPage.html', {root: __dirname});
})

app.post("/reg", urldecoderParser, (request, response) => {
    if(!request){
       return response.sendStatus(400);
    }
    crud.createUser(request.body.username, request.body.pass,response);
})

app.get("/login", (request,response) => {
    if(request.session.username) {
        response.send('You are already logged in');
    }
    response.sendFile('views/login.html', {root: __dirname});
})

app.get("/account/admintasksmanagement", (request,response) => {
    crud.showTasksAdmin(response);
})

app.get("/account/admintasksmanagement/addnewtask", (request, response) => {
    response.sendFile('views/newTasks.html', {root: __dirname});
}) 
 
app.post("/account/admintasksmanagement/addnewtask", urldecoderParser, (request, response) => {
    crud.addNewTask(request.body.id, request.body.tasktext, request.body.theme);
    response.redirect("/account/admintasksmanagement");
})

app.post("/account/admintasksmanagement/edit/ed", urldecoderParser, (request, response) => {
    crud.editTask(request.body.id, request.body.tasktext, request.body.theme);
    response.redirect("/account/admintasksmanagement");
})

app.post("/account/admintasksmanagement/edit", urldecoderParser, (request,response) => {
    crud.taskToEditForm(response, request.body.id);
})


app.post("/account/admintasksmanagement/delete", urldecoderParser, (request,response) => {
    crud.deleteTasks(request.body.id);
    response.redirect("/account/admintasksmanagement");
})

app.post("/login", urldecoderParser, (request, response) =>  {
    if(!request){
        return response.sendStatus(400);
    }
    if(request.body.login == 'admin' && request.body.password == 'admin'){
        request.session.username = "admin";
        response.redirect('/account');
    }
  //crud.checkUser(request.body.username, request.body.pass,response);
})

app.get("/users", (request, response) => {
    if(request.session.username) {
        crud.showUsers(response);
    } else {
        response.redirect('/login');
    }
})

app.get("/account", (request, response) => {
    if(request.session.username) {
        response.render('adminpage', {username: request.session.username, permission: 'true', amountoftasks: request.session.amountOfTasks});
        
    }
    else {
        response.redirect('/login');
    }
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
    response.sendFile("views/taskthemes.html", {root: _dirname});
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
