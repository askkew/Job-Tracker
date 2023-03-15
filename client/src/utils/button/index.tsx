import styled from "@emotion/styled";
import { primaryAccent } from "..";

export const CustomButton = styled.button(({theme}) => ({
  backgroundColor: primaryAccent,
  borderRadius: '4px',
  borderStyle: 'none',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: '"Farfetch Basis","Helvetica Neue",Arial,sans-serif',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1.5',
  margin: '0',
  maxWidth: 'none',
  minHeight: '44px',
  minWidth: '10px',
  outline: 'none',
  overflow: 'hidden',
  padding: '9px 20px 8px',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out 0s',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  width: '100%',
  '&:hover': {
    opacity: '.75',
  },
  '&:focus': {
    opacity: '.75',
  },
}));