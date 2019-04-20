const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('~/views/index',{title: 'Home page'});

})
router.get('/contact',(req,res)=>{
  res.render('~/views/contact',{title: 'Contact page'});
})

module.exports = router;
