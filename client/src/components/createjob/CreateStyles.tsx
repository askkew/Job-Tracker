import styled from "@emotion/styled";
import { primaryDark } from "../../utils";
import { InputBase } from "@mui/material";

export const CustomInputField = styled(InputBase)({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  borderRadius: '25px',
  backgroundColor: primaryDark,
  padding: '0.4rem',
  paddingLeft: '1rem',
  margin: '0.2rem',
})