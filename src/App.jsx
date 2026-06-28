import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'
import categoryContext from './Context/Category';
const App = () => {
    const [view,setView] = useState("jewelery")

    const fetchProduct = async()=>{
        try{
            const res = await fetch("https://fakestoreapi.com/products/1")
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.log("Error : ",error);
        }
    }
// For fetching data we use useEffect
useEffect(()=>{
    fetchProduct();
},[])
  return (
    // for using useContext we wrap it into name_of_variable_in_component. provider and pass value as an object to use multiple value -- destructure into object and then passed
    <categoryContext.Provider value = {{view,setView}}> 
    <div className='bg-zinc-800 text-white h-auto min-h-screen'>
        <Navbar/>
        <h1 className='text-4xl text-center text-white'> {view.toUpperCase()} PRODUCTS</h1>
        <Home/>
        <Footer/>
    </div>
    </categoryContext.Provider>
  )
}

export default App
