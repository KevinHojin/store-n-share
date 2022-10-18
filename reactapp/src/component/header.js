import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Head = (props) => {  
    return (
        <AppBar
          //component="div"
          //color="primary"
          position="static"
          //elevation={0}
          sx={{ zIndex: 2, height: 125, mb:5}}
        >
          <Toolbar>
              <Grid item xs>
                <Typography sx={{mt: 5}} position='relative' color="inherit" variant="h3" component="h1">
                 Store and Share
                </Typography>
              </Grid>
          </Toolbar>
        </AppBar>
    );
  }