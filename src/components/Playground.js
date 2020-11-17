import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(2),
  },
  margin: {
    marginBottom: '20px',
  },
  Box: {
    backgroundColor: '#2d2d2d',
    textAlign: 'left',
    height: 10,
  },
  input: {
    borderColor: '#222',
  },
  container: {
    display: 'flex',
  },
  buttonSubmit: {
    backgroundColor: 'blue',
    margin: '20px',
  },
}));

export default function Playground() {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel
            htmlFor='outlined-adornment-amount'
            style={{ fontSize: '18px' }}
          >
            Endpoint
          </InputLabel>
          <OutlinedInput
            inputProps={{
              classes: {
                focused: classes.focused,
              },
            }}
            className={classes.input}
            id='outlined-adornment-amount'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            startAdornment={
              <InputAdornment position='start'>
                http://localhost:3000
              </InputAdornment>
            }
            labelWidth={80}
          />
        </FormControl>
      </Container>

      <Container>
        <Box className={classes.Box}></Box>
      </Container>
    </div>
  );
}
