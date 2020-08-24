const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { ftruncate } = require('fs/promises');

//Initializations
const app = express();

//Setting
app.set('port', process.env.PORT || 3000); //variable de entorno, variable que esta en el sistema operativo 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))//obtenemos un datos del cliente y transformalo a json


//Routes
app.use(require('./routes/entries.routes'));

//404 Handler
app.use((req, res) => {
    //res.status(404).send('404 not found');
    res.status(404).render('404');
});

//Starting app


async function main(){
    app.listen(app.get('port'), ()=>{
        console.log('Server on port', app.get('port'));
    });
}

main()