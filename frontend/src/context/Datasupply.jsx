import React from 'react'
import { createContext  } from 'react'
import { useState } from 'react';

export const DataContext = createContext(null);




const Datasupply = ({children}) => {

    const [account ,setAccount] = useState('');
  return (
    <DataContext.Provider value={{ account, setAccount }}>
        {children}
    </DataContext.Provider>
  )
}

export default Datasupply;
