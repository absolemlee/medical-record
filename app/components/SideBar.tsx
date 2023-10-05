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

import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240

const SideBar = ({ items }: { items: any }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: `240px`, background: 'white' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" noWrap component="div" sx={{ color: 'black', fontWeight: '700' }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box component="form" sx={{ mr: 2 }}>
              <TextField
                size="small"
                placeholder="Search"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '35ch' }}
                InputProps={{
                  startAdornment:
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>,
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src="/broken-image.jpg"
                sx={{ width: 24, height: 24, mr: 1 }}
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    <MenuItem value={10}>Dashboard</MenuItem>
                    <MenuItem value={20}>My Account</MenuItem>
                    <MenuItem value={30}>Sign Out</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* <SearchField /> */}
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