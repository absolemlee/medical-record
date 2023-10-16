import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  // Box,
  Menu,
  Typography,
  IconButton,
  MenuItem,
  Button,
  // Paper,
}
  from '@mui/material'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Chart from '../components/doctor/Chart';
import Calendar from '../components/doctor/Calendar';
import AppointmentTable from '../components/doctor/AppointmentTable';
import LabTable from '../components/doctor/LabTable';
import BillingTable from '../components/doctor/BillingTable';


const DoctorDashboard = () => {

  return (
    <Container sx={{ display: 'flex', bgcolor: '#F8FAFC', padding: '20px 0 50px 0', justifyContent: 'space-around' }}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Appointments
                </Typography>
                <Button>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                    Browse all
                  </Typography>
                </Button>
              </Box>
              <AppointmentTable />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{display: 'flex'}}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Labs
                </Typography>
                <Button>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                    Browse all
                  </Typography>
                </Button>
              </Box>
              <LabTable />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 15px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Billings
                </Typography>
                <Button>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                    Browse all
                  </Typography>
                </Button>
              </Box>
              <BillingTable />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ flexGrow: 0, gap: '20px' }}>
        <Paper elevation={3} sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Appointments
            </Typography>
            <Button>
              <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                Browse all
              </Typography>
            </Button>
          </Box>
          <AppointmentTable />
        </Paper>

        <Paper elevation={3} sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Labs
            </Typography>
            <Button>
              <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                Browse all
              </Typography>
            </Button>
          </Box>
          <LabTable />
        </Paper>
      </Box>

      <Box sx={{ flexGrow: 0, gap: '20px', display: 'flex', flexDirection: 'column' }}>
        <Paper elevation={3}>
          <Chart />
        </Paper>
        <Paper elevation={3}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Billings
            </Typography>
            <Button>
              <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                Browse all
              </Typography>
            </Button>
          </Box>
          <BillingTable />
        </Paper>
      </Box> */}
    </Container>
  )
}

export default DoctorDashboard