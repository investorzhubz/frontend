import React, { useEffect, useState } from 'react';
import './clickbot.css';
import Navbar from '../navbar/Navbar';
import Alert from '../../components/alerts/Alert';
import Clock from '../clock/Clock';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import {useErrorContext} from '../../hooks/useErrorContext'
import Loading from '../loading/Loading';

function ClickBot() {
  const { user } = useAuthContext();
  const [error, setError] = useState();
  const [msg, setMsg] = useState();
  const [data, setData] = useState();
  const {dispatch}=useErrorContext()
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        .then(response => {
          setData(response.data);
          if(response.data.plan.planId===null){
            dispatch({type:'ERROR',payload:'You Have No Active Bot'})
            navigate('/dashboard')
          }
        })
        .catch(error => {
          setError(error.response.data);
        });
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [user.token]);

  return (
    <div>
      {
        data? <div className='bot'>
        <div style={{ position: 'relative', zIndex: '999' }}>
          <Navbar />
          {error && (
            <div>
              <Alert type='error'>
                <p>{error}</p>
              </Alert>
            </div>
          )}
          {msg && (
            <div>
              <Alert type='success'>
                <p>{msg}</p>
              </Alert>
            </div>
          )}
        </div>
        <div className='clickbot'>
          {data && <Clock startTime={new Date(data.botClickTime)} />}
        </div>
      </div>:<Loading/>
      }
    </div>
  );
}

export default ClickBot;
