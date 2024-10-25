import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image,setImage] = useState('');


  const fetchProductData = () => {
    setProductData(
      products.find((item) => {
        if (item._id === productId) {
        setImage(item.image[0])
          return true;
        }
        return false;
      })
    );
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
  
  <div>

  </div>
  ) : <div className="opacity-0">

  </div>
};

export default Product;
