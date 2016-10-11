const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UsersTweetsController = require('../controllers/UsersTweetsController');

/* GET users listing. */
router.get('/:userId/tweets', UsersTweetsController.list);
//
// router.get('/:id', UsersTweetsController.show);

router.post('/:userId/tweets', UsersTweetsController.create);

// router.put('/:userId/tweets/:tweetId', UsersTweetsController.update);
//
// router.delete('/:userId/tweets/:tweetId', UsersTweetsController.remove);

module.exports = router;
