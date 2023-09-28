import React from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import ProductCard from '../../components/productCard/ProductCard'
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'
import './marketplace.css'
import Footer from '../../components/footer/Footer';

function MarketPlace() {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/products/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='marketPlace'>
      
      <ProductCard />
     
    </div>
  );
}

export default MarketPlace;



























// import React from 'react'
// import ProductCard from '../../components/productCard/ProductCard'
// import axios from 'axios'
// import { useAuthContext } from '../../hooks/useAuthContext'
// import { useState,useEffect } from 'react'

// function MarketPlace() {
//   const {user}=useAuthContext()
//   const [img, setImg]=useState()
//   const [data,setData]=useState()
//   useEffect(()=>{
    
//     axios.get('api/affiliate/products',{
//       headers:{
//         Authorization:`Bearer ${user.token}`
//       }
//     }).then(response=>{
//       setData(response.data)
  

//     })
//   })
//   return (
//     <div>
//       {data &&
//         data.map((datas)=>{
//           return(
//             <div>
//               <p>{datas.image.data}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default MarketPlace
