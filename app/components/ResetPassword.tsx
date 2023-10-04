'use client'
import React from 'react'
import { Container, Box, Typography, Button, IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import styles from '../reset-password/reset-password.module.css'

import TextField from '@mui/material/TextField'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ResetPassword = () => {
  // Optional: toggle visibility in password field
  const router = useRouter()

  return (
    <Container style={{ padding: '0 350px' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <ArrowBackIcon 
          className={styles.backButton}
          fontSize="large" 
          onClick={() => router.push('/login')} 
        />
        <Typography variant="h5" sx={{ mb: 4, ml: 1 }}>
          Reset Password
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
          <Typography variant="body2">
            Continue
          </Typography>
        </Button>
      </Box>
    </Container>
  )
}

export default ResetPassword