import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const NavBarContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  background: theme.palette.mode === 'light' ? 'white' : 'rgb(34,34,34)',
  padding: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  // position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
}));
