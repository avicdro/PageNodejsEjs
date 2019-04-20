const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/',(req,res)=>{
  res.render('../views/index.html',{title: 'Home page'});
})
router.get('/contact',(req,res)=>{
  res.render('../views/contact.html',{title: 'Contact page'});

})

module.exports = router;
