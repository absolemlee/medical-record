import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
//   typography: {
//     fontFamily: roboto.style.fontFamily,
//   },
//   components: {
//     MuiAlert: {
//       styleOverrides: {
//         root: ({ ownerState }) => ({
//           ...(ownerState.severity === 'info' && {
//             backgroundColor: '#60a5fa',
//           }),
//         }),
//       },
//     },
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e'
    }
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: '#fafafa',
            color: '#3f51b5',
          },
          ".MuiTypography-root": {
            fontWeight: '500',
            color: '#64748B'
          },
          ".MuiListItemIcon-root": {
            color: '#64748B'
          },
          "&:hover .MuiTypography-root": {
            color: "#3f51b5",
            fontWeight: 'bold',
          },
          "&:hover .MuiListItemIcon-root": {
            color: "#3f51b5",
            fontWeight: 'bold',
          },
        },
      }
    },
  }
})

export default theme;