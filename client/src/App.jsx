import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Products from './pages/allProducts/Products';
import Top from './components/top/Top' 
import Login from './pages/login/Login' 
import Register from './pages/register/Register' 
import Product from './pages/singleProduct/Product'
import Cart from './pages/cart/Cart'

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // const user = false;
   
  return (
    <Router>
      <Top/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products">
          <Products/> 
        </Route> 
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart /> 
        </Route> 
        {/* <Route path="/success"> 
          <Success />
        </Route> */}
        <Route path="/login">
          <Login/>
        </Route>
        
        <Route path="/register">
         <Register />
        </Route>
      </Switch>  
    </Router>
  );
}; 

export default App;