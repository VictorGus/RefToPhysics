const db = require('/home/victor/Documents/forPashuss/app/routes/dbconnection.js');

class CRUD{
    createUser(userLogin, userPassword, response) {
        var randomId = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;
        db.query(`SELECT * FROM users WHERE login = '${userLogin}'`, (err, result) => {
            if(result.rows.length === 0){
            db.query(`INSERT INTO users VALUES('${randomId}'::integer, '${userLogin}', '${userPassword}', false)`, (err,res) => {
                if(err){
                    throw err;
                }
             });
            }
            else {
                response.send('Such user already exists'); 
            }
        })
       
    }

    checkUser(userLogin, userPassword, response) {
        const login = userLogin.toString(userLogin);
        const password = userPassword.toString(userPassword);
        db.query(`SELECT * FROM users WHERE login = '${login}'`, (err,res) => {
            if(err){
                throw err;
            }
            console.log(res.rows);
            if(res.rows.length > 0){
                response.sendFile('/home/victor/Documents/forPashuss/app/routes/views/starterPage.html');
            }
            else {
                response.send('Wrond login or password');
            }
        })
    }

    showUsers(response){
        db.query(`SELECT * FROM users;`, (err,res) => {
            if(err){
                throw err;
            }
            const logins = [];
            for(var i = 0; i < res.rows.length; i++){
                if(res.rows[i].isadmin === false){
                    logins[i] = res.rows[i].login;
                }
            }
            response.render("showusers", {login:logins});
        })
    }

    showTasks(response) {
        db.query(`SELECT * FROM tasks`, (err, res) => {
            if(err){
                throw err;
            }
            const task = [];
            var editedTask = [];
            const taskID = [];
            for(var i = 0; i < res.rows.length; i++) {
                task[i] = res.rows[i].text;
                taskID[i] = res.rows[i].id;
                editedTask[i] = JSON.stringify(task[i]);
                editedTask[i] = editedTask[i].replace('{"text":','');
                editedTask[i] = editedTask[i].replace('}','');
            }
            response.render("showtasks", {tasks:editedTask, id:taskID});
        })
    }

    showKinematicTasks(response) {
        db.query(`SELECT * FROM tasks WHERE title = 'Кинематика'`, (err, res) => {
            if(err){
                throw err;
            }
            const task = [];
            var editedTask = [];
            const taskID = [];
            if(res.rows.length === 0) {
                editedTask[0] = "Нет задач по теме кинематтика"; 
                response.render("kinematics", {tasks:editedTask, id:taskID});
            }
            else {
                for(var i = 0; i < res.rows.length; i++) {
                    task[i] = res.rows[i].text;
                    taskID[i] = res.rows[i].id;
                    editedTask[i] = JSON.stringify(task[i]);
                    editedTask[i] = editedTask[i].replace('{"text":','');
                    editedTask[i] = editedTask[i].replace('}','');
                }
                response.render("kinematics", {tasks:editedTask, id:taskID});
            }
        });
    }

    showThermodynamicsTasks(response) {
        db.query(`SELECT * FROM tasks WHERE title = 'Термодинамика'`, (err, res) => {
            if(err){
                throw err;
            }
            const task = [];
            var editedTask = [];
            const taskID = [];
            if(res.rows.length === 0) {
                editedTask[0] = "Нет задач по теме термодинамика"; 
                response.render("thermodynamics", {tasks:editedTask, id:taskID});
            }
            else {
                for(var i = 0; i < res.rows.length; i++) {
                    task[i] = res.rows[i].text;
                    taskID[i] = res.rows[i].id;
                    editedTask[i] = JSON.stringify(task[i]);
                    editedTask[i] = editedTask[i].replace('{"text":','');
                    editedTask[i] = editedTask[i].replace('}','');
                }
                response.render("thermodynamics", {tasks:editedTask, id:taskID});
            }
        })
    }

    showMechanicsTasks(response) {
        db.query(`SELECT * FROM tasks WHERE title = 'Механические колебания'`, (err, res) => {
            if(err) {
                throw err;
            }
            const task = [];
            var editedTask = [];
            const taskID = [];
            if(res.rows.length === 0) {
                editedTask[0] = "Нет задач по теме механические колебания"; 
                response.render("mechanics", {tasks:editedTask, id:taskID});
            }
            else {
                for(var i = 0; i < res.rows.length; i++) {
                    task[i] = res.rows[i].text;
                    taskID[i] = res.rows[i].id;
                    editedTask[i] = JSON.stringify(task[i]);
                    editedTask[i] = editedTask[i].replace('{"text":','');
                    editedTask[i] = editedTask[i].replace('}','');
                }
                response.render("mechanics", {tasks:editedTask, id:taskID});
            }
        })
    }

    showQuantumPhysicsTasks(response) {
        db.query(`SELECT * FROM tasks WHERE title = 'Квантовая физика'`, (err, res) => {
            if(err){
                throw err;
            }
            const task = [];
            var editedTask = [];
            const taskID = [];
            if(res.rows.length === 0) {
                editedTask[0] = "Нет задач по теме квантовая физика"; 
                response.render("quantumphysics", {tasks:editedTask, id:taskID});
            }
            else {
                for(var i = 0; i < res.rows.length; i++) {
                    task[i] = res.rows[i].text;
                    taskID[i] = res.rows[i].id;
                    editedTask[i] = JSON.stringify(task[i]);
                    editedTask[i] = editedTask[i].replace('{"text":','');
                    editedTask[i] = editedTask[i].replace('}','');
                }
                response.render("quantumphysics", {tasks:editedTask, id:taskID});
            }
        })
    }

    showTasksUser(response) {
        db.query(`SELECT * FROM tasks`, (err, res) => {
            if(err){
                throw err;
            }
            const task = [];
            var editedTask = [];
            const taskID = [];
            for(var i = 0; i < res.rows.length; i++) {
                task[i] = res.rows[i].text;
                taskID[i] = res.rows[i].id;
                editedTask[i] = JSON.stringify(task[i]);
                editedTask[i] = editedTask[i].replace('{"text":','');
                editedTask[i] = editedTask[i].replace('}','');
            }
            response.render("tasks", {tasks:editedTask, id:taskID});
        })
    }

    deleteTasks(id){
        console.log(id);
        db.query(`DELETE FROM tasks WHERE id = '${id}'::integer`, (err, res) => {
            if(err) {
                throw err;
            }
        })
    }

    deleteUsers(login){
        db.query(`DELETE FROM users WHERE login = '${login}'`, (err,res) => {
            if(err){
                throw err;
            }
        })
    }
}

module.exports = CRUD;
