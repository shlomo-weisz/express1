app.use(express.static(path.join(__dirname, "public")));

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const userRouter = require('./routes/books');
const logger = require('./middleware/logger');
const booksRouter = require('./routes/books');

// app.use(express.urlencoded({ extended: true }))

app.use(logger);
app.use(express.json());







app.use('/books', booksRouter);





app.get('/', (req, res) => {
	res.send('Hello to the library!');
});






app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
  })