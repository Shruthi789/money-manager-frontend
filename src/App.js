import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Home} from './Money-Manager/Home.js';
import {MoneyDisplay} from './Money-Manager/MoneyDisplay.js';
import {Summary} from './Money-Manager/Summary.js';
import SplitButton from './SplitButton.js'; //Button DropDown code
import './App.css';
import {useHistory,Switch,Route,Redirect} from 'react-router-dom';

function App() {
  const history=useHistory();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <div className="navBar">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Money Management
          </Typography>
        <Button color="inherit" onClick={()=>{history.push('/')}} variant="text">Home</Button>
        <SplitButton/> { /*Material UI Button Drop Down used for displaying Monthly/Yearly/Weekly Income and Expenditure upon option selection. Please refer to SplitButton.js for the code */}
        <Button color="inherit"  onClick={()=>{history.push('/money-mgr/summary')}} variant="text">Summary</Button>
        </div>
        </Toolbar>
      </AppBar>
    </Box>
    <Switch>
       <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/money-mgr/Selectaplan...">
       <Redirect to="/"/>
      </Route>
      <Route path="/money-mgr/summary">
        <Summary/>
      </Route>
      <Route path="/money-mgr/:option">
       <MoneyDisplay/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
