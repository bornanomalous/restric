import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import heroImage from '../assets/cricket.webp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),
    url(${heroImage})`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundSize: 'cover',
    justifyContent: 'center',
    color: '#fff',
    alignItems: 'center',
    fontSize: '2rem',
  },
}));
function Hero() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.hero}>
        <Box>
          <Typography variant='h2'>CRICKET API</Typography>
        </Box>
        <Box style={{ padding: '20px' }}>
          <Button
            style={{
              backgroundColor: '#f44336',
              color: '#fff',
              padding: '10px',
              marginRight: '20px',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
            variant='contained'
          >
            Get Started
          </Button>
          <Button
            variant='outlined'
            style={{
              color: '#fff',
              padding: '10px',
              marginRight: '20px',
              textTransform: 'uppercase',
              fontWeight: 500,
              borderColor: '#fff',
            }}
          >
            Api Documetation
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
