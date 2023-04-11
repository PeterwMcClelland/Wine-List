import { Button } from '@mui/material';
import React from 'react';
import "./Wine.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Zoom } from 'react-medium-image-zoom'

const Wine = (props) => {
    const history = useNavigate()
    const { _id, name, brand, vintage, varietal, appellation, harvestdate, aging, bottlingdate, alcohol, price, image} = props.wine;
    const deleteHandler = async() => {
       await axios.delete(`http://localhost:3000/wines/${_id}`)
        .then(res=>res.data)
        .then(()=> history("/"))
        .then(()=> history("/wines"))
    }
  return <div className='card'>
     
      <div className='column'>
      <h1>{brand}</h1>
      <h2>{name}</h2>
      
      <img src={image} alt={name} width={500} />
      
      </div>
      
      <div className='column'>
      <ul>
          <li>Vintage: {vintage}</li>
          <li>Varietal: {varietal}</li>
          <li>Appellation: {appellation}</li>
          <li>Harvest Date: {harvestdate}</li>
          <li>Aging: {aging}</li>
          <li>Bottling Date: {bottlingdate}</li>
          <li>Alcohol: {alcohol}</li>
      </ul>
      <h3>Price: ${price}</h3>
      </div>
      
      
      <Button LinkComponent={Link} to={`/Wines/${_id}`}> Update</Button>
      <Button onClick={deleteHandler}>Delete</Button>
      </div>;
  
};

export default Wine;