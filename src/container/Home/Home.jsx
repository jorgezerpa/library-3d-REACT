import React from 'react';

import HomeSection from '../../components/HomeSection/HomeSection';

import { Grid, Typography, Button } from '@material-ui/core';

const Home = ({ newBooks, developmentBooks, designBooks, beginnerBooks, backendBooks, frontendBooks }) => {

  return (
    <div>

      <HomeSection books={newBooks} SectionName='New' />
      <HomeSection books={developmentBooks} SectionName='Development' />
      <HomeSection books={designBooks} SectionName='Design' />
      <HomeSection books={beginnerBooks} SectionName='Beginner' />
      <HomeSection books={frontendBooks} SectionName='Frontend' />
      <HomeSection books={backendBooks} SectionName='Backend' />
    </div>
    )
}

export default Home