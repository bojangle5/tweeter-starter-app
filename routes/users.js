const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UsersController = require('../controllers/UsersController.js');
const middleware = require('./middleware');

/* GET users listing. */

router.get('/', middleware.auth, function(req, res, next) {
  userModel.findOne({ _id: req.user.id }, function(err, user) {
    return res.json(user);
  })
});


router.get('/', UsersController.list);

router.post('/', UsersController.create);





module.exports = router;
