'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Box, Container, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

// import styles from '../create-account/create-account.module.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e'
    }
  }
})

const SignUpForm = () => {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: '0 350px' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <IconButton color="primary">
            <ArrowBackIcon
              fontSize="medium"
              onClick={() => router.push('/login')}
            />
          </IconButton>
          <Typography variant="h5" sx={{ mb: 4, ml: 1 }}>
            Create Account
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder='Enter your email'
            sx={{ mb: 2.5 }}
            size="small"
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            placeholder='Set your password'
            sx={{ marginBottom: '10px' }}
            size="small"
          />
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Your password must be a combination of numbers and English letters or symbols,
            including at least 8 characters
          </Typography>
          <Button variant="contained" sx={{ margin: "30px 100px 20px" }}>
            <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
              Create Account
            </Typography>
          </Button>
        </Box>
      </Container>
    </ThemeProvider>

  )
}

export default SignUpForm