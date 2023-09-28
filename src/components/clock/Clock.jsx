import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from 'axios';
import Alert from '../alerts/Alert';

const Clock = ({ startTime }) => {
  const [currentTime, setCurrentTime] = useState(new Date()); // Initialize currentTime with the current time
  const [timerStopped, setTimerStopped] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState();
  const { user } = useAuthContext();
  const [show, setShow] = useState(false);
  const [fHours,setFHours]=useState(`0o0`)
  const [fMinutes,setFMinutes]=useState(`0o0`)
  const [fSeconds,setFSeconds]=useState(`0o0`)
   const [sHours,setSHours]=useState(`0o0`)
  const [sMinutes,setSMinutes]=useState(`0o0`)
  const [sSeconds,setSSeconds]=useState(`0o0`)

  const handlePlan = () => {
    setMsg(false);
    setError(false);
    setShow(true);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/reward/`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then(response => {
      setMsg(response.data.msg);
    }).catch(error => {
      setError(true);
      setError(error.response.data.error);
    });
  }

  const handleActivate = () => {
    setMsg(false);
    setError(false);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/activate`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then(response => {
      setShow(false);
      setTimerStopped(false);
      setMsg(response.data.msg);
    }).catch(error => {
      setError(true);
      setError(error.response.data.error);
    });
  }
  useEffect(()=>{
    formatTime(currentTime / 1000)

  },[currentTime])

  useEffect(() => {
  const endTime = new Date(startTime);
  endTime.setHours(endTime.getHours() + 24);

  const updateCurrentTime = () => {
    const now = new Date();

    if (now < endTime) {
      setCurrentTime(endTime - now);
    } else {
      clearInterval(timerId);
      setTimerStopped(true);
    }
  };

  // Update the current time every second
  const timerId = setInterval(updateCurrentTime, 1000);

  // Initial update
  updateCurrentTime();

  return () => {
    clearInterval(timerId);
  };
}, [startTime]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
  
    // Extract the first and second digits of the hours
    const firstHourDigit = Math.floor(hours / 10);
    const secondHourDigit = hours % 10;
    setFHours(firstHourDigit)
    setSHours(secondHourDigit)
  
    // Extract the first and second digits of the minutes
    const firstMinuteDigit = Math.floor(minutes / 10);
    const secondMinuteDigit = minutes % 10;
   setFMinutes(firstMinuteDigit)
   setSMinutes(secondMinuteDigit)
    // Extract the first and second digits of the seconds
    const firstSecondDigit = Math.floor(seconds / 10);
    const secondSecondDigit = seconds % 10;
    setFSeconds(firstSecondDigit)
    setSSeconds(secondSecondDigit)
  
    return `${firstHourDigit}${secondHourDigit}:${firstMinuteDigit}${secondMinuteDigit}:${firstSecondDigit}${secondSecondDigit}`;
  };
  
  

  return (
    <div className="clockworks">
      {error && (
        <div>
          <Alert type="error">
            <p>{error}</p>
          </Alert>
        </div>
      )}
      {msg && (
        <div>
          <Alert type="success">
            <p>{msg}</p>
          </Alert>
        </div>
      )}
      <div className="digital-clock">
        {timerStopped ? (
          <div>
            <h4>Sales Processed Successfully.</h4>
            {!show && <button onClick={handlePlan}>Claim Reward</button>}
            <div>
              {show && (
                <button onClick={handleActivate}>Activate Bot</button>
              )}
            </div>
          </div>
        ) : (
          <div>
            {/* <h4 style={{ color: 'pink' }}>Bot Processing Sales...</h4> */}
            <div className="countdownclock">
            <p>Time Remaining</p>
            <div class="clock">
  <div class="hours">
    <div class="first">
      <div class="tnumber">{fHours}</div>
    </div>
    <div class="second">
      <div class="tnumber">{sHours}</div>
    </div>
  </div>
  <div class="tick">:</div>
  <div class="minutes">
    <div class="first">
      <div class="tnumber">{fMinutes}</div>
    </div>
    <div class="second">
      <div class="tnumber">{sMinutes}</div>
    </div>
  </div>
  <div class="tick">:</div>
  <div class="seconds">
    <div class="first">
      <div class="tnumber">{fSeconds}</div>
    </div>
    <div class="second infinite">
      <div class="tnumber">{sSeconds}</div>
    </div>
  </div>
</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clock;
