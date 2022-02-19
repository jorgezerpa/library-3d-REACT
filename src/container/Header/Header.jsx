import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, AppBar, Toolbar, Typography, TextField } from '@material-ui/core';

import SearchBar from '../../components/SearchBar/SearchBar';

import useStyles from './styles';



const NavBar = ()=>{
    const classes=useStyles();

    return (
            <Toolbar>
                <Grid container justifyContent='center' spacing={2} >
                    <Grid item ><Typography component = {Link} to='/home' variant="body1" style={{color: '#fff', textDecoration:'none'}}>HOME</Typography> </Grid>
                    <Grid item ><Typography component = {Link} to='/featured' variant="body1" className={classes.navbarItem}>Featured</Typography> </Grid>
                    <Grid item ><Typography component = {Link} to='/development' variant="body1" className={classes.navbarItem}>Development</Typography> </Grid>
                    <Grid item ><Typography component = {Link} to='/design' variant="body1" className={classes.navbarItem}>Design</Typography> </Grid>
                    <Grid item ><Typography component = {Link} to='/beginner' variant="body1" className={classes.navbarItem}>Beginner</Typography></Grid>
                    <Grid item ><Typography component = {Link} to='/frontend' variant="body1" className={classes.navbarItem}>Frontend</Typography> </Grid>
                    <Grid item ><Typography component = {Link} to='/backend' variant="body1" className={classes.navbarItem}>Backend</Typography> </Grid>
                </Grid>
            </Toolbar>
    )
}



const Header = () => {
    const classes=useStyles();

  return (
    <header className={classes.header}>
        <AppBar className={classes.appBar} position='relative' style={{zIndex: '10'}}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={1}>
                        <Typography>LOGO</Typography>
                    </Grid>
                    <Grid item xs={6}>
                            <SearchBar />
                    </Grid>         
                </Grid>

                <NavBar />
        </AppBar>
    </header>
  )
}

export default Header

