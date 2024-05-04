import { useEffect, useState } from "react"
import axios from "axios";

export default function Categories(){ 
  const[categories,setCategoris]=useState([]);

 const getCategoris=async()=>{
const {data}= await axios.get(`${import.meta.env.VITE_API}/categories/active?limit=10`);
setCategoris(data.categories);



 }
useEffect(()=>{
  getCategoris();

},[])



  return (
    <>
    <h2>Categories</h2>
    {categories.map(category=>
      <div className="category" key={category._id}>
      <img src={category.image.secure_url} />
     
      </div>

  )}
  </>


  )


}
