import React from 'react'
import '../../components/products/product.css'

import { useEffect, useState } from 'react'
import { publicRequest } from "../../requestMethods";
import { Link, useLocation } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([])
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    console.log(cat);
    
   

    useEffect(() => {
      const getProducts = async ()=>{
        try{
            const res = await publicRequest.get( cat ? `/products?category=${cat}` : "/products")
            setProducts(res.data)
            // console.log(res.data)
        } catch{}
      } 
      getProducts();
    }, []) 
  return (
    <>
    <div class="small-container">
        <div class="row row-2">
            <h2>All Products</h2>
            <select >
                <option>men</option>
                <option>women</option>
                <option>childern</option>
                
            </select>
        </div>
        <div class="row">
            {products.map((product)=>(
                <div class="col-4">
                  <Link to={`product/${product._id}`}>
                   <img src={product.img}/>
                  </Link>
                <h4>{product.title}</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>${product.price}</p>
            </div>
                ))}

           


   
        </div>
     
    </div>
    </>
  )
}

export default Products