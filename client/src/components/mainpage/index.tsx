import { Button, FormControl, TextField } from "@mui/material"
import { GridContainer, JobCard, JobItem, JobItemColumn, JobItemLabels, JobItemRow, MainPageContainer, NewJobCard, StyledFormControl } from "./MainPageStyles"
import { useEffect, useState } from "react"
import axios from "axios"
import { primaryAccent } from "../../utils"
import { CustomButton } from "../../utils/button"
import { AiFillEdit } from "react-icons/ai"
import { BsCalendarDateFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import moment from "moment"

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
  const [editFields, setEditFields] = useState<any>({})

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

  const handleEditField = (fieldName: string) => {
    setEditFields((prevState: any) => ({
      ...prevState,
      [fieldName]: true,
    }))
  }
  
  const handleAddJob = async () => {
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
    const formData = {
      'companyName': companyName,
      'jobTitle': jobTitle,
      'jobLocation': jobLocation,
      'link': link,
      'status': status,
      'email': email,
      'timestamp': timestamp
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
          <CustomButton style={{width: '140px', marginTop: '10px'}} onClick={handleAddJob}>Add Job</CustomButton>
        </StyledFormControl>
      </NewJobCard>
      <JobCard>
        <JobItemLabels>
          <h3>Company name</h3>
          <h3>Job title</h3>
          <h3>Job location</h3>
          <h3>link</h3>
          <h3>status</h3>
          <h3>email/follow up</h3>
          <h3>edit <AiFillEdit /> </h3>
          <span>Date applied <BsCalendarDateFill /> </span>
        </JobItemLabels>
        <JobItemRow>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.companyName}</h3>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.jobTitle}</h3>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.jobLocation}</h3>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.link}</h3>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.status}</h3>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.email}</h3>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <h3>{job.timestamp}</h3>
                <button>edit</button>
                <h3 style={{display: 'none'}}>{job._id}</h3>
                <button onClick={() => handleRemoveJob(job._id)}>Delete <AiFillDelete /></button>
              </JobItem>
            ))}
          </JobItemColumn>
        </JobItemRow>
      </JobCard>
    </MainPageContainer>
  )
}

export default MainPage