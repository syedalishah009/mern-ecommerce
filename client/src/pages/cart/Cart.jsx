import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import StripeCheckout from "react-stripe-checkout";
import { removeProduct } from '../../redux/cartRedux';
import { publicRequest, userRequest } from '../../requestMethods';
const KEY = process.env.REACT_APP_STRIP;


const Cart = () => {
    const cart = useSelector((state)=> state.cart)
    // console.log(cart);
    // console.log(cart);
    const [stripeToken, setStripeToken] = useState(null);
    // const history = useHistory();
    const dispatch = useDispatch();
   
    const onToken = (token) => {
        setStripeToken(token);
      }; 
      console.log(stripeToken);
    useEffect(() => {
        const makeRequest = async ()=>{
            try {
                const res = await userRequest.post("/checkout/payment", {
                  tokenId: stripeToken.id,
                  amount: 500,
                });
                // window.location.replace("/login", {
                //     stripData: res.data,
                //     product:cart,
                // })
            }catch{}
        };
        stripeToken && makeRequest(); // when you submit details token returns so when token return run this makeRequest();
    }, [stripeToken, cart.total]);


    const handleRemove = (productId)=>{
        dispatch(removeProduct(productId))
    }
    
  return (
   
    <div class="small-container cart-page">
    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        {cart.products.map((product)=>(
            <tr key={product._id}>
            <td> 
                <div class="cart-info">
                    <img src={product.img}/>
                    <div>
                        <p>{product.title}</p>
                        <small>Price: ${product.price}</small>
                        <br/>
                        <a href='#' onClick={()=> handleRemove(product._id)}>Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value={product.quantity}/></td>
            <td>${product.price*product.quantity}</td>
        </tr>

            ))}

    </table>

    <div class="total-price">
        <table>
            <tr>
                <td>Subtotal</td>
                <td>${cart.total}</td>
            </tr>
            <tr>
                <td>Delivery charges</td>
                <td>$15</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>${cart.total-15}</td>
            </tr>
            <tr>
                <td></td>
            <StripeCheckout
              name="My Shop"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey="pk_test_51LAupSSFzOM28JybjW9r3Yq0X9X0UuWxQDZkjwF1oBSXjJDn3ifJ8I5CkmUhtrgakmM9PdcZuAah2OlYBle03Dfa0059FYwjI1"
            >
               <td class="anchor"> <a  class="btn">Proceed To Checkout</a></td>
            </StripeCheckout>
            </tr>
        </table>
        
    </div>
</div>

  )
}

export default Cart