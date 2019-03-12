const express = require('express');
const app = module.exports = express(); 
app.set('view engine', 'ejs');

app.listen(3000, "127.0.0.1", (err, res) => {
    if(err){
        return  console.log('Error has occured', err);
    }
    console.log('Server is running on 3000');
} );

app.use(express.static('public'));
