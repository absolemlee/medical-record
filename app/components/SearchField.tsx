import React from 'react'
import { Box } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const SearchField = () => {
  return (
    <Box>
      <Box component="form">
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Avatar src="/broken-image.jpg" />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Username</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Dashboard</MenuItem>
              <MenuItem value={20}>My Account</MenuItem>
              <MenuItem value={30}>Sign Out</MenuItem>
            </Select>
          </FormControl>
        </Box>

      </Box>
    </Box>
  )
}

export default SearchField