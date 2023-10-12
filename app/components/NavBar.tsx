'use client'
import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Menu,
  Typography,
  IconButton,
  MenuItem,
  Button,
}
  from '@mui/material'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
  tab: {
    textDecoration: 'none',
    margin: '0 30px',
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e'
    }
  }
})

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: 'white' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Link href="/" style={style.tab}>
                  <Typography variant="h5" component="div" sx={{ flexGrow: 0, color: '#2c387e' }}>
                    Medical Record
                  </Typography>
                </Link>
                <Box sx={{ flexGrow: 1, display: 'flex', ml: 10 }}>
                  <Link href="/" style={style.tab} >
                    <Button sx={{ fontSize: '15px', textTransform: 'capitalize' }}>
                      Home
                    </Button>
                  </Link>
                  <Link href="/about" style={style.tab}>
                    <Button sx={{ fontSize: '15px', textTransform: 'capitalize' }}>
                      About
                    </Button>
                  </Link>
                  <Link href="/contact" style={style.tab}>
                    <Button sx={{ fontSize: '15px', textTransform: 'capitalize' }}>
                      Contact
                    </Button>
                  </Link>
                </Box>
              </Box>

              <Box>
                <Link href="/login">
                  <Button sx={{ fontSize: '15px', textTransform: 'capitalize', mr: 4 }}>
                    Login
                  </Button>
                </Link>
                <Link href="/create-account">
                  <Button sx={{ fontSize: '15px', textTransform: 'capitalize' }}>
                    Sign Up
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>

  )
}

export default NavBar