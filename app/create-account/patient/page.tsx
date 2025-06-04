import React from 'react'
import { Box, Container, Button, Typography }
  from '@mui/material'

import PatientSignUpForm from '../../components/patient/PatientSignUpForm'
import styles from '../create-account.module.css'

const CreateAccount = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContents: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 3,
        mt: 1
      }}
    >
      <PatientSignUpForm />
    </Container>
  )
}

export default CreateAccount