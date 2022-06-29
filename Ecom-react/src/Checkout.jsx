import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className="checkout">
        <div classNAme = "checkout_left">
            <img className = "checkout_ad" src ="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"/>
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          
        </div>
        </div>

        <div classNAme = "checkout_right">
          <h2>The Subtota will go here</h2>
        </div>
    </div>
  )
}

export default Checkout