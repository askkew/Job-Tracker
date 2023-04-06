import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Navbar from './components/navbar';
import MainPage from './components/mainpage';
import { ToastContainer } from 'react-toastify';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "rgb(10,25,47)"
    },
    primary: {
      main: 'rgb(189,46,46)',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "rgb(245,245,245)"
    },
    primary: {
      main: 'rgb(189,46,46)',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const handleToggleTheme = () => {
    if (theme?.palette?.mode === 'dark') setTheme(lightTheme);
    else setTheme(darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar theme={theme} handleToggleTheme={handleToggleTheme} />
      <MainPage />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
