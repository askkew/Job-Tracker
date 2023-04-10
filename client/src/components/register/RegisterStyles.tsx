import styled from "@mui/material/styles/styled";
import { fifthAccent, fourthAccent, primaryAccent, primaryDarkLight } from "../../utils";
import { Button } from "@mui/material";

export const RegisterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const RegisterCard = styled('div')({
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

export const RegisterQuestion = styled(Button)({
  color: primaryAccent,
  //hover
  '&:hover': {
    color: primaryAccent,
    backgroundColor: 'transparent',
  },
})