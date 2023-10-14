"use client"
import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DateCalendar />
    </LocalizationProvider>
  )
}

export default Calendar