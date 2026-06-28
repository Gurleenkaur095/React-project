import React, { useContext, useState, useEffect } from 'react'
import categoryContext from '../Context/Category'
// import Navbar from './Navbar';
import { ShoppingBag } from 'lucide-react'
const Home = () => {
  // useContext(categoryContext) reads the value that was passed by the Provider.
  const { view } = useContext(categoryContext);
  console.log(view);
  // this is equivalent to
  // const contextData = useContext(categoryContext);
  // const view = contextData.view;
  const [data, setData] = useState("");
  const categoryView = async () => {
    try {
      // if(res){
      const res = await fetch(`https://fakestoreapi.com/products/category/${view}`)
      const categorydata = await res.json();
      setData(categorydata);
      console.log(data);
      // }else{
      //   console.log("fetching error")
      // }
    } catch (error) {
      console.log("Error in fetching category products")
    }
  }

// 3. useEffect watches the "view" variable. 
// Every single time the user clicks a different category, "view" changes, 
// and useEffect instantly forces the API function to run again!

  useEffect(() => {
    categoryView();
  }, [view]) // <-- "Watch this value for changes"
  if (!data) {
    return <div>
      <h1 className='text-3xl'>Loading Data...</h1>
    </div>
  }
  else {
    return (
      <div className='flex justify-evenly gap-10 flex-wrap'>
        {data.map((item, i) =>
          <div key={item.id} className='m-4 bg-white px-4 rounded-md'>
            <div className='w-[200px] h-[300px] relative'>
              <img src={item.image} className='w-full h-full object-contain'></img>
            </div>
            <div className='flex flex-col justify-center items-center my-2'>
              <h2 className='text-black font-semibold'>{`${item.title.slice(0, 12)}...`}</h2>
              <h5 className='text-black font-semibold'>${item.price}</h5>
              <button className='bg-zinc-500 w-full flex justify-center py-4 rounded'><ShoppingBag color="white" /></button>
            </div>
          </div>)}
      </div>
    )
  }
}

export default Home
