import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethods';
import './singlep.css'
import { addProduct } from '../../redux/cartRedux'


const Singlep = () => {
    // getting product id coming in params
    const location = useLocation();
    // console.log(location);
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  console.log(size);
    const dispatch = useDispatch();

    useEffect(() => {
      const getProduct = async ()=>{
        try{
            const res = await publicRequest.get("/products/find/" + id)
            setProduct(res.data)
        } catch(err){}
      }
      getProduct();
    }, [id])
    
const handleClick = (e)=>{
    e.preventDefault();
    dispatch(addProduct({...product, quantity,size, color}))  // add all others product deatails except quantity size and color fill these with sending once
}

  return (
    <>
    <div class="small-container single-product">
    <div class="row">
        <div class="col-2">
            <img src={product.img} width="100%" />
            {/* <div class="small-img-row">
                <div class="small-img-col">
                    <img src={product.img} width="100%" class="small-img" />
                </div>

                <div class="small-img-col">
                    <img src="images/gallery-2.jpg" width="100%" class="small-img"/>
                </div>

                <div class="small-img-col">
                    <img src="images/gallery-3.jpg" width="100%" class="small-img"/>
                </div>
 
                <div class="small-img-col">
                    <img src="images/gallery-4.jpg" width="100%" class="small-img"/>
                </div>
            </div> */}
        </div>
        <div class="col-2">
            <p>Home / T-Shirt</p>
            <h1>{product.title}</h1>
            <h4>${product.price}</h4>
            <select onChange={(e)=> setSize(e.target.value)}>
                <option>Select Size</option>
                {product.size?.map((s)=>(
                    <option key={s}>{s}</option>
                ))}
            </select>
            <select onChange={(e)=> setColor(e.target.value)}>
                <option>Select Color</option>
                {product.color?.map((c)=>(
                    <option key={c}>{c}</option>
                ))}
            </select>
            <input type="number" value={quantity} min="1" max="10" onChange={(e)=> setQuantity(e.target.value)} />
            <a href="" class="btn" onClick={handleClick}>Add to Cart</a>
            <h3>Product Details <i class="fa fa-indent"></i></h3>
            <br/>
            <p>{product.desc}</p>
        </div>
    </div>
</div>


<div class="small-container">
        <div class="row">
            <div class="col-4">
                <img src="images/product-1.jpg"/>
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>

            <div class="col-4">
                <img src="images/product-2.jpg"/>
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>

            <div class="col-4">
                <img src="images/product-3.jpg"/>
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half"></i>
                </div>
                <p>$50.00</p>
            </div>

            <div class="col-4">
                <img src="images/product-4.jpg"/>
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>
        </div>
         
    </div>
 

</>
  )
}

export default Singlep