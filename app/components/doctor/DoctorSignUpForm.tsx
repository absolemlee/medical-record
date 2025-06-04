'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Container, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

import dayjs, { Dayjs } from 'dayjs';
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
];

type DoctorFormState = {
  firstName: string,
  lastName: string,
  dob: Dayjs | null,
  email: string,
  phoneNumber: string,
  gender: string,
  clinicName: string,
  clinicAddress: {
    street: string,
    city: string,
    state: string,
    zip: string
  },
  education: {
    college: string
  },
  professional: {
    licenseNumber: string,
    yearsPractice: string,
    clinics: string
  },
  password: string
}

const DoctorSignUpForm = () => {
  const router = useRouter()

  const [form, setForm] = useState<DoctorFormState>({
    firstName: '',
    lastName: '',
    dob: null,
    email: '',
    phoneNumber: '',
    gender: '',
    clinicName: '',
    clinicAddress: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    education: {
      college: ''
    },
    professional: {
      licenseNumber: '',
      yearsPractice: '',
      clinics: ''
    },
    password: ''
  })

  const [open, setOpen] = useState(false)
  const [error, setError] = useState<string>('')

  // Handle top-level text fields
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle nested fields
  const handleNestedInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: string,
    field: string
  ) => {
    const { value } = e.target
    setForm(prev => ({
      ...prev,
      [section]: {
      ...prev[section],
      [field]: value
      }
    }))
  }

  // Handle professional fields
  const handleProfessionalInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const { value } = e.target
    setForm(prev => ({
      ...prev,
      professional: {
        ...prev.professional,
        [field]: value
      }
    }))
  }

  // Handle gender select
  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setForm(prev => ({
      ...prev,
      gender: event.target.value
    }))
  }

  // Handle date picker
  const handleDateChange = (date: Dayjs | null) => {
    setForm(prev => ({
      ...prev,
      dob: date
    }))
  }

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Example validation
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError('Please fill all required fields.')
      return
    }
    setError('')
    // Send data to the server
    try {
      const res = await fetch("/api/doctor-signup", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          dob: form.dob ? form.dob.toISOString() : null
        })
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.msg || 'Sign up failed.')
      } else {
        router.push('/login')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <Container style={{ padding: '0 350px' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <IconButton color="primary" onClick={() => router.push('/login')}>
          <ArrowBackIcon fontSize="medium" />
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
        onSubmit={handleSubmit}
      >
        <Box sx={{ display: 'flex', columnGap: '15px' }}>
          <TextField
            required
            label="First name"
            sx={{ mb: 2.5 }}
            size="small"
            value={form.firstName}
            name="firstName"
            onChange={handleInput}
          />
          <TextField
            required
            label="Last name"
            sx={{ mb: 2.5 }}
            size="small"
            value={form.lastName}
            name="lastName"
            onChange={handleInput}
          />
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={form.dob}
              onChange={handleDateChange}
              label="Date of birth"
              slotProps={{ textField: { fullWidth: true, size: 'small', required: true } }}
              sx={{ mb: 2.5 }}
            />
          </LocalizationProvider>
        </Box>
        <TextField
          required
          label="Email"
          sx={{ mb: 2.5 }}
          size="small"
          value={form.email}
          name="email"
          onChange={handleInput}
        />
        <TextField
          required
          label="Phone number"
          sx={{ mb: 2.5 }}
          size="small"
          value={form.phoneNumber}
          name="phoneNumber"
          onChange={handleInput}
        />
        <Box>
          <FormControl fullWidth size="small" sx={{ mb: 2.5 }}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={form.gender}
              onChange={handleGenderChange}
              input={<OutlinedInput label="Gender" />}
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <TextField
          required
          label="Current clinic name"
          sx={{ mb: 2.5 }}
          size="small"
          value={form.clinicName}
          name="clinicName"
          onChange={handleInput}
        />
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Current Clinic Address</Typography>
          <TextField
            required
            label="Street Address"
            sx={{ mb: 2.5 }}
            size="small"
            fullWidth
            value={form.clinicAddress.street}
            onChange={e => handleNestedInput(e, 'clinicAddress', 'street')}
            name="street"
          />
          <Box sx={{ display: 'flex', columnGap: '15px' }}>
            <TextField
              required
              label="City"
              sx={{ mb: 2.5 }}
              size="small"
              value={form.clinicAddress.city}
              onChange={e => handleNestedInput(e, 'clinicAddress', 'city')}
              name="city"
            />
            <TextField
              required
              label="State"
              sx={{ mb: 2.5 }}
              size="small"
              value={form.clinicAddress.state}
              onChange={e => handleNestedInput(e, 'clinicAddress', 'state')}
              name="state"
            />
          </Box>
          <TextField
            required
            label="Postal/Zip code"
            sx={{ mb: 2.5 }}
            size="small"
            fullWidth
            value={form.clinicAddress.zip}
            onChange={e => handleNestedInput(e, 'clinicAddress', 'zip')}
            name="zip"
          />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Education</Typography>
          <Box>
            <TextField
              required
              label="College"
              sx={{ mb: 2.5 }}
              size="small"
              fullWidth
              value={form.education.college}
              onChange={e => handleNestedInput(e, 'education', 'college')}
              name="college"
            />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Professional profile</Typography>
          <Box>
            <Box sx={{ display: 'flex', columnGap: '15px' }}>
              <TextField
                required
                label="License Number"
                sx={{ mb: 2.5 }}
                size="small"
                value={form.professional.licenseNumber}
                onChange={e => handleProfessionalInput(e, 'licenseNumber')}
                name="licenseNumber"
              />
              <TextField
                required
                label="Years of clinical experience"
                sx={{ mb: 2.5 }}
                size="small"
                value={form.professional.yearsPractice}
                onChange={e => handleProfessionalInput(e, 'yearsPractice')}
                name="yearsPractice"
              />
            </Box>
            <TextField
              required
              label="Which clinics have you worked before? Please list them all"
              sx={{ mb: 2.5 }}
              size="small"
              fullWidth
              value={form.professional.clinics}
              onChange={e => handleProfessionalInput(e, 'clinics')}
              name="clinics"
            />
          </Box>
        </Box>
        <TextField
          required
          label="Password"
          type="password"
          sx={{ marginBottom: '10px' }}
          size="small"
          value={form.password}
          name="password"
          onChange={handleInput}
        />
        <Typography variant="body2" sx={{ color: 'gray' }}>
          Your password must be a combination of numbers and English letters or symbols,
          including at least 8 characters
        </Typography>
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" sx={{ margin: "30px 100px 20px" }}>
          <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
            Create
          </Typography>
        </Button>
      </Box>
    </Container>
  )
}

export default DoctorSignUpForm


