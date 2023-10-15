"use client"
import React from 'react'
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
  Paper,
}
  from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Chart from '../components/doctor/Chart';
import Calendar from '../components/doctor/Calendar';

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DoctorDashboard = () => {

  return (
    <Container sx={{ display: 'flex', bgcolor: '#F8FAFC', padding: '20px 0px 50px' }}>
      <Container
        // component="main"
        sx={{ display: 'flex', columnGap: '20px', mt: 2 }}
      >
        <Box sx={{ flexGrow: 2 }}>
          <Paper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Appointments
              </Typography>
              <Button>
                <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                  Browse all
                </Typography>
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.calories}</StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                      <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* <Paper>
            <Typography>Appointment list</Typography>
          </Paper>
          <Paper>
            <Typography>Labs list</Typography>
          </Paper>
          <Paper>
            <Typography>Billings list</Typography>
          </Paper> */}
        </Box>

        <Box sx={{ flexGrow: 0, gap: '20px', display: 'flex', flexDirection: 'column' }}>
          <Paper elevation={3}>
            {/* <Typography>Patients dummy line chart</Typography> */}
            <Chart />
          </Paper>
          <Paper elevation={3}>
            <Calendar />
          </Paper>
        </Box>
      </Container>
    </Container>
  )
}

export default DoctorDashboard