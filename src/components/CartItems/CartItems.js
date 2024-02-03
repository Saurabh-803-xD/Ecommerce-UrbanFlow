import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import removeicon from '../Assets/cart_cross_icon.png'
import toast from 'react-hot-toast'

const CartItems = () => {

    const{allproduct,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
  <div className='cartitems-format-main'>
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
  </div>
  <hr/>
 {allproduct.map((e)=>{
        if(cartItems[e.id]>0)
        {
        return <div>
    <div className='cartitems-format-main cartitems-format'>
    <img src={e.image} alt='' className='carticon-product-icon'/>
    <p>{e.name}</p>
    <p>${e.new_price}</p>
    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
    <p>${e.new_price*cartItems[e.id]}</p>
    <img src={removeicon} alt='' onClick={()=>{removeFromCart(e.id);{toast.success("Item removed from cart")}}} className='carticon-remove-icon'/>
    </div>
    <hr/>
  </div>
        }
        return null;
    })}
    <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>cart Totals</h1>
            <div>
                <div className='cartitems-total-items'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='promo-code'/>
                <button onClick={()=>{toast.error("invalid promocode")}}>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItems