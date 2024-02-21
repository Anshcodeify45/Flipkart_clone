import React from 'react'
import { Box, InputBase ,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = styled(Box)`
border-radius: 2px;
margin-left: 10px;
width: 38%;
background-color: #fff;
display: flex;
`

const Inputdt = styled (InputBase)`
font-size: unset;
width: 100%;
padding-left: 20px;
`
const Searchwrapper = styled(Box)`
margin-left: auto;
padding: 5px;
display: flex;
color: blue;
`

function Search() {
  return (
    <SearchBar>
      <Inputdt placeholder="Search for products, brands and more"/>
      <Searchwrapper>
      <SearchIcon/>
      </Searchwrapper>
    </SearchBar>
  )
}

export default Search
