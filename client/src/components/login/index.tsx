import React from 'react'
import { LoginCard, LoginContainer, LoginRegisterButton } from './LoginStyles'
import { Button, TextField } from '@mui/material'
import { RegisterQuestion } from '../register/RegisterStyles'

const Login = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <h1>Login</h1>
        <TextField name="email" label="Email" style={{margin: 5}}/>
        <TextField name="password" label="Password" style={{margin: 5}}/>
        <LoginRegisterButton onClick={() => console.log('login')}>Login</LoginRegisterButton>
        <RegisterQuestion>Don't have an account?</RegisterQuestion>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login