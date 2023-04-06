const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser")

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose.connect(process.env.ATLAS_URI);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

//-------------------schemas-------------------

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  jobLocation: { type: String, required: true },
  link: { type: String, required: true },
  status: { type: String, required: true },
  email: { type: String, required: true },
  timestamp: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
const Job = mongoose.model('Job', jobSchema);

//-------------------baseRoute-------------------

app.get('/', (req, res) => {
  res.send('Server is running');
});

//-------------------jobRoutes-------------------

// Define the route handler for creating a new job
app.post('/jobs/add', async (req, res) => {
  try {
    const { companyName, jobTitle, jobLocation, link, status, email, timestamp } = req.body;
    const newJob = new Job({ companyName, jobTitle, jobLocation, link, status, email, timestamp });
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the route handler for retrieving all jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the route handler for updating an existing job
app.put('/jobs/update/:id', async (req, res) => {
  try {
    const { companyName, jobTitle, jobLocation, link, status, email, timestamp } = req.body;
    const job = await Job.findByIdAndUpdate(req.params.id, { companyName, jobTitle, jobLocation, link, status, email, timestamp }, { new: true });
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the route handler for deleting an existing job
app.delete('/jobs/delete/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//-------------------userRoutes-------------------

// Define the route handler for creating a new user
app.post('/users/add', async (req, res) => {
  try {
    console.log(req.body); // add this line to see the request body
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the route handler for retrieving all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//--------------------------------------

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});