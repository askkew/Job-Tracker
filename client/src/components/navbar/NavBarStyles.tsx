import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { primaryDark, primaryDarkLight } from "../../utils";

export const NavBarContainer = styled('div')(({theme}) => ({
  display: 'grid',
  gridTemplateColumns: '200px 200px',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : primaryDarkLight,
  padding: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  // position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
}));
