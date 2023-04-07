import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { primaryAccent, primaryDark, primaryDarkLight } from "../../utils";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const NavBarContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  gap: '10px',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : primaryDarkLight,
  padding: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  height: '100vh',
}));

export const AppTitle = styled('h1')(({theme}) => ({
  color: theme.palette.mode === 'light' ? 'black' : primaryAccent,
  fontSize: '2rem',
}));

export const StyledUserIcon = styled(FaUserCircle)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.mode === 'light' ? 'black' : primaryAccent,
}));

export const StyledSettingIcon = styled(IoSettingsSharp)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.mode === 'light' ? 'black' : primaryAccent,
}));

export const IconButtonStyle = styled('button')({
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.2s ease-out',
  },
})

export const IconGroup = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '50px',
  gap: '50px',
}));

//--------------Theme--------------

export const StyledMoonIcon = styled(BsMoonStars)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.mode === 'dark' ? primaryAccent : 'transparent',
  cursor: "pointer",
  position: 'absolute',
}));

export const StyledSunIcon = styled(BsSun)(({ theme }) => ({
  fontSize: "2.5rem",
  color: theme.palette.mode === 'light' ? 'black' : 'transparent',
  cursor: "pointer",
  position: 'absolute',
}));

export const StyledInput = styled('input')(({ theme }) => ({
  // display: 'none',
}));

export const ThemeButton = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '50px',
}));

//----------------------------

