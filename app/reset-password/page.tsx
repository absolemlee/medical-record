import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import ResetPassword from '../components/ResetPassword'

const Reset = () => {
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
      <ResetPassword />
    </Container>
  )
}

export default Reset