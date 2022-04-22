const express = require('express');
const router = express.Router();
const { getNewsFromDB } = require('../controllers/goalController')



router.route('/').get(getNewsFromDB);
// .post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router;