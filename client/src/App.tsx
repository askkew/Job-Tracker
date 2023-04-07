import React from 'react';
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Navbar from './components/navbar';
import MainPage from './components/mainpage';
import { ToastContainer } from 'react-toastify';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import CreateNew from './components/createjob';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "rgb(26,26,26)",
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

const ContainerApp = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const handleToggleTheme = () => {
    if (theme?.palette?.mode === 'dark') setTheme(lightTheme);
    else setTheme(darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContainerApp>
        <Router>
          <Navbar theme={theme} handleToggleTheme={handleToggleTheme} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<MainPage />} />
            <Route path="/resume" element={<MainPage />} />
            <Route path="/createnew" element={<CreateNew />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ContainerApp>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
