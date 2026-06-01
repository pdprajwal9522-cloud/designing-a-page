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
import pay from './assets/payment.jpg'
import dash from './assets/dash.jpg'
import fd from './assets/fd.jpg'
import feed from './assets/feedback.jpg'
import msg from './assets/msg.jpg'
import ord from './assets/ord.jpg'
import paym from './assets/pay.jpg'
import cust from './assets/cust.jpg'
function App() {

  return (
    <>
      <div className="container">
        <div className="leftsidebar">
  <div className="foodicon">
    <img src={food} alt="food-icon"/>
  </div>
  <div className="left-top">
  <div className="b"><span><img src ={dash}/></span>Dashboard</div>
<div className="b"><span><img src ={fd}/></span>Foodorder</div>
<div className="b"><span><img src ={feed}/></span>Feedback</div>
<div className="b"><span><img src ={msg}/></span>Message</div>
<div className="b"><span><img src ={ord}/></span>order History</div>
<div className="b"><span><img src ={paym}/></span>Payment detail</div>
<div className="b"><span><img src ={cust}/></span>customization</div>
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
<div className="text-2"><h4>Vegetable Burger</h4>
<p><span>$25</span> &nbsp; <sub>$26.30</sub></p>
<button>Wishlist</button>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<button className='order-btn'>Order Now</button>
</div>
</div>
                </div>

                  <div className="top-2">
<div className="b-1"><img src={meat}/>
<div className="text-2"><h4>Meat Burger</h4>
<p><span>$28</span> &nbsp; <sub>$28.30</sub></p>
<button>Wishlist</button>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<button className='order-btn'>Order Now</button>
</div>
</div>

                </div>

                  <div className="top-3">
<div className="b-1"><img src={cheese}/>
<div className="text-2"><h4>Cheese Burger</h4>
<p><span>$32</span> &nbsp; <sub>$36.30</sub></p>
<button>Wishlist</button>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<button className='order-btn'>Order Now</button>
</div>
</div>

                </div>


              </div>
              <div className="down">
                <div className="top-1">
<div className="b-1"><img src={veg_2}/>
<div className="text-2"><h4>Vegetable Burger</h4>
<p><span>$30</span> &nbsp; <sub>$32.30</sub></p>
<button>Wishlist</button>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<button className='order-btn'>Order Now</button>
</div>
</div>

                </div>

                <div className="top-1">
<div className="b-1"><img src={been}/>
<div className="text-2"><h4>Been Burger</h4>
<p><span>$15</span> &nbsp; <sub>$16.30</sub></p>
<button>Wishlist</button>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<button className='order-btn'>Order Now</button>
</div>
</div>

                </div>

                <div className="top-1">
<div className="b-1"><img src={wild}/>
<div className="text-2"><h4>Wild Salmon Burger</h4>
<p><span>$40</span> &nbsp; <sub>$46.30</sub></p>
<button>Wishlist</button>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<button className='order-btn'>Order Now</button>
</div>
</div>

                </div>

              </div>
              
              </div>
            </div>
            <div className="main-rightbar">
              <a href ="#">Invoice</a>
              <div className="rightup">
                <div className="a1"><span><img src={veg}/></span>
                
                <div className="text-1"><span>Vegetable Burger</span><p> $25</p>
                </div>
                </div>

                <div className="a1"><span><img src={veg}/></span>
                <div className="text-1"><span>Meat Burger</span><p> $25</p>
                </div>
                </div>

                <div className="a1"><span><img src={veg}/></span>
                <div className="text-1"><span>Cheese Burger</span><p> $25</p>
                </div>
                
                </div>

              </div>
              <div className="rightdown">

<div className="all">

<div className="payment"><h3>Payment Summary</h3>
<br></br>
<span>Sub Total  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; </span> <span>$85</span>
<br></br>
<span> Tax &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  </span>  <span>-$6</span>
</div>
<div className="total-pay"><h3>Total Payment   &nbsp;  $79</h3>
<span>Payment Method </span>
<div className="photo">
  <img src={pay}/>
</div>
</div>

</div>
<div className="last">
  <button>Place An Order Now</button>
</div>
</div>
</div>
</div>
</div>

</div>

    </>
  )
}

export default App
