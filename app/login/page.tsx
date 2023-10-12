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

import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContents: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 5
      }}>
      <Box sx={{ m: '30px 50px 30px' }}>
        <Typography variant="h3" sx={{color: '#2c387e'}}>
          Sign In
        </Typography>
      </Box>
      <LoginForm />
    </Container>
  )
}

export default Login