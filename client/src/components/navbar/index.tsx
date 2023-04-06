import { AppTitle, IconButtonStyle, IconGroup, NavBarContainer, StyledInput, StyledMoonIcon, StyledSettingIcon, StyledSunIcon, StyledUserIcon, ThemeButton } from "./NavBarStyles"
import "./index.css";
import { FC } from "react";
import { CustomButton } from "../../utils/button";
import { FiGithub } from "react-icons/fi";
import { Button, Link } from "@mui/material";

export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}

const NavBar: FC<NavBarTypes> = ({ handleToggleTheme }) => {
  return (
    <NavBarContainer>
      <IconGroup>
        {/* <div className="checkbox-wrapper-54">
          <label className="switch">
            <input type="checkbox" onChange={handleToggleTheme}/>
            <span className="slider"></span>
          </label>
        </div> */}
        <AppTitle>Job Tracker</AppTitle>
        <IconButtonStyle>
          <StyledUserIcon />
        </IconButtonStyle>
      </IconGroup>
    </NavBarContainer>
  )
}

export default NavBar