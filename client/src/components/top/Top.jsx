import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/userRedux'
import './top.css'
const Navbar = () => {
    const quantity = useSelector((state)=> state.cart.quantity)
    const user = useSelector((state)=> state.user.currentUser)
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(logOut());  
    }
  return (
    
    <div class="header">
    <div class="container">
        <div class="nbr">
            <div class="logo">
                <h2>My Store</h2>
               
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    {user ? (
                        <li><Link to="/" onclick={handleLogout}>Logout</Link></li>
                    ):(
                        <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        </>
                    )}

                </ul>
            </nav>
            <Link to="/cart" className='crtLink'>
            <img src="images/shopping-bag.png" width="35px" height="35px"/>
            <p>{quantity}</p>
           </Link>
            <img src="images/menu.png" class="menu-icon" onclick="menutoggle()"/>
        </div>

        
    </div>
</div>
  )
}

export default Navbar