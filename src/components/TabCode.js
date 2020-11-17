import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className='codeBox'>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: '20px',
  },
  AppBar: {
    backgroundColor: '#fff',
    color: 'inherit',
  },
  Box: {
    backgroundColor: '#2d2d2d',
    textAlign: 'left',
    padding: '20px',
  },
  function: {
    color: '#fff',
  },

  method: {
    color: '#26c6da',
    fontWeight: 400,
  },
  braces: {
    color: '#ec407a',
  },
  url: {
    color: '#ffb74d',
  },
  res: {
    color: '#ef5350',
    fontWeight: 500,
  },
}));

export default function TabCode() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant='h5'
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        Example Request
      </Typography>
      <AppBar position='static' className={classes.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='JavaScript' {...a11yProps(0)} />
          <Tab label='Python' {...a11yProps(1)} />
          <Tab label='Curl' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box className={classes.Box}>
          <span>
            <span className={classes.function}>axios.</span>
            <span className={classes.method}>get</span>
            <span className={classes.braces}>(</span>
            <spans className={classes.url}>"https://localhost"</spans>
            <span className={classes.braces}>).</span>
            <br />
          </span>
          <span className={classes.method}>&emsp;&emsp;&emsp;then</span>
          <span className={classes.braces}>(</span>
          <span className={classes.res}> res</span>
          <span className={classes.braces}> =&gt; </span>
          <span className={classes.braces}>&#123;</span>
          <span style={{ color: '#fff' }}> console.</span>
          <span className={classes.method}>log</span>
          <span className={classes.braces}>(</span>
          <span className={classes.res}> res</span>
          <span className={classes.braces}> ) ) );</span>
          <br />
          <span className={classes.method}>&emsp;&emsp;&emsp;catch</span>
          <span className={classes.braces}>(</span>
          <span className={classes.res}> error</span>
          <span className={classes.braces}> =&gt; </span>
          <span className={classes.braces}>&#123;</span>
          <span style={{ color: '#fff' }}> console.</span>
          <span className={classes.method}>log</span>
          <span className={classes.braces}>(</span>
          <span className={classes.res}> error</span>
          <span className={classes.braces}> ) ) );</span>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box className={classes.Box}>
          <span className={classes.method}>import</span>
          <span className={classes.function}> request</span>
          <br />
          <span className={classes.function}>response = </span>
          <span className={classes.function}>requests.</span>
          <span className={classes.method}>get</span>
          <span className={classes.braces}>(</span>
          <spans className={classes.url}> "https://localhost" </spans>
          <span className={classes.braces}>)</span>
          <span className={classes.function}> ;</span>
          <br />
          <span className={classes.method}>print</span>
          <span className={classes.braces}>(</span>
          <span className={classes.function}> response </span>
          <span className={classes.braces}>)</span>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box className={classes.Box}>
          <span className={classes.method}>curl</span>
          <span className={classes.url}>
            &emsp; https://jsonplaceholder.typicode.com/posts
          </span>
        </Box>
      </TabPanel>
    </div>
  );
}
