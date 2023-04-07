import { AppTitle, IconButtonStyle, IconGroup, NavBarContainer, NavBtnLink, NavLinkCreate, NavLinkStyled, StyledCreateIcon, StyledDashboardIcon, StyledDocumentIcon, StyledInput, StyledLoginIcon, StyledMoonIcon, StyledSettingIcon, StyledSunIcon, StyledUserIcon, ThemeButton } from "./NavBarStyles"
import "./index.css";
import { FC } from "react";
import { CustomButton } from "../../utils/button";
import { FiGithub } from "react-icons/fi";
import { Button } from "@mui/material";
import { NavLink as Link } from 'react-router-dom';

export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}

const NavBar: FC<NavBarTypes> = ({ handleToggleTheme }) => (
  <NavBarContainer>
    {/* <div className="checkbox-wrapper-54">
      <label className="switch">
        <input type="checkbox" onChange={handleToggleTheme}/>
        <span className="slider"></span>
      </label>
    </div> */}
    <AppTitle>Job Tracker</AppTitle>
    <NavLinkStyled>
      <NavBtnLink to='/profile'><StyledUserIcon />Profile</NavBtnLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <NavBtnLink to='/'><strong><StyledDashboardIcon />Application Dashboard</strong></NavBtnLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <NavBtnLink to='/resume'><strong><StyledDocumentIcon />Resume</strong></NavBtnLink>
    </NavLinkStyled>
    <span>---------------</span>
    <NavLinkCreate>
      <NavBtnLink to='/createnew'><strong><StyledCreateIcon />create new job</strong></NavBtnLink>
    </NavLinkCreate>
    <NavLinkStyled>
      <NavBtnLink to='/login'><strong><StyledLoginIcon />login</strong></NavBtnLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <NavBtnLink to='/register'><strong>register</strong></NavBtnLink>
    </NavLinkStyled>
  </NavBarContainer>
)

export default NavBar