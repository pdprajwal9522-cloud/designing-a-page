import './App.css'
import order from './assets/order.jpg'
import food from './assets/foody.jpg'
import filter from './assets/filter.jpg'
import notify from './assets/notify.jpg'
import donut from './assets/donut.jpg'
import burg from './assets/burger-1.jpg'
import ice from './assets/ice.jpg'
import potato from './assets/potato.jpg'
import fuchka from './assets/fuchka.jpg'
import pizza from './assets/pizza.jpg'
import hotdog from './assets/hotdog.jpg'
import chicken from './assets/chicken.jpg'
import veg from './assets/veg-burger.jpg'
import meat from './assets/meat-burger.jpg'
import cheese from './assets/cheese-burger.jpg'
import veg_2 from './assets/veg-2.jpg'
import been from './assets/Been-Burger.jpg'
import wild from './assets/wild-salmon -burger.jpg'
function App() {

  return (
    <>
      <div className="container">
        <div className="leftsidebar">
  <div className="foodicon">
    <img src={food} alt="food-icon"/>
  </div>
  <div className="left-top">
  <div className="b">Dashboard</div>
<div className="b">Foodorder</div>
<div className="b">Feedback</div>
<div className="b">Message</div>
<div className="b">order History</div>
<div className="b">Payment detail</div>
<div className="b">customization</div>
</div>
<div className="left-down">
<div className='foodimage'>
  <img src={order} alt ='ordering food'/>
</div>
<div className="food-text">
<h3>How to order food?</h3>
<br></br>
<h5>ordering food from our web app is a<br></br>seamless and delightful experiance <br></br>designed to satisfy you effortlessly....</h5>
</div>
</div>
        </div>
        <div className="main-layout">
          <div className="top-header">
            <div className="search">
<input type="text" placeholder='search food'/>
<button>Filter<span><img src = {filter}/></span></button>
            </div>
            <div className="profile">
<div className="notification">
<img src={notify} alt="notification-icon"/>
</div>
<div className="singnin">
  <select>
    <option>SIGN IN</option>
    <option>SIGN OUT</option>
  </select>

</div>
            </div>
          </div>
          <div className="main-body">
            <div className="main-left">
              <div className="explore-top">
                <a href="#">Explore Categories</a>
                <div className="above">
                  <div className="E"><img src ={donut}/><span>Donuts</span></div>
                   <div className="E"><img src ={burg}/><span>Burger</span></div>
                    <div className="E"><img src ={ice}/><span>Ice</span></div>
                     <div className="E"><img src ={potato}/><span>Potato</span></div>
                      <div className="E"><img src ={potato}/><span>Potato</span></div>
                </div>
                <div className="bottom">
 <div className="E"><img src ={fuchka}/><span>Fuchka</span></div>
                   <div className="E"><img src ={pizza}/><span>Pizza</span></div>
                    <div className="E"><img src ={hotdog}/><span>Hot dog</span></div>
                     <div className="E"><img src ={chicken}/><span>chicken</span></div>
                      <div className="E"><img src ={chicken}/><span>chicken</span></div>

                </div>
              </div>
              <div className="popular-down">
                <a href="#"> Popular  Recent</a>
                <br></br>
<div className="up">
                <div className="top-1">
<div className="b-1"><img src={veg}/>
<p>Vegetable Burger<b>$$25</b> <subcript>$28.30</subcript> </p>
<button>Wishlist</button>
<button>Order Now</button>
</div>

                </div>

                  <div className="top-2">
<div className="b-1"><img src={meat}/>
<p>Vegetable Burger<b>$$25</b> <subcript>$28.30</subcript> </p>
<button>Wishlist</button>
<button>Order Now</button>
</div>

                </div>

                  <div className="top-3">
<div className="b-1"><img src={cheese}/>
<p>Vegetable Burger<b>$$25</b> <subcript>$28.30</subcript> </p>
<button>Wishlist</button>
<button>Order Now</button>
</div>

                </div>


              </div>
              <div className="down">
                <div className="top-1">
<div className="b-1"><img src={veg_2}/>
<p>Vegetable Burger<b>$$25</b> <subcript>$28.30</subcript> </p>
<button>Wishlist</button>
<button>Order Now</button>
</div>

                </div>

                <div className="top-1">
<div className="b-1"><img src={been}/>
<p>Vegetable Burger<b>$$25</b> <subcript>$28.30</subcript> </p>
<button>Wishlist</button>
<button>Order Now</button>
</div>

                </div>

                <div className="top-1">
<div className="b-1"><img src={wild}/>
<p>Vegetable Burger<b>$$25</b> <subcript>$28.30</subcript> </p>
<button>Wishlist</button>
<button>Order Now</button>
</div>

                </div>

              </div>
              
              </div>
            </div>
            <div className="main-rightbar"></div>
          </div>
        </div>




        
      </div>

    </>
  )
}

export default App
