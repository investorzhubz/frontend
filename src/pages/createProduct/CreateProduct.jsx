import React, { useEffect } from 'react'
import './createproduct.css'
import axios from 'axios'
import Alert from'../../components/alerts/Alert'
import Navbar from '../../components/navbar/Navbar'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Loading from '../../components/loading/Loading'
import { useAuthContext } from '../../hooks/useAuthContext'
function CreateProduct() {
  const [title,setTitle]=useState()
  const [price,setPrice]=useState()
  const [description,setDescription]=useState()
  const [image,setImage]=useState()
  const [msg,setMsg]=useState()
  const [error,setError]=useState()
  const [data,setData]=useState()
  const {user}=useAuthContext()
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`,{
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    }).then(response=>{
      setData(response.data)
      // if(!response.data.isAdmin){
      //   navigate('/dashboard')

      // }


    }).catch(error=>{
      navigate('/dashboard')
    })
  })
  const submitForm=(e)=>{
  
    e.preventDefault()
    setMsg(false)
    setError(false)
    const formData=new FormData()
    formData.append('productImage',image)
    formData.append('title',title)
    formData.append('price',price)
    formData.append('description',description)

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`,formData,{
      headers:{
        "Content-Type":'multipart/form-data',
        Authorization:`Bearer ${user.token} `
      }
    }).then(response=>{
      setMsg(response.data.msg)

    }).catch(error=>{
      setError(error.response.data.error)
    })
    
  }
  return (
  <div>
    {
      data ? 
      <div className='createproduct'>
         <Navbar/>
          {error &&( <div>
          <Alert type="error">
          <p>{error}</p>
  
          </Alert>
        </div>)}
        {msg &&( <div>
          <Alert type="success">
          <p>{msg}</p>
  
          </Alert>
        </div>)}
        <div className="heading"><h1>Add New Product</h1></div>
      <form className="product-form">
  
        <label>Product Title</label>
        <input type="text" name="title" onChange={(e)=>{
          setTitle(e.target.value)
        }} value={title}/>
        <label>Price</label>
        <input type="Number" name="price"onChange={(e)=>{
          setPrice(e.target.value)
        }} value={price}/>
        <label >Short Description</label>
        <div className='description' name='description'>
        <input type="text" onChange={(e)=>{
          setDescription(e.target.value)
        }} value={description}/>
        </div>
         <div className='froml'>
         <span className=" form-title">Upload Product Image</span>
     <p className="form-paragraph">
        File should be an image
      </p>
     <label for="file-input" className="drop-container">
     <span className="drop-title">Drop files here</span>
    or
    <input type="file" accept="image/" required="true" name='productImage' onChange={(e)=>{
      setImage(e.target.files[0])
    }} />
   </label>
         </div>
   <button type='submit' onClick={submitForm}>Create Product</button>
  </form>
      </div>:<Loading/>
    }
  </div>

  )
}

export default CreateProduct
