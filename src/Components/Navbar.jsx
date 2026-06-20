import React, { useContext, useState ,useEffect} from 'react'
import categoryContext from '../Context/Category';
// in navbar category comes and we can use it is home to show category
const Navbar = () => {
    const [category,setcategory] = useState(["...Loading Menu"]);
    // const [view, setView] = useState("");
    const {setView, view} = useContext(categoryContext); // by useContext we use the setView fucntion here 
    const handleView = (item)=>{
        setView(item);
        // console.log(view); // this will print on console but if we want to print alll in home screen -- go to home
    }
    useEffect( ()=>{
        const fetchCategory = async ()=>{
            try {
                const res = await fetch("https://fakestoreapi.com/products/categories");
                const data = await res.json();
                console.log(data);
                setcategory(data);
                console.log(category);
            } catch (error) {
                console.log("Error in fetching API")
            }
        } 
        fetchCategory();
    },[])
  return (
    <div className='flex justify-between gap-4 py-4 text-2xl' >
      <div><h1>LEARN CODING</h1></div>
      <div>
        <ul className='flex gap-4 '>
            {
                category.map((item,i)=><li className={(view===item) ? "bg-gray-600" : "cursor-pointer"} key={i} onClick={()=>handleView(item)}>{item.toUpperCase()}</li>)
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
