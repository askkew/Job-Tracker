import { NavBarContainer } from "./NavBarStyles"
import { ThemeSlider } from "../themeslider/ThemeSliderStyles"
import "./index.css";
import { FC } from "react";

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
      <h1>Job Tracker</h1>
      <button>github repo</button>
    </NavBarContainer>
  )
}

export default NavBar