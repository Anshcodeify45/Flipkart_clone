import './App.css';

import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/home/Home';
import Datasupply from './context/Datasupply';
function App() {
  return (
    <Datasupply className="App">
      <Header/>
      <Box style={{marginTop : 54}}>
        <Home/>
      </Box>
    </Datasupply>
  );
}

export default App;
