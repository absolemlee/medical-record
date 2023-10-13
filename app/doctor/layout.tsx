
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
}
  from '@mui/material'

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded'

import SideBar from '../components/SideBar'

// import { createTheme, ThemeProvider } from '@mui/material/styles';

const items = [
  {
    name: 'Dashboard',
    icon: <DashboardRoundedIcon />,
    url: '/doctor'
  },
  {
    name: 'Patients',
    icon: <PeopleAltRoundedIcon />,
    url: '/doctor/patients'
  },
  {
    name: 'Create Record',
    icon: <NoteAddRoundedIcon />,
    url: '/doctor/create-profile'
  },
  {
    name: 'Scheduling',
    icon: <CalendarMonthRoundedIcon />,
    url: '/doctor/scheduling'
  },
  {
    name: 'Reports',
    icon: <AnalyticsRoundedIcon />,
    url: '/doctor/reports'
  }
]

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//       light: '#6573c3',
//       dark: '#2c387e'
//     }
//   }
// })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <SideBar items={items} />
        {children}
      </Box>
    // </ThemeProvider>

  )
}