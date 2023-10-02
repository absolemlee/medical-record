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
  Button
}
  from '@mui/material'
import Link from 'next/link'

const style = {
  tab: {
    textDecoration: 'none', 
    color: 'white',
    margin: '0 30px'
  },
}

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                Medical Record
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', ml: 10 }}>
                <Link href="/" style={style.tab}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    Home
                  </Button>
                </Link>
                <Link href="/about" style={style.tab}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    About
                  </Button>
                </Link>
                <Link href="/contact" style={style.tab}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    Contact
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box>
              <Button variant="text" sx={{ color: 'white', mr: 4 }}>
                Login
              </Button>
              <Button variant="contained" style={{ backgroundColor: 'white', color: '#1976d2' }}>
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  )
}

export default NavBar