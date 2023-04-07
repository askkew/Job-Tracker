import { AppTitle, IconButtonStyle, IconGroup, NavBarContainer, StyledInput, StyledMoonIcon, StyledSettingIcon, StyledSunIcon, StyledUserIcon, ThemeButton } from "./NavBarStyles"
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
    <nav>
      <Link to='/profile'><StyledUserIcon /></Link>
    </nav>
    <nav>
      <Link to='/'><strong>Application Dashboard</strong></Link>
    </nav>
    <nav>
      <Link to='/resume'><strong>Resume</strong></Link>
    </nav>
    <span>---------------</span>
    <nav>
      <Link to='/createnew'><strong>create new job</strong></Link>
    </nav>
    <nav>
      <Link to='/login'><strong>login</strong></Link>
    </nav>
    <nav>
      <Link to='/register'><strong>register</strong></Link>
    </nav>
  </NavBarContainer>
)

export default NavBar