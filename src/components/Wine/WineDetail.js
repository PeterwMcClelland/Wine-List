import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';



const WineDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const history = useNavigate();
    
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:3000/wines/${id}`)
            .then((res) => res.data)
            .then((data)=>setInputs(data.wine));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:3000/wines/${id}`, {
            name: String(inputs.name),
             brand: String(inputs.brand),
             vintage: String(inputs.vintage),
             varietal: String(inputs.varietal),
             appellation: String(inputs.appellation),
             harvestdate: String(inputs.harvestdate),
             aging: String(inputs.aging),
             bottlingdate: String(inputs.bottlingdate),
             alcohol: String(inputs.alcohol),
             price: Number(inputs.price),
             image: String(inputs.image)
        }).then(res=>res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/wines"));

    }
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

  return (<div>
      {inputs && (
      <form onSubmit={handleSubmit}>
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent={'center'} 
      maxWidth={700}
      alignContent={'center'}
      alignSelf={'center'}
      marginLeft={'auto'}
      marginRight={'auto'}
      marginTop={10}
      marginBottom={10}
       >

      <FormLabel>Name</FormLabel>
      <TextField 
      value={inputs.name} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="name" />

      <FormLabel>Brand</FormLabel>
      <TextField 
      value={inputs.brand} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="brand" />

      <FormLabel>Vintage</FormLabel>
      <TextField 
      value={inputs.vintage} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="vintage" />

      <FormLabel>Varietal</FormLabel>
      <TextField 
      value={inputs.varietal} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="varietal" />

      <FormLabel>Appellation</FormLabel>
      <TextField 
      value={inputs.appellation} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="appellation" />

      <FormLabel>Harvest Date</FormLabel>
      <TextField 
      value={inputs.harvestdate} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="harvestdate" />

      <FormLabel>Aging</FormLabel>
      <TextField 
      value={inputs.aging} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="aging" />

      <FormLabel>Bottling Date</FormLabel>
      <TextField 
      value={inputs.bottlingdate} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="bottlingdate" />
      <FormLabel>Alcohol</FormLabel>
      <TextField 
      value={inputs.alcohol} 
      onChange={handleChange} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="alcohol" />

      <FormLabel>Price</FormLabel>
      <TextField 
      value={inputs.price} 
      onChange={handleChange} 
      type={'number'} 
      margin='normal' 
      fullWidth variant='outlined' 
      name="price" />

      <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />

      <Button variant='contained' type='submit' >
          Update Wine
      </Button>
    </Box>
  </form>
  )};
  </div>)
};

export default WineDetail;