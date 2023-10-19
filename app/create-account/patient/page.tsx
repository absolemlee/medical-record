import React from 'react'
import { Box, Container, Button, Typography }
  from '@mui/material'

// import PatientSignUpForm from '../components/patient/PatientSignUpForm'
// import DoctorSignUpForm from '../components/doctor/DoctorSignUpForm'
import styles from '../create-account/create-account.module.css'

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
      this is patient create account
      {/* <PatientSignUpForm /> */}
    </Container>
  )
}

export default CreateAccount