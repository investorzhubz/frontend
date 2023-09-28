import './App.css';
import {  Routes, Route, Navigate, Switch } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import MarketPlace from './pages/marketPlace/MarketPlace';
import CreateProduct from './pages/createProduct/CreateProduct';
import Plan from './pages/Plan/Plan';
import Withdraw from './pages/withdraw/Withdraw'
import Deposit  from  './pages/deposit/Deposit'
import Plans from './components/plans/Plans';
import { useAuthContext } from './hooks/useAuthContext';
import { useEffect} from 'react';
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { useNavigate,useLocation, HashRouter } from 'react-router-dom';
import SendVerify from './components/verify/SendVerify';
import Verify from './components/verify/Verify';
import  ClickBot from './components/clickBot/ClickBot'
import DepositTable from './pages/depositTable/DepositTable';
import Referral from './pages/referral/Referral';
import WithdrawTable from './pages/withdrawTable/WithdrawTable';
import Contact from './pages/contact/Contact';
import AboutUS from './components/about us/AboutUS';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/reset/ResetPassword';
import NotFound from './pages/notFound/NotFound';
import ChoosePay from './components/choose pay/ChoosePay';
import Deposit1 from './pages/deposit1/Deposit1';
import Withdraw1 from './pages/withdraw1/Withdraw1';
import ChooseDepo from './components/choose pay/ChooseDepo';
import Plan1 from './components/plans/Plan1';
import About from './components/about us/About';
import HowItWorks from './components/about us/HowItWorks';
import WelcomeBonus from './pages/Welcome Bonus/WelcomeBonus';
import ComingSoon from './components/Coming Soon/ComingSoon';
import Profile from './pages/Profile/Profile';

function App() {
  const {user,dispatch}=useAuthContext()
  const navigate=useNavigate()
  const location=useLocation()
  const {pathname}=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  useEffect(()=>{
    if(user){
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/verifyjwt/`,{
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      }).catch(error=>{
        if(error.response.data.error==='token expired'){
          console.log('Test Error token')
          localStorage.removeItem('user')
          dispatch({type:'LOGOUT'})
          // history.push('/login')
          navigate('/login');
          
        }
        if(error.response.data.error==='Invalid Token'){
          console.log('Test Error token')
          localStorage.removeItem('user')
          dispatch({type:'LOGOUT'})
          // history.push('/login')
          navigate('/login');
          
        }
      })
    }
  },[])
  return (
    
    <div className="App">
   
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/choose" element={<ChoosePay />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/welcome-bonus" element={<WelcomeBonus />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/choose-depo" element={<ChooseDepo />} />
          <Route path="/signup" element={!user ? <Signup />:<Navigate to='/dashboard'/>} />
          <Route path="/login" element={!user ? <Login />: <Navigate to='/dashboard'/>} />
          <Route path='/dashboard' element={user ? <Dashboard/>:<Navigate to='/login'/> }/>
          <Route path='/market-place' element={<MarketPlace/>}/>
          <Route path='/create-product' element={user ? <CreateProduct/>:<Navigate to='/login'/>}/>
          <Route path='/about' element={<AboutUS/>}/>
          <Route path='/reward-program' element={<HowItWorks/>} />
          <Route path='/plans' element={<Plan/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-pass' element={<ResetPassword/>}/>
          <Route path='/deposit' element={user ? <Deposit/>:<Navigate to='/login'/>}/>
          <Route path='/deposit1' element={user ? <Deposit1/>:<Navigate to='/login'/>}/>
          <Route path='/withdraw' element={user ?<Withdraw/>:<Navigate to='/login'/>}/>
          <Route path='/withdraw1' element={user ?<Withdraw1/>:<Navigate to='/login'/>}/>
          <Route path='/buy-plan' element={user ? <Plans/>:<Navigate to='/login'/>}/>
          <Route path='/buy-plan1' element={user ? <Plan1/>:<Navigate to='/login'/>}/>
          <Route path='/verify'   element={user ? <SendVerify/>:<Navigate to='/login'/>}/>
          <Route path='/clickbot'   element={user ? <ClickBot/>:<Navigate to='/login'/>}/>
          <Route path='/verify-email'   element={user ? <Verify/>:<Navigate to='/login'/>}/>
          <Route path='/deposit-transaction'   element={user ? <DepositTable/>:<Navigate to='/login'/>}/>
          <Route path='/withdraw-transaction'   element={user ? <WithdrawTable/>:<Navigate to='/login'/>}/>
          <Route path='/referrals'   element={user ? <Referral/>:<Navigate to='/login'/>}/>
          <Route path='*'   element={<NotFound/>}/>

          
        </Routes>


    </div>
    
  );
}

export default App;