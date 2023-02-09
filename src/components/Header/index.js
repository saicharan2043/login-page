// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="nav-text-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logo-home"
        alt="website logo"
      />
      <div className="list-button-container">
        <ul className="un-order-list">
          <li className="list-text">Home</li>
          <li className="list-text">Products</li>
          <li className="list-text">Cart</li>
        </ul>
        <button className="logout-button">Logout</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-img"
      />
    </div>

    <div className="nav-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="home"
        className="nav-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="products"
        className="nav-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-img"
      />
    </div>
  </>
)

export default Header
