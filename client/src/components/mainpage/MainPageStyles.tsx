import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import { FormControl } from "@mui/material";
import { primaryDarkLight } from "../../utils";

export const MainPageContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
}));

export const JobCard = styled(Card)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : primaryDarkLight,
  // padding: '1rem',
  marginTop: '15px',
  borderRadius: '14px',
}));

export const JobItem = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const JobItemLabels = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px',
  padding: '0rem 1rem 0rem 1rem',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}));

export const NewJobCard = styled(Card)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : primaryDarkLight,
  padding: '1rem',
  marginTop: '25px',
  borderRadius: '14px',
}));

export const GridContainer = styled('div')(({theme}) => ({
  display: 'grid',
  gridTemplateColumns: '200px 200px',
  // flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledFormControl = styled(FormControl)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));