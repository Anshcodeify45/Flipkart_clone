import './App.css';

import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/home/Home';
import Datasupply from './context/Datasupply';

import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import ProductData from './components/productdetails/ProductData';
function App() {
  return (
    <Datasupply className="App">
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop : 54}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductData/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </Datasupply>
  );
}

export default App;
