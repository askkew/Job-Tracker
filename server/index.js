const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// const uri = 'mongodb+srv://admin:bnr341999@cluster0.mvgqlfd.mongodb.net/jobtracker?retryWrites=true&w=majority';
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB sucessfully');
});

if (!mongoose.models.Job) {
  const jobSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    jobLocation: { type: String, required: true },
    link: { type: String, required: true },
    status: { type: String, required: true },
    email: { type: String, required: true }
  });
  mongoose.model('Job', jobSchema, 'job');
}

app.get('/jobs', async (req, res) => {
  try {
    const jobs = await mongoose.model('Job').find().exec();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.post('/jobs/add', async (req, res) => {
  try {
    const { companyName, jobTitle, jobLocation, link, status, email } = req.body;
    const newJob = new mongoose.model('Job')({ companyName, jobTitle, jobLocation, link, status, email });
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the route handler for updating an existing job
app.put('/jobs/update/:id', async (req, res) => {
  try {
    const { companyName, jobTitle, jobLocation, link, status, email } = req.body;
    const job = await mongoose.model('Job').findByIdAndUpdate(req.params.id, { companyName, jobTitle, jobLocation, link, status, email }, { new: true });
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the route handler for deleting an existing job
app.delete('/jobs/delete/:id', async (req, res) => {
  try {
    const job = await mongoose.model('Job').findByIdAndDelete(req.params.id);
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
