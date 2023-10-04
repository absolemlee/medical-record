import React from 'react'
import { Box, Container, Button, Typography }
  from '@mui/material'

import SignUpForm from '../components/SignUpForm'

const CreateAccount = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContents: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 5,
        mt: 5
      }}
    >
      <SignUpForm />
    </Container>
  )
}

export default CreateAccount