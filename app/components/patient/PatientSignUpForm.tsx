'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Box, Container, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const genders = [
  'Female',
  'Male',
  'Nonbinary',
  'Other',
]

const PatientSignUpForm = () => {
  const [gender, setGender] = useState<string>('')
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof gender>) => {
    setGender(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const router = useRouter()

  return (
    <Container style={{ padding: '0 350px' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <IconButton color="primary">
          <ArrowBackIcon
            fontSize="medium"
            onClick={() => router.push('/login')}
          />
        </IconButton>
        <Typography variant="h5" sx={{ mb: 4, ml: 1 }}>
          Create Account
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          sx={{ mb: 2.5 }}
          size="small"
        />
        <Box sx={{display: 'flex', columnGap: '15px'}}>
          <TextField
            required
            id="outlined-required"
            label="First name"
            sx={{ mb: 2.5 }}
            size="small"
          />
          <TextField
            required
            id="outlined-required"
            label="Last name"
            sx={{ mb: 2.5 }}
            size="small"
          />
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // value={value}
              // onChange={(newValue) => setValue(newValue)}
              defaultValue={dayjs(new Date())}
              label="Date of birth"
              slotProps={{ textField: { fullWidth: true, size: 'small', required: true } }}
              sx={{ mb: 2.5 }}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <FormControl fullWidth size="small" sx={{ mb: 2.5 }}>
            <InputLabel id="demo-multiple-name-label">Gender</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              // multiple
              value={gender}
              onChange={handleChange}
              input={<OutlinedInput label="Gender" />}
            >
              {genders.map((gender) => (
                <MenuItem
                  key={gender}
                  value={gender}
                >
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          placeholder='Set your password'
          sx={{ marginBottom: '10px' }}
          size="small"
        />
        <Typography variant="body2" sx={{ color: 'gray' }}>
          Your password must be a combination of numbers and English letters or symbols,
          including at least 8 characters
        </Typography>
        <Button variant="contained" sx={{ margin: "30px 100px 20px" }}>
          <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
            Create
          </Typography>
        </Button>
      </Box>
    </Container>
  )
}

export default PatientSignUpForm