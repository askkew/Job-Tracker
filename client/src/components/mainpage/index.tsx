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

  const handleCompanyName = (e: any) => setCompanyName(e.target.value)
  const handleJobTitle = (e: any) => setJobTitle(e.target.value)
  const handleJobLocation = (e: any) => setJobLocation(e.target.value)
  const handleLink = (e: any) => setLink(e.target.value)
  const handleStatus = (e: any) => setStatus(e.target.value)
  const handleEmail = (e: any) => setEmail(e.target.value)

  const handleAddJob = () => {
    const formData = {
      'companyName': companyName,
      'jobTitle': jobTitle,
      'jobLocation': jobLocation,
      'link': link,
      'status': status,
      'email': email,
    }
    console.log(formData)
  }

  return (
    <MainPageContainer>
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
          <Button onClick={handleAddJob} sx={{width: '150px', marginTop: '10px'}} variant="contained">Add Job</Button>
        </StyledFormControl>
      </NewJobCard>
      <JobCard>
        <h3>Company name</h3>
        <h3>Job title</h3>
        <h3>Job location</h3>
        <button>link</button>
        <button>status</button>
        <button>email/follow up</button>
        <button>remove</button>
      </JobCard>
    </MainPageContainer>
  )
}

export default MainPage