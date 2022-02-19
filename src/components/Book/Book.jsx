import React, { useEffect, useRef, useState } from 'react';

import getBookServices from '../../Services/getBooksService';

import { Typography, Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './styles.css';


const BookDetails = ({buttonCloseFunction,name, authors, desc, pages, price, buyLink, preview})=>{
  
  const handleClick = () => {
    window.open(buyLink);
  };

  return(
      <Card className='bookInfo' style={{background:'rgba(0,0,0,.8)'}}>
            <div onClick={buttonCloseFunction} style={{color:'white'}}>
              <CloseIcon color='primary' />
            </div>
          <CardContent>
            <Typography  variant='h4' gutterBottom>{ name } </Typography>
            <Typography style={{color:'#fff'}} variant = 'body1' gutterBottom>{ authors } </Typography>
            <Typography style={{color:'#fff'}} variant = 'body2' gutterBottom>{ desc } </Typography>
            <Typography style={{color:'#fff'}} variant = 'body2' gutterBottom>pages: {pages} </Typography>
            <Typography style={{color:'#fff'}} variant = 'body2' gutterBottom>{price} </Typography>
            
            <CardActions>
              <Button onClick={ handleClick } style={{marginLeft:'10px', padding:'10px', border:'1px solid #fff', background:'#d11', color:'#fff'}}>BUY</Button>
            </CardActions>
          </CardContent>
        </Card>
  )
}


const Layer = ()=>(
  <div className='layer'></div>
)


const Book = ({ url, id }) => {
  
  const [showDetails, setshowDetails] = useState(false)
  const [bookInfo, setBookInfo] = useState({});
  
  const makeBookBigger = ()=>{
      setshowDetails((prev)=>!showDetails)
  } 

  useEffect(()=>{
    getBookServices.getDetailInfo(setBookInfo, id );
  }, [])

  return (
    <div className="scene"> 
        { showDetails && <Layer />}
        { showDetails && <BookDetails
              buttonCloseFunction={makeBookBigger}
               name={bookInfo.title}
               desc = { bookInfo.desc.slice(0, 150)+"..."}
               pages = {bookInfo.pages}
               price = {bookInfo.price}
              authors = {bookInfo.authors}
              buyLink = { bookInfo.url }
        />}

        <div className={showDetails ? 'book showDetails' : 'book'} onClick={()=>{
          makeBookBigger();
        }}>
            <div className="book__face  book__face_front frontal ">
              <img className='cover' src={url}></img>
            </div>
            <div className="book__face  book__face_back  frontal "></div>
            <div className="book__face  book__face_left longitudinal "></div>
            <div className="book__face  book__face_right longitudinal "></div>
            <div className="book__face  book__face_top  transversal "></div>
            <div className="book__face  book__face_bottom transversal "></div>
        </div>
    </div>
  )
}

export default Book