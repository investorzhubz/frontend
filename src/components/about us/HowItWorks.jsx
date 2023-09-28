import React from 'react'
import Navbar from '../navbar/Navbar'
import './about.css'
import Footer from '../footer/Footer'
import Feature from '../feature/Feature'
function HowItWorks() {
  return (
    <div>
        <div className="howitworks">
        <Navbar />
        <div className='how'>
       <div>
       <h1>Investors Hub Rewards Program</h1>
        <p>Are you ready to supercharge your earnings on Investors Hub? Our Rewards Program is designed to make your online income grow faster and more rewarding than ever before. Here's how it works</p>
       </div>
        </div>
        <div className='reward'>
        <div className='gpt3__whatgpt3-container'>
        <Feature title="Tiered Rewards" text="Earn rewards based on your activity level. The more tasks you complete, the higher your tier, and the more you earn. We have tiers for everyone, from beginners to seasoned earners"/>
        <Feature title="Daily Streaks" text="Consistency pays off! Keep up your daily tasks, and you'll unlock streak bonuses. The longer your streak, the bigger the bonuses.."/>
        <Feature title="Exclusive Offers" text="Access exclusive offers and promotions available only to Investors Hub members. Get special deals on products and services from our partners."/>
        <Feature title="Spin the Wheel" text="Try your luck with our Spin the Wheel game. Spin for a chance to win cash prizes, gift cards, and more."/>
        <Feature title="Monthly Contests" text="Participate in our monthly contests to compete with other members and win big. Whether it's a referral contest or a video-watching challenge, there's always a chance to earn extra rewards."/>
        <Feature title="Loyalty Bonuses" text="We appreciate your dedication. Get loyalty bonuses for sticking with Investors Hub. The longer you're with us, the more you'll earn."/>
        <Feature title="Redemption Options" text="Redeem your rewards in a way that suits you best. Whether you want cash in your PayPal account, gift cards to your favorite stores, or even cryptocurrency, we've got you covered."/>
        <Feature title="Quick Payouts" text="We understand that you want access to your earnings quickly. That's why we offer fast and reliable payout options, so you can enjoy your hard-earned money without delays"/>
        <Feature title="Track Your Progress" text="Keep an eye on your earnings and rewards progress with our easy-to-use dashboard. See how close you are to reaching the next tier or unlocking your next streak bonus."/>
        <Feature title="Community Competitions" text="Join forces with fellow Investors Hub members in team competitions. Work together to achieve goals and earn collective rewards."/>
      
        

        </div>
        </div>
        </div>
        <div className='anoutimg'>
       <Footer />
       </div>


    </div>
  )
}

export default HowItWorks