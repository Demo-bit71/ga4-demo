
import { useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 59, emoji: '🎧' },
  { id: 2, name: 'Smart Watch', price: 89, emoji: '⌚' },
  { id: 3, name: 'Mechanical Keyboard', price: 75, emoji: '⌨️' },
]

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((current) => [...current, product])
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="store">
      <header className="header">
        <a href="#home" className="logo">ShopTrack.</a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#cart" className="cart-button">
          Cart ({cart.length})
        </a>
      </header>

      <section className="hero" id="home">
        <span>WELCOME TO SHOPTRACK</span>
        <h1>Find your next favorite thing.</h1>
        <p>Quality products. Simple shopping.</p>
        <a href="#products" className="cta">
          Explore Products →
        </a>
      </section>

      <section className="products" id="products">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Featured Products</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <div className="product-image">
                {product.emoji}
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <h2>Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <p key={index}>
                {item.name} — ${item.price}
              </p>
            ))}
            <h3>Total: ${cartTotal}</h3>
          </>
        )}
      </section>

      <footer id="contact">
        <h3>ShopTrack.</h3>
        <p>Questions? hello@shoptrack.demo</p>
        <p>© 2026 ShopTrack. Demo website.</p>
      </footer>
    </div>
  )
}

export default App
