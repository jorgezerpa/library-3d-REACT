import React from 'react'

import { Typography, Grid, Container, Card, CardContent } from '@material-ui/core';

import Book from '../../components/Book/Book';

import useStyles from './styles';


const Section = ({books, sectionName}) => {
    const classes = useStyles();

  return (
    <Container className={classes.container} style={{paddingTop: '50px'}}>
    <Typography variant='h5' style={{marginBottom:'20px'}}>{sectionName}</Typography>
    <Grid spacing={2} container justifyContent='space-around'>
        {
        books && books.map((book)=>(
                <Grid item key={book.isbn13}>
                    <Card className={classes.card} style={{maxWidth:'350px',padding:'5px 40px', display:'flex', justifyContent:'center', gap:'10px' }}>
                        <Book url={book.image} id={book.isbn13}/>
                        <CardContent>
                            <Typography variant='body1' style={{color:'#fff'}}>{book.title}</Typography>                          
                        </CardContent>
                    </Card>
                </Grid>
        ))}
       
    </Grid>
</Container>
  )
}

export default Section