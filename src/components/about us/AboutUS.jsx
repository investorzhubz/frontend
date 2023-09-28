import React from 'react'
import { UilShareAlt, UilRobot, UilDashboard, UilBox, UilBolt, UilMegaphone, UilMobileAndroid, UilMobile } from "@iconscout/react-unicons";
import about from '../../resources/images/mockup.png'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { FaCube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaAd } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io'
import { FaLock } from 'react-icons/fa';
import './about.css'


function AboutUS({match}) {
    const id1 = match?.params?.id;
  return (
    <div className='overallaboutus'>
      <Navbar />
     
      <div className='aboutus'>
      
      <div className="aboutus section-margin">
        <div className="about-img">
            <img src={about} alt="about"/>

        </div>
        <div className="about-text">
        <div className="about section-margin">
        <div className="about-text">
            <h1>Welcome to Investors Hub</h1>
            <p>Investors Hub is your one-stop platform for earning money online through various tasks and activities. Whether you're looking to boost your income or explore new ways to make money from the comfort of your home, we have you covered. Here's what you can do on Investors Hub:</p>



        </div>

      </div>

        </div>

      </div>
      <div className="tools">
       <div className="tool-section">
          
          <UilShareAlt size='30'/>
             <h4>Affiliate Marketing</h4>
             <p>Join our affiliate marketing programs and earn commissions by promoting products and services from our trusted partners. The more you promote, the more you earn!</p>
         </div>
          <div className="tool-section">
              <FaYoutube size='30'/>
              <h4>Watch YouTube Videos</h4>
              <p>Love watching YouTube videos? Now you can turn your viewing time into earnings. Explore a wide range of video categories, from educational content to entertainment, and get paid for your views.</p>
          </div>
          <div className="tool-section">
            
              <FaTiktok size='30'/>
              <h4 >TikTok Videos</h4>
              
              <p>Get ready to scroll through the latest and greatest TikTok videos. Laugh, learn, and get paid while enjoying the most viral content on the internet.</p>
          </div>
          <div className="tool-section">
            
            <FaAd size='30'/>
            <h4 >Watch Ads</h4>
            
            <p> Earn money by simply watching advertisements. It's as easy as it sounds. Watch ads, earn rewards – it's that straightforward!</p>
        </div>
        <div className="tool-section">
            
            <FaLink size='30'/>
            <h4 >Refer Friends</h4>
            
            <p>Boost your earnings by referring friends and family to Investors Hub. Earn extra bonuses for every person you bring to our platform.</p>
        </div>
        <div className="tool-section">
            
            <FaFlag size='30'/>
            <h4 >Daily Challenges</h4>
            
            <p>Participate in daily challenges and tasks to unlock even more earning opportunities. We're constantly adding new ways for you to make money.</p>
        </div>
        <div className="tool-section">
            
            <FaCreditCard size='30'/>
            <h4 >Payment Options</h4>
            
            <p>Choose from a variety of payment options, including MTN MOMO and Orange Money. We make it easy for you to access your hard-earned cash.</p>
        </div>
        <div className="tool-section">
            
            <IoIosPeople size='30'/>
            <h4 >Community Support</h4>
            
            <p>Connect with fellow users in our community forums. Share tips, tricks, and success stories to maximize your earnings.</p>
        </div>
        <div className="tool-section">
            
            <FaLock size='30'/>
            <h4 >Security and Trust</h4>
            
            <p>Rest assured that your privacy and security are our top priorities. We use the latest encryption and security measures to protect your data and earnings.</p>
        </div>
        
       </div>
       
        
        <div className="about-bttext section-margin">
        <p>Investors Hub is all about making earning money online accessible and enjoyable. So why wait? Join our platform today and start turning your spare time into extra cash. It's time to invest in yourself with Investors Hub!</p>
    
            



       

        </div>
        
     
    </div>
    <Footer />
    </div>
  )
}

export default AboutUS
