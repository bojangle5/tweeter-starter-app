const UserModel = require('../models/UserModel');
const TweetModel = require('../models/TweetModel');

module.exports = {

  list(req, res, next) {
    TweetModel.find({ user: req.params.userId})
      .populate('user')
      .exec()
      .then(tweets => {
        return res.json(tweets);
      })
      .catch(next);
  },

  create(req, res, next) {
    var foundUser;
    var createdTweet;

    UserModel.findById(req.params.userId).exec()
      .then( user => {
        foundUser = user;
        return new TweetModel({
          body: req.body.body,
          user: user
        }).save()
      })
      .then(tweet => {
        createdTweet = tweet;
        foundUser.tweets.push(tweet);
        return foundUser.save()
      })
      .then(() => {
        return res.json(createdTweet);
      })
      .catch(next);
  }
};
