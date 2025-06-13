import './App.css'
import Slideshow from './Slideshow'

function App() {

  return (
    <>
      <header>
        <img src="" alt="logo" />
        
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
          <span>Top Pics</span>
          <hr />
          <Slideshow/>
        </div>
      </main>
    </>
  )
}

export default App
