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
            <Product
            id="123435688"
              title="Lorem dfhs0oi fbewoibfoiwe knfiouwerhfoiubwerj ejfbuoiwebfouiwe jiwefbuiowebfouwenb 
              fhewoihfowie fhewo nfioweh"
              price={11.96}
              rating={5}
              image="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/511YVf93vEL._AC_UY500_.jpg"
            />
            <Product
            id="123435688"
            title="Lorem dfhs0oi fbewoibfoiwe knfiouwerhfoiubwerj ejfbuoiwebfouiwe jiwefbuiowebfouwenb 
            fhewoihfowie fhewo nfioweh"
            price={11.96}
            rating={5}
            image="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/download.jpg"
            />
          </div>

          <div className="home_row">
          <Product 
          id="123435688"
          title="Lorem dfhs0oi fbewoibfoiwe knfiouwerhfoiubwerj ejfbuoiwebfouiwe jiwefbuiowebfouwenb 
          fhewoihfowie fhewo nfioweh"
          price={11.96}
          rating={5}
          image="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/511YVf93vEL._AC_UY500_.jpg"
          />
          <Product
          id="123435688"
          title="Lorem dfhs0oi fbewoibfoiwe knfiouwerhfoiubwerj ejfbuoiwebfouiwe jiwefbuiowebfouwenb 
          fhewoihfowie fhewo nfioweh"
          price={11.96}
          rating={5}
          image="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/511YVf93vEL._AC_UY500_.jpg"
          />
          <Product
          id="123435688"
          title="Lorem dfhs0oi fbewoibfoiwe knfiouwerhfoiubwerj ejfbuoiwebfouiwe jiwefbuiowebfouwenb 
          fhewoihfowie fhewo nfioweh"
          price={11.96}
          rating={5}
          image="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/511YVf93vEL._AC_UY500_.jpg"
          />
          </div>

          <div className="home_row">
          <Product
          id="123435688"
          title="Lorem dfhs0oi fbewoibfoiwe knfiouwerhfoiubwerj ejfbuoiwebfouiwe jiwefbuiowebfouwenb 
          fhewoihfowie fhewo nfioweh"
          price={11.96}
          rating={5}
          image="https://stackblitz.com/files/react-c6r9lw/github/EdoBufLit/react-c6r9lw/master/src/511YVf93vEL._AC_UY500_.jpg"
          />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home