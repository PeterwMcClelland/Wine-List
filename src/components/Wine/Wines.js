import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Wine from "./Wine";
import "./Wine.css";
const URL = "http://localhost:3000/wines"; 
 

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data);
};

 const Wines = () => {
     const [wines, setWines] = useState();
  useEffect(() => {

    fetchHandler().then(data => setWines(data.wines));
  }, []);
  console.log(wines);
  
  return <div className='background'>
      
      <ul>
          {wines && wines.map((wine, i) =>(
          <li key={i}>
            <Wine wine={wine} />
              </li>
              
          ))} 
      </ul>
  </div>;
};

export default Wines;