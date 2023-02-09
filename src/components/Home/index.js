// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="background-home">
    <Header />
    <div className="lost-container">
      <div className="heading-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="boy-img-one"
          alt="clothes that get you noticed"
        />
        <p className="discreption">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So,celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="boy-img-two"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
