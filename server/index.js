const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = 'mongodb+srv://admin:bnr341999@cluster0.mvgqlfd.mongodb.net/jobtracker?retryWrites=true&w=majority';
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

// Define the route handler for getting all jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await mongoose.model('Job').find().exec();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// // Define schema and model
// const Schema = mongoose.Schema;
// const jobSchema = new Schema({
  // companyName: { type: String, required: true },
  // jobTitle: { type: Number, required: true },
  // jobLocation: { type: String, required: true },
  // link: { type: String, required: true },
  // status: { type: String, required: true },
  // email: { type: String, required: true },
// });

// const Job = mongoose.model('Job', jobSchema, 'jobtracker1');

// // Add document

// app.post('/add', (req, res) => {
//   const { companyName, jobTitle, jobLocation, link, status, email } = req.body;
//   const job = new Job({ companyName, jobTitle, jobLocation, link, status, email });
//   job.save()
//     .then(() => res.status(200).json('Job added'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // Update document
// app.put('/update/:id', (req, res) => {
//   Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(() => res.status(200).json('Job updated'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // Remove document
// app.delete('/remove/:id', (req, res) => {
//   Job.findByIdAndRemove(req.params.id)
//     .then(() => res.status(200).json('Job removed'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });