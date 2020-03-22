import React from 'react';
import fakeData from '../../fakeData'
import {useState} from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setcart] =useState([]);

    const handleAddProduct = (product) =>{
        const newcart = [...cart, product];
        setcart(newcart);
    }
    
    return (
        <div className = "shop-container">        
            <div className="product-container">
                {
                    product.map(product => <Product 
                        handleAddProduct = {handleAddProduct}
                        product ={product}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
          
       </div>
    );
};

export default Shop;