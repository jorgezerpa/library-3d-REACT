import React,{useState} from 'react';

import useStyles from './styles';

import getBookService from '../../Services/getBooksService';



const SearchBar = () => {
    const classes = useStyles();
    const [result, setResult] = useState([])

  const search = async (value) => {
    getBookService.getSearchedBooks(setResult, value )
    console.log(result);
  } 

  return (
    <input
    onChange={(e)=>{search(e.target.value)}} 
     className={classes.searchInput} placeholder='search'></input>
  )
}

export default SearchBar