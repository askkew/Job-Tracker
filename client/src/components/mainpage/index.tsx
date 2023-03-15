import { Button, FormControl, TextField } from "@mui/material"
import { GridContainer, JobCard, MainPageContainer, NewJobCard, StyledFormControl } from "./MainPageStyles"
import { useEffect, useState } from "react"
import axios from "axios"

const MainPage = () => {
  const [companyName, setCompanyName] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [link, setLink] = useState("")
  const [status, setStatus] = useState("")
  const [email, setEmail] = useState("")
  const [jobs, setJobs] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")

  const handleCompanyName = (e: any) => setCompanyName(e.target.value)
  const handleJobTitle = (e: any) => setJobTitle(e.target.value)
  const handleJobLocation = (e: any) => setJobLocation(e.target.value)
  const handleLink = (e: any) => setLink(e.target.value)
  const handleStatus = (e: any) => setStatus(e.target.value)
  const handleEmail = (e: any) => setEmail(e.target.value)

  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/jobs")
    setJobs(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])


  const handleAddJob = async () => {
    const formData = {
      'companyName': companyName,
      'jobTitle': jobTitle,
      'jobLocation': jobLocation,
      'link': link,
      'status': status,
      'email': email,
    }
    try {
      const response = await axios.post('http://localhost:5000/jobs/add', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    fetchData();
  }

  const handleRemoveJob = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:5000/jobs/delete/${id}`);
      console.log(response.data);
      fetchData(); // refetch data after deleting the job
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainPageContainer>
      <div>
        {message}
      </div>
      <NewJobCard>
        <StyledFormControl>
          <GridContainer>
            <TextField label="Company name" value={companyName} onChange={handleCompanyName} />
            <TextField label="Job title" value={jobTitle} onChange={handleJobTitle} />
            <TextField label="Job location" value={jobLocation} onChange={handleJobLocation} />
            <TextField label="link" value={link} onChange={handleLink} />
            <TextField label="status" value={status} onChange={handleStatus} />
            <TextField label="email/follow up" value={email} onChange={handleEmail} />
          </GridContainer>
          <Button onClick={handleAddJob} sx={{width: '150px', marginTop: '10px', backgroundColor: 'green'}} variant="contained">Add Job</Button>
        </StyledFormControl>
      </NewJobCard>
      { jobs && jobs?.data.map((job: any, index: any) => (
        <JobCard key={index}>
          <h3>{job.companyName}</h3>
          <h3>{job.jobTitle}</h3>
          <h3>{job.jobLocation}</h3>
          <button>{job.link}</button>
          <button>{job.status}</button>
          <button>{job.email}</button>
          <button onClick={() => handleRemoveJob(job._id)}>remove</button>
        </JobCard>
      ))}
    </MainPageContainer>
  )
}

export default MainPage