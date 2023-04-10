import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { fourthAccent, primaryAccent, primaryDark, primaryDarkLight, secondaryAccent, tertiaryAccent } from "../../utils";
import { RiLoginBoxFill, RiDashboardFill } from "react-icons/ri";
import { IoSettingsSharp, IoCreate } from "react-icons/io5";
import { HiDocument } from "react-icons/hi";
import { BsMoonStars, BsSun, BsFillPersonFill } from "react-icons/bs";
import { NavLink as Link } from 'react-router-dom';

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
  color: 'gainsboro',
  fontSize: '2rem',
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

export const NavLinkStyled = styled('nav')({
  textDecoration: 'none',
  backgroundColor: secondaryAccent,
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  cursor: 'pointer',
})

export const NavBtnLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
})

export const NavLinkCreate = styled('nav')({
  textDecoration: 'none',
  backgroundColor: fourthAccent,
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  cursor: 'pointer',
})

export const StyledUserIcon = styled(BsFillPersonFill)({
  fontSize: "2rem",
  color: 'white',
});

export const StyledCreateIcon = styled(IoCreate)({
  fontSize: "2rem",
  color: 'white',
});

export const StyledLoginIcon = styled(RiLoginBoxFill)({
  fontSize: "2rem",
  color: 'white',
});

export const StyledDocumentIcon = styled(HiDocument)({
  fontSize: "2rem",
  color: 'white',
});

export const StyledDashboardIcon = styled(RiDashboardFill)({
  fontSize: "2rem",
  color: 'white',
});