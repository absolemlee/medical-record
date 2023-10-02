import NavBar from "./components/NavBar"
import {
  Container,
  Toolbar,
  Box,
  Menu,
  Typography,
  IconButton,
  MenuItem,
  Button
}
  from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
        <Typography variant="h2">
          Landing Page
        </Typography>
        <Typography variant="h5">
          This page will be left blank for now
        </Typography>
      </Box>
    </Container>
  )
}
