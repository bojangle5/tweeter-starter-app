const Backbone = require('backbone');
const TweetModel = require('../models/TweetModel');

const TweetsCollection = Backbone.Collection.extend({
  url: '/tweets',
  model: TweetModel
});

module.exports = TweetsCollection;
