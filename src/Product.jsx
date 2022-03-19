import React from 'react';
import "./Product.css"

function Product() {
  
  return (
    <div>
      <div  className="product">
        <div className="product_info">
          <p>Title</p>
          <p className="product_price">$30</p>
          <div className="product_rating">⭐⭐</div>
        </div>

        <img src="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/511YVf93vEL._AC_UY500_.jpg" alt="" />
        <button>Add To Basket</button>
      </div>
    </div>
  )

}

export default Product