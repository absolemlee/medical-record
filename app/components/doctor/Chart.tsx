"use client"
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const Chart = () => {
  // dummy data
  const uData = Array.from(
    { length: 12 },
    () => Math.floor(Math.random() * (800 - 0 + 1)) + 0
  )

  const months = Array.from({ length: 12 }, (item, i) => {
    return (new Date(0, i).toLocaleString('en-US', { month: 'long' })).slice(0, 3)
  });

  return (
    <LineChart
      width={450}
      height={373}
      series={[
        { data: uData, label: 'Patients' },
      ]}
      xAxis={[{ scaleType: 'point', data: months }]}
      sx={{
        '.MuiLineElement-root': {
          stroke: '#8884d8',
          strokeWidth: 2,
        },
        '.MuiMarkElement-root': {
          stroke: '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
    />
  )
}

export default Chart