'use client'
import React from 'react'
import { useState } from 'react'
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
import Link from 'next/link'

const SignupToggle = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleMenu}
        sx={{ fontSize: '15px', textTransform: 'capitalize' }}>
        Sign Up
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          href='/create-account/patient'
        >
          Patient
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href='/create-account/doctor'
        >
          Doctor
        </MenuItem>
      </Menu>
    </>
  )
}

export default SignupToggle