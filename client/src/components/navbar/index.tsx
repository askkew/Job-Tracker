import { NavBarContainer } from "./NavBarStyles"
import "./index.css";
import { FC } from "react";
import { CustomButton } from "../../utils/button";
import { FiGithub } from "react-icons/fi";

export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}

const NavBar: FC<NavBarTypes> = ({ handleToggleTheme }) => {
  return (
    <NavBarContainer>
      <div className="checkbox-wrapper-54">
        <label className="switch">
          <input type="checkbox" onChange={handleToggleTheme}/>
          <span className="slider"></span>
        </label>
      </div>
      {/* <h1>Job Tracker</h1> */}
      <CustomButton style={{width: '180px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>Github Repo <FiGithub style={{marginLeft: '6px'}}/></CustomButton>
    </NavBarContainer>
  )
}

export default NavBar