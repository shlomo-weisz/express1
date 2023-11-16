const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Bookscontroller = require('../controllers/Bookscontroller');


// GET /user
router.get('/', Bookscontroller.getAll);

router.get('/:BookID',Bookscontroller.getBookByID);

router.post('/', Bookscontroller.addBook);

router.put('/', Bookscontroller.updateBook);


router.patch('/:BookID', Bookscontroller.updateOneFilde);



router.delete('/:BookID',Bookscontroller.deleteBook);


module.exports = router;