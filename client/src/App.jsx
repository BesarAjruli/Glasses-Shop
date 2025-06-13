import './App.css'
import './AppStyleMobile.css'
import Slideshow from './Slideshow'
import Icon from '@mdi/react';
import { mdiInstagram, mdiFacebook, mdiMagnify, mdiMenu } from '@mdi/js';

function App() {

  return (
    <>
      <header>
        <div>
          <h1>Porositonline.gf</h1>
          <Icon path={mdiMenu} size={1.7} className='menuIcon'></Icon>
        </div>
        <div>
          <input type="search"/>
          <Icon path={mdiMagnify} size={1.3} className='searchIcon'/>
        </div>
        <nav>
          <a href="">Home</a>
          <a href="">All Products</a>
          <a href="">Best Seller</a>
          <a href="">About</a>
        </nav>
      </header>
      <main>
        <div className='artworkCont'>
          <div className='artworkCont2'>
            <div></div>
            <h1>Sunny Days, Stylish Ways</h1>
            <p>Explore our vast collection of beautifully crafted sunglasses and glasses that blend style with affordability.</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className='deals'>
          <div className='dealTxt'>
            <span className='dealHeader'>Hot Deals</span>
            <span>Limited time</span>
            <span>Don't miss out on our special promotions and discounts. Grab your favorite pairs before they're gone!</span>
            <button>View Offers</button>
          </div>
          <div className='dealImgContainer'><img src="https://images.pexels.com/photos/12693047/pexels-photo-12693047.jpeg" alt="artwork" /></div>
        </div>

        <div className='topPicks'>
          <span className='tpHeader'>Top Picks</span>
          <hr />
          <Slideshow/>
        </div>

        <footer>
          <div className='footerCont'>
            <div className='mainFooter'>
              <span className='name'>Porositonline.gf</span>
              <span className='footerTxt'>Your Eyewear Destination</span>
            </div>
            <div className='listHolder'>
              <ul>
                <li>+383 456 789 112</li>
                <li>info@porositonline.gf</li>
                <br /><br />
                <div>
                  <Icon path={mdiInstagram} size={1}></Icon>
                  <Icon path={mdiFacebook} size={1}></Icon>
                </div>
              </ul>
              <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Accessibility Statement</a></li>
              <li><a href="">Shipping Policy</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Refound Policy</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
