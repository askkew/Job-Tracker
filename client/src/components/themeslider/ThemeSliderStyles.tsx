import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ThemeSlider = styled(Button)(({theme}) => ({
    background: theme.palette.mode === 'light' ? 'linear-gradient(to bottom right, #EF4765, #FF9A5A)' : 'linear-gradient(to bottom right, #8983f7, #a3dafb)',
    border: 0,
    borderRadius: 12,
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 2.5,
    outline: 'transparent',
    padding: '0 1rem',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'box-shadow .2s ease-in-out',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    '&:focus': {
      boxShadow: `0 0 .25rem rgba(0, 0, 0, 0.5), 
        -.125rem -.125rem 1rem ${
          theme.palette.mode === 'dark' ? 'rgba(137, 131, 247, 0.5)' : 'rgba(239, 71, 101, 0.5)'
        }, 
        .125rem .125rem 1rem ${
          theme.palette.mode === 'dark' ? 'rgba(163, 218, 251, 0.5)' : 'rgba(255, 154, 90, 0.5)'
        }`,
    },
    '&:hover': {
      boxShadow: `0 0 .25rem rgba(0, 0, 0, 0.5), 
        -.125rem -.125rem 1rem ${
          theme.palette.mode === 'dark' ? 'rgba(137, 131, 247, 0.5)' : 'rgba(239, 71, 101, 0.5)'
        }, 
        .125rem .125rem 1rem ${
          theme.palette.mode === 'dark' ? 'rgba(163, 218, 251, 0.5)' : 'rgba(255, 154, 90, 0.5)'
        }`,
    },
  }));