import { createTheme } from '@mui/material/styles';

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
  // palette: {
  //   mode: 'dark',
  //   primary: { main: 'rgb(102, 157, 246)' },
  //   background: { paper: 'rgb(5, 30, 52)' },
  // },
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e'
    }
  },
  components: {
    // MuiListItem: {
    //   styleOverrides: {
    //     root: {
    //       "&$selected": {
    //         backgroundColor: "red",
    //         "&:hover": {
    //           backgroundColor: "orange",
    //         },
    //       },
    //     },
    //     button: {
    //       "&:hover": {
    //         backgroundColor: "yellow",
    //       },
    //     }
    //   }
    // }
    MuiListItemButton: {
      // defaultProps: {
      //   disableTouchRipple: true,
      // },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#6573c3",
            color: 'white'
          },
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          "&:hover": {
            // backgroundColor: "#6573c3",
            color: 'white'
          },
        }
      }
    }

  }
})

export default theme;