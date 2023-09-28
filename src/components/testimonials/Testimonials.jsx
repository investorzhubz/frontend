import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './testimonials.css'
import ella from '../../resources/images/testimonials/selar-testimonial-ella.png'
import paul from '../../resources/images/testimonials/selar-testimonial-paul.png'
import lora from '../../resources/images/testimonials/selar-testimonial-naijasalesmaker.png'
import john from '../../resources/images/testimonials/selar-testimonial-steve-harris.png' 
import jessica from '../../resources/images/testimonials/selar-testimonial-triciabiz.png'
function Testimonials() {
  return (
    <div className='testi'>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={ella} />
          <div className="myCarousel">
            <h3>Sharah T</h3>
            
            <p>
            I was skeptical at first, but this affiliate bot has changed the game for me! I used to spend hours trying to sell products online, but now I just sit back and let the bot do the work. Not only does it sell products on my behalf, but it also sends me money straight to my account. It's like having a personal sales assistant that works 24/7. Highly recommended!
            </p>
          </div>
        </div>

        <div>
          <img src={paul} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <p>
            "I can't believe how much time and effort this affiliate bot has saved me. As a busy professional, I don't have the luxury of spending hours promoting products online. But with this bot, I just set it up once and it does all the hard work for me. Plus, the extra money that comes in from the sales is a fantastic bonus. I wish I had discovered this sooner!"
            </p>
          </div>
        </div>

        <div>
          <img src={lora} />
          <div className="myCarousel">
            <h3>Lora Babi</h3>
            <h4>Designer</h4>
            <p>
            "I've tried other affiliate programs before, but nothing comes close to this bot. It's simple to use, and the results are phenomenal. The bot sells products on my behalf and sends me money straight to my account. It's like having a passive income stream that keeps growing. I highly recommend this to anyone looking to make money online without the hassle of selling products themselves." - Lisa M.
            </p>
          </div>
        </div>
        <div>
          <img src={john}/>
          <div className="myCarousel">
            <h3>John L</h3>
    
            <p>
            I was hesitant to try another affiliate program, but this bot exceeded my expectations. It's incredibly user-friendly, and the results speak for themselves. I've seen a significant increase in my earnings since I started using this bot. It takes care of everything, from selling products to processing payments. I couldn't be happier with the results!
            </p>
          </div>
        </div>
        <div>
          <img src={jessica} />
          <div className="myCarousel">
            <h3>Jessica H</h3>
            <p>
            I've been looking for a way to make money online without spending hours promoting products, and this bot has been a game-changer for me. It's so easy to set up, and it does all the work for me. I love how it sells products on my behalf and sends me money directly to my account. It's like having a virtual sales team that works tirelessly for me. I highly recommend this bot to anyone looking to make passive income online
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonials
