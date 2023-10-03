'use-client'
import React from 'react'
import styles from "../login/login.module.css"
import { Box, Container, Button, Typography}
  from '@mui/material'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import Link from 'next/link'

const LoginForm = () => {
  return (
    <Container style={{ padding: '0 350px' }}>
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
          placeholder='Your email'
          sx={{ mb: 2.5 }}
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder='Your password'
          sx={{ marginBottom: '10px' }}
          size="small"
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
        </FormGroup>
        <Button variant="contained" sx={{ margin: "30px 100px 20px" }}>
          <Typography variant="body2">
            Sign in
          </Typography>
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2">
          <Link href="/" className={styles.loginLink}>
            Forgot Password?
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray'}}>
          Need an email account?
          <Link href="/" className={styles.loginLink} style={{marginLeft: '5px'}}>
            Create account
          </Link>
        </Typography>
      </Box>
    </Container>

  )
}

export default LoginForm