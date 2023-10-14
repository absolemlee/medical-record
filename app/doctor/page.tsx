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
  Button,
  Paper
}
  from '@mui/material'

import Chart from '../components/doctor/Chart';
import Calendar from '../components/doctor/Calendar';

const DoctorDashboard = () => {

  return (
    <Container sx={{ display: 'flex', bgcolor: '#F8FAFC', height: '100vh' }}>
      <Container
        // component="main"
        sx={{ display: 'flex', columnGap: '30px', mt: 2 }}
      >
        <Box sx={{ flexGrow: 2 }}>
          <Paper>
            <Typography variant="h6">
              Appointment list
            </Typography>
          </Paper>

          {/* <Paper>
            <Typography>Appointment list</Typography>
          </Paper>
          <Paper>
            <Typography>Labs list</Typography>
          </Paper>
          <Paper>
            <Typography>Billings list</Typography>
          </Paper> */}
        </Box>

        <Box sx={{ flexGrow: 1, gap: '20px', display: 'flex', flexDirection: 'column' }}>
          <Paper elevation={3} sx={{display: 'flex', padding: "-100px"}}>
            {/* <Typography>Patients dummy line chart</Typography> */}
            <Chart />
          </Paper>
          <Paper elevation={3}>
            <Calendar />
          </Paper>
        </Box>
      </Container>
    </Container>
  )
}

export default DoctorDashboard