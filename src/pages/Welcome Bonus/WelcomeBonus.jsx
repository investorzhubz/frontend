import React, { useEffect, useState } from 'react';
import './welcomebonus.css';
import axios from 'axios';
import Alert from '../../components/alerts/Alert';
import Navbar from '../../components/navbar/Navbar';
import { useAuthContext } from '../../hooks/useAuthContext';
import Loading from '../../components/loading/Loading';
import { useNavigate } from 'react-router-dom';
function WelcomeBonus() {
  const [success, setSuccess] = useState();
  const { user } = useAuthContext();
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [btnState, setBtnState] = useState('Withdraw Welcome Bonus');
  const navigate=useNavigate()

  useEffect(() => {
    if(user){
      axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log('Error');
      });
    }else{
      navigate('/login')
    }
  }, []);

  const withdrawWelcomeBonus = () => {
    setBtnState('Processing...');
    setSuccess(null);
    setError(null);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/withdrawwelcomebonus`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        setBtnState('Withdraw Welcome Bonus');
        setSuccess(response.data.msg);
      })
      .catch((error) => {
        setBtnState('Withdraw Welcome Bonus');
        setError(error.response.data.error);
      });
  };

  return (
    <div className='withdrawalbonus'>
      {data ? (
        <>
          <Navbar />
          {error && (
            <div className='alert'>
              <Alert type='error'>
                <p>{error}</p>
              </Alert>
            </div>
          )}
          {success && (
            <div className='alert'>
              <Alert type='success'>
                <p>{success}</p>
              </Alert>
            </div>
          )}
          {data.welcomeBonus <= 0 ? (
            <p>You have Already Withdrawn Your Welcome Bonus</p>
          ) : (
            <>
              <h2>Welcome To Investors Hub</h2>
              <p>Withdraw your Welcome Bonus of 200 XAF</p>
              <div className='welcombonusbtn'>
                <button onClick={withdrawWelcomeBonus}>{btnState}</button>
              </div>
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default WelcomeBonus;
