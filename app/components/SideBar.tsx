import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Menu,
  Typography,
  IconButton,
  // MenuItem,
  Button,
  // TextField,
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
import Avatar from '@mui/material/Avatar'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

import SearchIcon from '@mui/icons-material/Search'

const drawerWidth = 240

const SideBar = ({ items }: { items: any }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: 'calc(100% - 240px)', ml: '240px', background: 'white' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" noWrap component="div" sx={{ color: 'black', fontWeight: '700' }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <SearchField />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControl>
                <Avatar
                  src="/broken-image.jpg"
                  sx={{ width: 24, height: 24, mr: 1 }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ IconComponent: "" }}
                  >
                    <MenuItem value={10}>Dashboard</MenuItem>
                    <MenuItem value={20}>My Account</MenuItem>
                    <MenuItem value={30}>Sign Out</MenuItem>
                  </Select>
                </Avatar>
              </FormControl>

            </Box>
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