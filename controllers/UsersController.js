const UserModel = require('../models/UserModel.js');

module.exports = {
  list(req,res,next) {
    UserModel.find()
      // .populate('tweets')
      .exec()
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        return next(err);
    });
  },
  // show(req, res, next) {
  //   UserModel.FindById(req.params.id)
  //   // .populate()
  //   .exec()
  //   .then(user => {
  //     return res.json(user);
  //   })
  //   .catch(err => {
  //     return next(err);
  //   });
  // },

  create: function(req, res) {
    const user = new UserModel({
      username: req.body.username,
      avatarUrl: req.body.avatarUrl,
      bio: req.body.bio,
      tweet: req.body.tweet
    });
    user.save((err, user) => {
      res.json(user);
    });
  }

  // update: function(req, res) {
  //   var id = req.params.id;
  //   UserModel.findOne({_id: id}, function(err, user) {
  //     user.username = req.body.username;
  //     user.avatarUrl = req.body.avatarUrl;
  //     user.bio = req.body.bio;
  //     user.tweet = req.body.tweet;
  //
  //     user.save(function (err, user) {
  //       res.json(user);
  //     });
  //   });
  // },
  //
  // remove: function(req, res) {
  //   var id = req.params.id;
  //   UserModel.findByIdAndRemove({_id: id}, function (err, user) {
  //     return res.json(user);
  //   });
  // },

};
