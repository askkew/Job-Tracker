const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB sucessfully');
});

// Define schema and model
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const Example = mongoose.model('Example', exampleSchema);

// Add document
app.post('/add', (req, res) => {
  const { name, age, email } = req.body;
  const example = new Example({ name, age, email });
  example.save()
    .then(() => res.status(200).json('Example added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update document
app.put('/update/:id', (req, res) => {
  Example.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.status(200).json('Example updated'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove document
app.delete('/remove/:id', (req, res) => {
  Example.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json('Example removed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});