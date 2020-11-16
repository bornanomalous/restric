import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Playground from './components/Playground';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/playground'>
              <Playground />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
