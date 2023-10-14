
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
import Settings from '@mui/icons-material/Settings';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import SideBar from '../components/SideBar'


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

const belowItems = [
  {
    name: 'Settings',
    icon: <Settings />,
    url: '/doctor/settings'
  },
  {
    name: 'Logout',
    icon: <LogoutRoundedIcon />,
    url: '/doctor/logout'
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar items={items} belowItems={belowItems}/>
      {children}
    </Box>
  )
}