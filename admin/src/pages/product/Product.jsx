import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [inStock, setInStock] = useState();

    const handleUpdate = async () =>{
        updateProduct(productId, dispatch, {title,desc,price,inStock});
        
    }
 

    const product = useSelector((state)=> state.product.products.find((product)=>
        product._id === productId
    ));

  return ( 
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem" >
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue" style={{marginLeft: "10px"}}>{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock ? (<p>Yes</p>):(<p>No</p>)}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title} onChange= {(e)=> setTitle(e.target.value)} />
                  <label>Product Description</label>
                    <input type="text" placeholder={product.desc} onChange= {(e)=> setDesc(e.target.value)} />
                    <label>Price</label>
                    <input type="text" placeholder={product.price} onChange= {(e)=> setPrice(e.target.value)} />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock" onChange= {(e)=> setInStock(e.target.value)}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
