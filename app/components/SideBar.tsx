import React from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
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
import SearchField from './SearchField';

import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';

const drawerWidth = 240

const SideBar = ({ items, belowItems }: { items: any, belowItems: any }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: 'calc(100% - 240px)', ml: '240px', background: 'white' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="primary" variant="h5" noWrap component="div" sx={{ color: 'black', fontWeight: '700' }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <SearchField />
          </Box>
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
        <Toolbar>
          <Typography variant="h5">
            Medical Record
          </Typography>
        </Toolbar>
        <Divider />
        <List color="primary">
          {items.map((item: any) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ marginRight: '-15px' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 15 }} />
        <List color="primary">
          {belowItems.map((item: any) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ marginRight: '-15px' }}>
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