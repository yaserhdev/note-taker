const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html')),
  // app.get('/api/notes', (req, res) =>
  //   res.sendFile(path.join(__dirname, '/db/db.json'))
  // )
);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}/`));