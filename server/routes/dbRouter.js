const express = require('express');
const router = express.Router();
const { getNewsFromDB, setNewsToDB, deleteNews } = require('../controllers/newsFromDBController')



router.get('/', getNewsFromDB)
router.post('/', setNewsToDB);
router.delete('/:id', deleteNews);



module.exports = router;