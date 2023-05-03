
var express = require('express');
var router = express.Router();
var controller=require('../controller/controller')


/* GET home page. */

router.get('/',controller.view)
router.get('/viewall/:id',controller.viewall)
router.get('/:id',controller.delete)
router.get('/adduser',controller.form)
router.post('/adduser',controller.create)
router.get('/edit/:id',controller.edit)
router.post('/edit/:id',controller.update)
router.post('/',controller.find)
module.exports = router;
