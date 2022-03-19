import React from 'react';
import "./Home.css"
import Product from './Product.jsx'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/que-es-ecommerce.jpeg" alt="" className="home_image" />

          <div className="home_row">
            <Product />
            <Product />
          </div>

          <div className="home_row">
          <Product />
          <Product />
          <Product />
          </div>

          <div className="home_row">
          <Product />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home