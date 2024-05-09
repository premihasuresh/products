import './App.css';
// import {Navigation} from './nav.js'//Navigation bar
import { useState } from 'react'; //used for Hooks

const products=[ //Array of Objects for products
  {
    img:"https://m.media-amazon.com/images/I/81JWivr8ikL._AC_UL480_FMwebp_QL65_.jpg", 
    description:"Fancy Product",
    price:"$40.00-$80.00",
    button:"View Options"
    },
    { 
      sale:"sale",
      img:"https://m.media-amazon.com/images/I/916drJxNSmL._SY625_.jpg",
    description:"Special Item",
    rating:"⭐⭐⭐⭐⭐",
    price1:"$20.00",
    price:" $18.00 ",
    button:"Add To Cart"
    },
    {
      sale:"sale",
    img:"https://m.media-amazon.com/images/I/61LlQRdDZ2L._AC_UY327_FMwebp_QL65_.jpg",
    description:"Sale Item",
    price1:"$50.00",
    price:" $25.00",
  button:"Add to Cart"},
    {
      img:"https://m.media-amazon.com/images/I/71gAx4iNfnL._AC_UL480_FMwebp_QL65_.jpg",
    description:"Popular Item",
    rating:"⭐⭐⭐⭐⭐",
    price:"$40.00 ",
    button:"Add to Cart"
    },
    {
      sale:"sale",
      img:"https://m.media-amazon.com/images/I/81yobRRV8nL._AC_UY327_FMwebp_QL65_.jpg",
    description:"Sale Item",
    price1:"$50.00",
    price:"$25.00 ",
  button:"Add To Cart"},
    {
      img:"https://m.media-amazon.com/images/I/71WxCLLuqYL._AC_UL480_FMwebp_QL65_.jpg",
    description:"Fancy Product",
    price:"$120.00 - $280.00 ",
    button:"View Options"
    },
    {
      sale:"sale",
      img:"https://m.media-amazon.com/images/I/71vJLCZBeoL._AC_UY327_FMwebp_QL65_.jpg",
    description:"Special Item",
    rating:"⭐⭐⭐⭐⭐",
    price1:"$20.00",
    price:" $18.00 ",
  button:"Add to Cart"},
    {img:"https://m.media-amazon.com/images/I/610ULYlLFDL._AC_UL480_FMwebp_QL65_.jpg",
    description:"Popular Item",
    rating:"⭐⭐⭐⭐⭐",
    price:" $40.00 ",
  button:"Add to Cart"}
]


function App() {
  const [cart,setCart]=useState([])//Hooks
  
    const addToCart = (product) => { 
      const isProductInCart = cart.some((item) => item === product);//product validation using .some array
  
      if (isProductInCart) {
        // If the product is in the cart, remove it
        const updatedCart = cart.filter((item) => item !== product);//Filter condition
        setCart(updatedCart);
      } else {
        // If the product is not in the cart, add it
        const updatedCart = [...cart, product];
        setCart(updatedCart);
      }
    };
 
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  };
  return (
    <div className="App">
      <div className="container">
        <div>
      <span className="sheading">⬅Overview Page</span>
      <img className="image" src="data:imageaq1Q CFg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="/>
      <button className="Free">⬇ Free Download</button>
      <hr class="divider"/>
    </div>
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><a class="dropdown-item" href="#">New Arrival</a></li>
          </ul>
      </li>
    </ul>
   </div>
    {/* <form class="d-flex"onSubmit={handleFormSubmit}>
      
      <button class="btn btn-outline-dark" type="submit">
        <i class="fa-solid fa-cart-shopping">
          </i>  Cart{''} <i class="fa-solid fa-0" style={{color: "#000000;"}}></i></button>
    </form> */}
<form className="d-flex" onSubmit={(e) => e.preventDefault()}> 
          <button className="btn btn-outline-dark">
            <i className="fa-solid fa-cart-shopping"></i>  Cart{' '}
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>} 
                      {/* The above lines of code is for the CART functionality to display select /removed cart item counts */}
          </button>
        </form>
</div>
</nav>
 

      
 <div className="heading">

    <h1 className="card-title">Shop in style</h1>
    <h4 className="card-text">With this shop homepage template</h4>
  </div>

  <div className="productlist">
  {products.map((prod)=>(
 <Card1 allproducts={prod} addToCart={addToCart} cart={cart}/>

) )}    </div>
</div> 

<div class="footer">
   <h6> Copyright © Your Website 2023</h6>
  </div>

</div>
  )}

function Card1({allproducts,addToCart, cart }){
  const isProductInCart = cart.some((item) => item === allproducts);
  
  return(<div className="card" >
<span className="sale"><button className="sales">{allproducts.sale}</button></span>
  <img src={allproducts.img} class="card-img-top" alt="..."/>
  <div>
  <div class="card-body">
    
    <h5 class="card-title">{allproducts.description}</h5>
    <p>{allproducts.rating}</p>
    <span ><del>{allproducts.price1}</del></span>
    <span class="card-text">{allproducts.price}</span>
   <p><button className="btn btn-light" onClick={()=>addToCart(allproducts)}>
   {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
   </button></p>
   
 
  </div>
</div>
</div>
  )
}


export default App;