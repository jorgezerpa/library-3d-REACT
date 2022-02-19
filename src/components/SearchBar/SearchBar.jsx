import React,{useState, useContext} from 'react';
import { SearchBarContext } from '../../App';

import { useLocation } from 'react-router-dom';

import useStyles from './styles';

import getBookService from '../../Services/getBooksService';


const SearchBar = () => {
    const classes = useStyles();

    const context = useContext(SearchBarContext);

  const search = async (value) => {
    getBookService.getSearchedBooks(context.setResult, value )
  } 

  return (
    <input
    onChange={(e)=>{
      search(e.target.value);
      context.setSearchBarLength(e.target.value.length);
    }} 
     className={classes.searchInput} placeholder='search'></input>
  )
}

export default SearchBar