const express = require('express');
const app = express();

const path = require('path')

// settings
app.set('port',   3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// Routes
app.use(require('./routes/index'));

// Middlewares

// static files
app.use(express.static(path.join(__dirname, 'public' )))

// listening the server
app.listen(process.env.PORT /*app.get('port')*/,(err)=>{
  if(err){
    console.log('Ha ocurrido un error')
  }else{
    console.log('Server on port: ', app.get('port'))
  }
})



