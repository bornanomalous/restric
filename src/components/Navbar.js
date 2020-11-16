import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  AppBar: {
    backgroundColor: '#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  buttons: {
    marginLeft: 'auto',
    display: 'flex',
  },
  button: {
    color: '#222',
    fontSize: 16,
    fontWeight: 400,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        color='transparent'
        className={classes.AppBar}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.buttons}>
            <Button color='inherit' className={classes.button}>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to='/playground'
              >
                Playground
              </Link>
            </Button>
            <Button color='inherit' className={classes.button}>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to='/playground'
              >
                Documentation
              </Link>
            </Button>
            <Button color='inherit' className={classes.button}>
              FAQ's
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
