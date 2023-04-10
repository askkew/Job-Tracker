import React from 'react'
import { RegisterCard, RegisterContainer, RegisterQuestion } from './RegisterStyles'
import { TextField } from '@mui/material'
import { LoginRegisterButton } from '../login/LoginStyles'

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterCard>
        <h1>Register</h1>
        <TextField name="email" label="Email" style={{margin: 5}}/>
        <TextField name="password" label="Password" style={{margin: 5}}/>
        <TextField name="confirmpassword" label="Confirm Password" style={{margin: 5}}/>
        <LoginRegisterButton onClick={() => console.log('Register')}>Register</LoginRegisterButton>
        <RegisterQuestion>Already have an account?</RegisterQuestion>
      </RegisterCard>
    </RegisterContainer>
  )
}

export default Register