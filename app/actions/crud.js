const db = require('/home/victor/Documents/forPashuss/app/routes/dbconnection.js');

class CRUD{
    createUser(userLogin, userPassword) {
        var randomId = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;
        console.log(randomId);
        db.query(`INSERT INTO users VALUES('${randomId}'::integer, '${userLogin}', '${userPassword}', false)`, (err,res) => {
            if(err){
                throw err;
            }
        }); 
    }

    checkUser(userLogin, userPassword, response) {
        const login = userLogin.toString(userLogin);
        const password = userPassword.toString(userPassword);
        db.query(`SELECT * FROM users WHERE login = '${login}' AND password = '${password}'`, (err,res) => {
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

    deleteUsers(login){
        db.query(`DELETE FROM users WHERE login = '${login}'`, (err,res) => {
            if(err){
                throw err;
            }
        })
    }
}

module.exports = CRUD;
