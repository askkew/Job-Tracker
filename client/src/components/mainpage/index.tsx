import { Button, FormControl, InputBase, Link, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { StyledSelect, RowDiv, CompanyNameText, CustomInputField, GridContainer, JobCard, JobItem, JobItemColumn, JobItemLabels, JobItemRow, MainPageContainer, NewJobCard, SaveButton, StyledFormControl, StyledIconButton, TimeStampText, AlertContainer, StyledOption, SmallCardContainer } from "./MainPageStyles"
import { useEffect, useState } from "react"
import axios from "axios"
import { primaryAccent } from "../../utils"
import { CustomButton } from "../../utils/button"
import { AiFillEdit } from "react-icons/ai"
import { BsCalendarDateFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineLink } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import moment from "moment"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import PendingCard from "../pendingcard"
import TotalCard from "../totalcard"
import DeniedCard from "../deniedcard"

const MainPage = () => {
  const [companyName, setCompanyName] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [link, setLink] = useState("")
  const [status, setStatus] = useState("")
  const [email, setEmail] = useState("")
  const [jobs, setJobs] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState(localStorage.getItem('message') || '');
  const [showMessage, setShowMessage] = useState(localStorage.getItem('showMessage') === 'true');
  const [editFields, setEditFields] = useState<any>({})

  const handleCompanyName = (e: any) => setCompanyName(e.target.value)
  const handleJobTitle = (e: any) => setJobTitle(e.target.value)
  const handleJobLocation = (e: any) => setJobLocation(e.target.value)
  const handleLink = (e: any) => setLink(e.target.value)
  const handleStatus = (e: any) => setStatus(e.target.value)
  const handleEmail = (e: any) => setEmail(e.target.value)

  const [stat, setStat] = useState('');

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStat(event.target.value);
  };

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
  
  useEffect(() => {
    localStorage.setItem('message', message);
    localStorage.setItem('showMessage', showMessage.toString());
  }, [message, showMessage]);

  useEffect(() => {
    if (message !== '') {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // hide message after 3 seconds
    }
  }, [message]);

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
    toast('Job added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const handleRemoveJob = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this job?');
    if (confirmed) {
      try {
        const response = await axios.delete(`http://localhost:5000/jobs/delete/${id}`);
        console.log(response.data);
        fetchData(); // refetch data after deleting the job
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <MainPageContainer>
      <SmallCardContainer>
        <PendingCard />
        <TotalCard />
        <DeniedCard />
      </SmallCardContainer>
      <NewJobCard>
        <StyledFormControl>
          <GridContainer>
            <CustomInputField placeholder="Company name" value={companyName} onChange={handleCompanyName} />
            <CustomInputField placeholder="Job title" value={jobTitle} onChange={handleJobTitle} />
            <CustomInputField placeholder="Job location" value={jobLocation} onChange={handleJobLocation} />
            <CustomInputField placeholder="Link" value={link} onChange={handleLink} />
            <CustomInputField placeholder="Status" value={status} onChange={handleStatus} />
            <CustomInputField placeholder="Email" value={email} onChange={handleEmail} />
            <CustomButton style={{width: '140px', marginLeft: '10px'}} onClick={handleAddJob}>Add Job</CustomButton>
          </GridContainer>
        </StyledFormControl>
      </NewJobCard>
      <JobCard>
        <JobItemLabels>
          <CompanyNameText style={{width: '150px'}}>Company name</CompanyNameText>
          <CompanyNameText style={{width: '200px'}}>Job title</CompanyNameText>
          <CompanyNameText style={{width: '130px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Location <IoLocationSharp style={{marginLeft: '6px'}} /> </CompanyNameText>
          <CompanyNameText style={{width: '50px'}}>Link</CompanyNameText>
          <CompanyNameText style={{width: '100px'}}>Status</CompanyNameText>
          <CompanyNameText style={{width: '50px'}}>Email</CompanyNameText>
          <CompanyNameText style={{width: '160px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>Edit <AiFillEdit style={{marginLeft: '6px'}} /> </CompanyNameText>
          <CompanyNameText style={{width: '240px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>Date applied <BsCalendarDateFill style={{marginLeft: '6px'}} /> </CompanyNameText>
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
                <StyledIconButton style={{width: '50px', marginRight: '40px', marginTop: '2px', marginBottom: '2px',}}>
                  <Link href={job.link} target="_blank" >
                    <AiOutlineLink style={{color: primaryAccent}} />
                  </Link>
                </StyledIconButton>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index} style={{width: '100px'}}>
                <Select
                >
                  <MenuItem value="0">Applied</MenuItem>
                  <MenuItem value="1">Interviewing</MenuItem>
                  <MenuItem value="2">Rejected</MenuItem>
                </Select>
                {/* <CompanyNameText style={{width: '100px'}}>{job.status}</CompanyNameText> */}
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index}>
                <StyledIconButton style={{width: '50px', marginRight: '40px', marginTop: '2px', marginBottom: '2px', marginLeft: '50px'}}>
                  <Link href={job.email} target="_blank" >
                    <AiOutlineMail style={{color: primaryAccent}} />
                  </Link>
                </StyledIconButton>
              </JobItem>
            ))}
          </JobItemColumn>
          <JobItemColumn>
            { jobs && jobs?.data.map((job: any, index: any) => (
              <JobItem key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'left', marginLeft: '5px'}}>
                <RowDiv>
                  <SaveButton>Save Changes</SaveButton>
                  <h3 style={{display: 'none'}}>{job._id}</h3>
                  <StyledIconButton onClick={() => handleRemoveJob(job._id)} style={{width: '50px', marginRight: '40px'}}>
                    <AiFillDelete style={{color: '#DD2230'}} />
                  </StyledIconButton>
                </RowDiv>
                <TimeStampText style={{marginLeft: '10px', marginTop: '10px', marginBottom: '10px',}}>{job.timestamp}</TimeStampText>
              </JobItem>
            ))}
          </JobItemColumn>
        </JobItemRow>
      </JobCard>
    </MainPageContainer>
  )
}

export default MainPage