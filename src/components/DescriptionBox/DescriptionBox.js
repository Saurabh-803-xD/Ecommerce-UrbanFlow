import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
    <div className='descriptionbox-navigator'>
    <div className='descriptionbox-nav-box'>
    Description
    </div>
    <div className='descriptionbox-nav-box fade'>
    Reviews (122)
    </div>
    </div>
    <div className='descriptionbox-description'>
        <p>E-commerce applications provide users with a seamless and convenient shopping experience. Customers can browse through a wide range of products, 
        compare prices, read reviews, and make purchases with just a few taps on their smartphones or clicks on their computers.</p>
        <p>An ecommerce business uses digital methods to sell products and services to customers. Ecommerce businesses can be online-only or have a physical presence as well. Selling to customers online
         typically requires a website or digital storefront, plus a way to process payments digitally and ship orders to customers.</p>
    </div>
    </div>
  )
}

export default DescriptionBox