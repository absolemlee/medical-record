import React from 'react'
import { Box } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

const SearchField = () => {
  return (
    <Box>
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
      {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            inputProps={{ IconComponent: () => null }}
          >
            <MenuItem value={10}>Dashboard</MenuItem>
            <MenuItem value={20}>My Account</MenuItem>
            <MenuItem value={30}>Sign Out</MenuItem>
          </Select>
        </Avatar>
      </Box> */}
    </Box>
  )
}

export default SearchField