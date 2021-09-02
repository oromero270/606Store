import React , {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Navbar, Cart, Checkout} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App =() =>{
  const [products, setProducts] = useState([]);
  const [cart, setCart] =useState ({});
//This code is what fetches the products from the commerece API and I am allowed to destruicture the data in my app. 
  const fetchProducts= async () =>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }
//This code is what fetches the cart from the API
  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve());
  }
//This function handles the addition to the carts 
  const handleAddToCart = async ( productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }
  const handleUpdateCartQty= async (productId, quantity) =>{
    const {cart}= await commerce.cart.update(productId,{quantity});
    setCart(cart)
  } 
  const handleRemoveFromCart = async(productId) =>{
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }
  const handleEmptyCart = async() =>{
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }
//These are the functions that are fetched on the laod screen
  useEffect(() =>{
    fetchProducts();
    fetchCart();
  },[]);
  console.log(cart);
  return(
    <Router>

      <div>
        <Navbar totalItems = {cart.total_items}/>
        <Switch>
          <Route exact path ='/'>
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path ='/cart'>
            <Cart 
            cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path ='/checkout'>
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;