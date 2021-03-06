const express = require('express');
const app = express();

const path = require('path')

// settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// Routes
app.use(require('./routes/route.js'));

// Middlewares

// static files
app.use(express.static(path.join(__dirname, 'public' )))

// listening the server
app.listen(app.get('port'),(err)=>{
  if(err){
    console.log('Ha ocurrido un error')
  }else{
    console.log('Server on port: ', app.get('port'))
  }
})



