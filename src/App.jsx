import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import getBooksService from './Services/getBooksService'


import Header from './container/Header/Header';
import  Home  from './container/Home/Home';
import  FeaturedSection  from './container/FeaturedSection/FeaturedSection';
import  DevelopmentSection  from './container/DevelopmentSection/DevelopmentSection';
import  BeginnerSection  from './container/BeginnerSection/BeginnerSection';
import  DesignSection  from './container/DesignSection/DesignSection';
import  FrontendSection  from './container/FrontendSection/FrontendSection';
import  BackendSection  from './container/BackendSection/BackendSection';

import './styles.css'


            //context
export const SearchBarContext = React.createContext();


const App = () => {

  const [showSearch, setShowSearch] = useState(false);

  const showSearchSection = () => {
    setShowSearch(prev => !prev);
  }

  const [newBooks, setNewBooks] = useState([]);
  const [developmentBooks, setDevelopmentBooks] = useState([]);
  const [designBooks, setDesignBooks] = useState([]);
  const [beginnerBooks, setBeginnerBooks] = useState([]);
  const [backendBooks, setBackendBooks] = useState([]);
  const [frontendBooks, setFrontendBooks] = useState([]);


  useEffect(()=>{
      getBooksService.getNewBooks(setNewBooks);

            // aply DRY principle, getBooksService work for the rest of my peticions, just changing parameters
        getBooksService.getSearchedBooks(setDevelopmentBooks, 'development');
        getBooksService.getSearchedBooks(setDesignBooks, 'design');
        getBooksService.getSearchedBooks(setBeginnerBooks, 'beginner');
        getBooksService.getSearchedBooks(setBackendBooks, 'backend');
        getBooksService.getSearchedBooks(setFrontendBooks, 'frontend');
  }, [])

  

  return (
    <SearchBarContext.Provider value={showSearch}>
            <BrowserRouter>
                <Header />
            <Routes>
                  <Route path='/' element={<Home newBooks={newBooks} developmentBooks={developmentBooks} designBooks = { designBooks} beginnerBooks={beginnerBooks}backendBooks = {backendBooks}frontendBooks = { frontendBooks}/>} />
                  <Route path='/home' element={<Home newBooks={newBooks} developmentBooks={designBooks} designBooks = { designBooks}beginnerBooks={beginnerBooks}backendBooks = {backendBooks}frontendBooks = { frontendBooks}/>}/>
                  <Route path='/featured' element={<FeaturedSection books={newBooks} />}  />
                  <Route path='/development' element={<DevelopmentSection books={developmentBooks} />}  />
                  <Route path='/design' element={<DesignSection  books={designBooks}/> }  />
                  <Route path='/beginner' element={<BeginnerSection books={beginnerBooks} />}  />
                  <Route path='/backend' element={<BackendSection books={backendBooks}/>}  />
                  <Route path='/frontend' element={<FrontendSection books={frontendBooks}/>}  />
            </Routes>
        </BrowserRouter>
    </SearchBarContext.Provider>

  )
}

export default App