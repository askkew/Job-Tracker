import { Button, FormControl, InputBase, Link, TextField } from "@mui/material"
import { ColumnDiv, CompanyNameText, CustomInputField, GridContainer, JobCard, JobItem, JobItemColumn, JobItemLabels, JobItemRow, MainPageContainer, NewJobCard, StyledFormControl, StyledIconButton, TimeStampText } from "./MainPageStyles"
import { useEffect, useState } from "react"
import axios from "axios"
import { primaryAccent } from "../../utils"
import { CustomButton } from "../../utils/button"
import { AiFillEdit } from "react-icons/ai"
import { BsCalendarDateFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineLink } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
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
    setCompanyName('');
    setJobTitle('');
    setJobLocation('');
    setLink('');
    setStatus('');
    setEmail('');
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
            <CustomInputField placeholder="Company name" value={companyName} onChange={handleCompanyName} />
            <CustomInputField placeholder="Job title" value={jobTitle} onChange={handleJobTitle} />
            <CustomInputField placeholder="Job location" value={jobLocation} onChange={handleJobLocation} />
            <CustomInputField placeholder="Link" value={link} onChange={handleLink} />
            <CustomInputField placeholder="Status" value={status} onChange={handleStatus} />
            <CustomInputField placeholder="Email" value={email} onChange={handleEmail} />
          </GridContainer>
          <CustomButton style={{width: '140px', marginTop: '10px'}} onClick={handleAddJob}>Add Job</CustomButton>
        </StyledFormControl>
      </NewJobCard>
      <JobCard>
        <JobItemLabels>
          <CompanyNameText style={{width: '150px'}}>Company name</CompanyNameText>
          <CompanyNameText style={{width: '200px'}}>Job title</CompanyNameText>
          <CompanyNameText style={{width: '120px'}}>Job location</CompanyNameText>
          <CompanyNameText style={{width: '50px'}}>Link</CompanyNameText>
          <CompanyNameText style={{width: '100px'}}>Status</CompanyNameText>
          <CompanyNameText style={{width: '50px'}}>Email</CompanyNameText>
          <CompanyNameText style={{width: '80px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>Edit <AiFillEdit /> </CompanyNameText>
          <CompanyNameText style={{width: '150px'}}>Date applied <BsCalendarDateFill /> </CompanyNameText>
        </JobItemLabels>
        <JobItemRow>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <CompanyNameText style={{width: '150px'}}>{job.companyName}</CompanyNameText>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <CompanyNameText style={{width: '200px'}}>{job.jobTitle}</CompanyNameText>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <CompanyNameText style={{width: '120px'}}>{job.jobLocation}</CompanyNameText>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <StyledIconButton style={{width: '50px', marginRight: '40px'}}>
                  <Link href={job.link} target="_blank" >
                    <AiOutlineLink />
                  </Link>
                </StyledIconButton>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <CompanyNameText style={{width: '100px'}}>{job.status}</CompanyNameText>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <StyledIconButton style={{width: '50px', marginRight: '40px'}}>
                  <Link href={job.email} target="_blank" >
                    <AiOutlineMail />
                  </Link>
                </StyledIconButton>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'left',}}>
                <ColumnDiv>
                  <button>Saved Changes</button>
                  <h3 style={{display: 'none'}}>{job._id}</h3>
                  <button onClick={() => handleRemoveJob(job._id)}>Delete <AiFillDelete /></button>
                </ColumnDiv>
                <TimeStampText style={{marginLeft: '10px'}}>{job.timestamp}</TimeStampText>
              </JobItem>
            ))}
          </JobItemColumn>
        </JobItemRow>
      </JobCard>
    </MainPageContainer>
  )
}

export default MainPage