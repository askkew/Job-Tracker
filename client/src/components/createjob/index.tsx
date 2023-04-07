import React, { useState } from 'react'
import { GridContainer, NewJobCard, StyledFormControl } from '../mainpage/MainPageStyles'
import moment from 'moment';
import axios from 'axios';
import { CustomButton } from '../../utils/button';
import { toast } from 'react-toastify';
import { CustomInputField } from './CreateStyles';

const CreateNew = () => {
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
  return (
    <>
      <NewJobCard>
        <StyledFormControl>
          <GridContainer>
            <CustomInputField placeholder="Company name" value={companyName} onChange={handleCompanyName} />
            <CustomInputField placeholder="Job title" value={jobTitle} onChange={handleJobTitle} />
            <CustomInputField placeholder="Job location" value={jobLocation} onChange={handleJobLocation} />
            <CustomInputField placeholder="Link" value={link} onChange={handleLink} />
            <CustomInputField placeholder="Status" value={status} onChange={handleStatus} />
            <CustomInputField placeholder="Email" value={email} onChange={handleEmail} />
            <CustomButton style={{ width: '140px', marginLeft: '10px' }} onClick={handleAddJob}>Add Job</CustomButton>
          </GridContainer>
        </StyledFormControl>
      </NewJobCard>
    </>
  )
}

export default CreateNew