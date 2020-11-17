import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
    borderRadius: '8px',
    padding: '10px',
  },
  input: {
    borderColor: '#222',
  },
  container: {
    display: 'flex',
  },
  buttonSubmit: {
    backgroundColor: '#00bcd4',
    marginTop: '10px',
    marginLeft: '20px',
  },
}));

export default function Playground() {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const [playerData, setplayerData] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    await axios.get(`http://35.200.58.73:5000/${url}`).then((res) => {
      console.log(res.data);
      setplayerData(res.data);
    });
  };
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
                http://35.200.58.73:5000
              </InputAdornment>
            }
            labelWidth={80}
          />
        </FormControl>
        <span>
          <Button
            className={classes.buttonSubmit}
            type='submit'
            onClick={onSubmit}
          >
            Execute
          </Button>
        </span>
      </Container>

      <Container>
        <Box className={classes.Box}>
          {playerData ? (
            playerData.map((player) => {
              return (
                <div style={{ marginBottom: '10px' }}>
                  <pre>
                    <code style={{ color: '#26c6da' }}>
                      {JSON.stringify(player, undefined, 2)}
                    </code>
                  </pre>
                </div>
              );
            })
          ) : (
            <span>hello</span>
          )}
        </Box>
      </Container>
    </div>
  );
}
