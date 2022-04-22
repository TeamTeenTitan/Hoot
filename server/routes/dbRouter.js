const express = require('express');
const router = express.Router();
const { getNewsFromDB, setNewsToDB } = require('../controllers/newsFromDBController')



router.get('/', getNewsFromDB)
router.post('/', setNewsToDB);



module.exports = router;