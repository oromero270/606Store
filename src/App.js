import React , {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Navbar, Cart} from './components';



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
    const cart = await commerce.cart.retrieve();
    setCart(cart)
  }
//This function handles the addition to the carts 
  const handleAddToCart = async (productId,quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }
//These are the functions that are fetched on the laod screen
  useEffect(() =>{
    fetchProducts();
    fetchCart();
  },[]);
  console.log(products);
  return(
    <div>
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart}/>

    </div>
  )
}
export default App;