import { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  return(
    <><div id="header">
      <div id="menu">
        <button id="menu-icon" onClick={() => setMenuAberto(!menuAberto)}><FaBars /></button>
        {/* <nav className={menuAberto ? 'menu aberto' : 'menu'}>
      <li><a href="/products">Products</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </nav> */}
      </div>
      <div id="logo">
        <img id="logo-img-header" src="/src/assets/DUNAR LOGO (nbg).png" alt="LOGO DUNAR" />
      </div>
      <nav>
        <button id="cart-icon"><TiShoppingCart /></button>
      </nav>
    </div>
    <div className="carrossel">
      <div className="trilha">
          
      </div>
    </div>
    </>
  )
}
export default App