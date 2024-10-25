import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Relatedproducts = (category,subCategory) => {

const {products} = useContext(ShopContext);
const [related,setRelated] = useState([]);

useEffect(()=>{

if (products.length > 0) {
    
}


},[])


  return (
    <div>

    </div>
  )
}

export default Relatedproducts