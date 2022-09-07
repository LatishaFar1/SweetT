import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Nunito',
            textTransform: 'none',
            fontSize: 14
        }
    },
    palette:{
        primary: {
            main: white[500]
        },
        secondary: {
            main: purple[200]
        }
    },
    components: {
        MuiTypography: {
            defaultProps:{
                sx: {
                    px: 3
                },
                variant: 'sub',
                textTransform: 'capitalize'
            }
        },
        MuiStack:{
            defaultProps: {
                sz: {
                    px: 3,
                    py: 1
                },
                spacing: 2,
                direction:  'row'
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            }
        },
        MuiLink:{
            defaultProps: {
                sx: {
                    color: theme => theme.palette.primary.main
                },
                underline: 'none'
            }
        },
        MuiButton:{
            defaultProps: {
                size: 'small',
                p: 0,
                disableRipple: true
            },
            variant: 'text'
        },
        MuiTab:{
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

function MaterialUITheme(prop) {


  return (
    <ThemeProvider theme={theme}>
        {prop.children}

    </ThemeProvider>
  )
}

export default MaterialUITheme