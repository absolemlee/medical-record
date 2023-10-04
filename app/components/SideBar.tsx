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
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240

//  const items = [
//   {
//     name: 'Dashboard',
//     icon: <DashboardRoundedIcon />,
//     url: '/doctor'
//   },
//   {
//     name: 'Patients',
//     icon: <PeopleAltRoundedIcon />,
//     url: '/doctor/patients'
//   },
//   {
//     name: 'Create Patient Profile',
//     icon: <NoteAddRoundedIcon />,
//     url: '/doctor/create-profile'
//   },
//   {
//     name: 'Scheduling',
//     icon: <CalendarMonthRoundedIcon />,
//     url: '/doctor/scheduling'
//   },
//   {
//     name: 'Reports',
//     icon: <AnalyticsRoundedIcon />,
//     url: '/doctor/reports'
//   }

// ]

const SideBar = ({items}:{items:any}) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: `240px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {items.map((item: any) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default SideBar