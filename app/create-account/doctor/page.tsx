import React from 'react'
import { Box, Container, Button, Typography }
  from '@mui/material'

import DoctorSignUpForm from '../../components/doctor/DoctorSignUpForm'
import styles from '../create-account/create-account.module.css'

const CreateAccount = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContents: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 2
      }}
    >
      <DoctorSignUpForm />
    </Container>
  )
}

export default CreateAccount