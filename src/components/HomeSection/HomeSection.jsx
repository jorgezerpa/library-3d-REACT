import React from 'react';

import { Typography, Grid, Container, Card, CardContent } from '@material-ui/core'

import Book from '../Book/Book';

import useStyles from './styles';


const HomeSection = ({ books, SectionName }) => {
    const classes = useStyles();

    
     return (
    <Container className={classes.container}>
        <Typography variant='h5' style={{marginBottom:'20px'}}>{SectionName}</Typography>
        <Grid spacing={2} container justifyContent='space-around'>
            {
            books.slice(0,3).map((book)=>(
                    <Grid item key={book.isbn13}>
                        <Card className={classes.card} style={{maxWidth:'350px',padding:'5px 40px', display:'flex', justifyContent:'center', gap:'10px' }}>
                            <Book url={book.image} id={book.isbn13}/>
                            <CardContent>
                                <Typography variant='body1' style={{color:'#fff'}} >{book.title}</Typography>                          
                            </CardContent>
                        </Card>
                    </Grid>
            ))}
           
        </Grid>
    </Container>
  )
}

export default HomeSection