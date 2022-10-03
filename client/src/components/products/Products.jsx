
import { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethods';
import './product.css'

const Products = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async ()=>{
          try{
              const res = await publicRequest.get("/products")
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
        </div>

            <div class="row">
        {products.map((product)=>(
            <div class="col-4">
                <img src={product.img}/>
                <h4>{product.title}</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>

))} 
        </div>
    </div>
    </>
  )
}

export default Products