import styled from "@mui/material/styles/styled";
import { fifthAccent, fourthAccent, primaryDarkLight } from "../../utils";

export const LoginContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: primaryDarkLight,
  width: '400px',
  height: '400px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  marginLeft: 200,
});

export const LoginRegisterButton = styled('button')({
  width: '100px',
  height: '50px',
  backgroundColor: fourthAccent,
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  margin: 10,
  '&:hover': {
    transform: 'translateY(-1px)',
    transition: 'all 0.2s ease-out',
  },
});