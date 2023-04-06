import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import { FormControl, IconButton, InputBase, Select, Typography } from "@mui/material";
import { primaryAccent, primaryDark, primaryDarkLight } from "../../utils";
import { CustomButton } from "../../utils/button";

export const MainPageContainer = styled('div')(({theme}) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
}));

export const JobCard = styled(Card)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : primaryDarkLight,
  marginTop: '15px',
  borderRadius: '14px',
}));

export const JobItem = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'left',
}));

export const JobItemLabels = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'left',
  margin: '0px',
  padding: '1.6rem',
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
  display: 'flex',
  flexDirection: 'row',
  // gridTemplateColumns: '200px 200px',
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

export const JobItemColumn = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'left',
}));

export const JobItemRow = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'left',
  padding: '1.6rem',
}));

export const CompanyNameText = styled(Typography)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'left',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginRight: '40px',
  marginTop: '10px',
  marginBottom: '10px',
  // border: '1px solid black',
}));

export const TimeStampText = styled(Typography)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'left',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginRight: '40px',
}));

export const StyledIconButton = styled(IconButton)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const RowDiv = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  // marginTop: '11px',
  // marginBottom: '11px',
}));

export const CustomInputField = styled(InputBase)(({theme}) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  borderRadius: '25px',
  backgroundColor: theme.palette.mode === 'light' ? 'rgb(245,245,245)' : primaryDark,
  padding: '0.4rem',
  paddingLeft: '1rem',
  margin: '0.2rem',
}));

export const SaveButton = styled(CustomButton)(({theme}) => ({
  backgroundColor: primaryAccent,
  fontSize: '14px',
  fontWeight: '600',
  margin: '0.1rem',
}));

export const AlertContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  // padding: '1rem',
  borderRadius: '14px',
  backgroundColor: primaryAccent,
  fontWeight: 'bold',
  position: 'absolute',
  top: '0',
  right: '0',
  width: '120px',
}));

export const StyledSelect = styled('select')(({theme}) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  borderRadius: '25px',
  backgroundColor: theme.palette.mode === 'light' ? 'rgb(245,245,245)' : primaryDark,
  padding: '0.4rem',
  paddingLeft: '1rem',
  height: '45px',
  marginBottom: '4px',
  border: 'none',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0.1rem',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
}));

export const StyledOption = styled('option')(({theme}) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  borderRadius: '25px',
  backgroundColor: theme.palette.mode === 'light' ? 'rgb(245,245,245)' : primaryDark,
  padding: '0.4rem',
  paddingLeft: '1rem',
  height: '45px',
  marginBottom: '4px',
  border: 'none',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0.1rem',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
}));