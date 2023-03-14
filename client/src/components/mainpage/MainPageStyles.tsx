import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';

export const MainPageContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
}));

export const JobCard = styled(Card)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : 'rgb(34,34,34)',
  padding: '1rem',
  marginTop: '75px',
}));

export const NewJobCard = styled(Card)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : 'rgb(34,34,34)',
  padding: '1rem',
  marginTop: '75px',
}));