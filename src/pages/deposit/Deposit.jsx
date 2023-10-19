import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './deposit.css';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/alerts/Alert';

function Deposit() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(500);
  const [number, setNumber] = useState('');
  const [btnState, setBtnState] = useState('Deposit');

  const obj = {
    amount: Number(amount),
    number: number,
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    setBtnState('Processing...');
    setMsg('');
    setError(false);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/mesombdeposit`, obj, {
        headers: {
          "Content-Type": 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        const res = response.data;
        setMsg(response.data.msg);
        setBtnState('Deposit');
      })
      .catch((error) => {
        if (error.response.data.error === 'email not verified') {
          navigate('/verify');
        }
        setError(error.response.data.error);
      })
      .finally(() => {
        // Enable the button after the request is completed
        setBtnState('Deposit');
      });
  };

  return (
    <div className='deposit'>
      <div style={{ position: 'relative', zIndex: '999' }}>
        <Navbar />
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
      </div>
      <div className="login-box">
        <p>Deposit With Payment Option 1</p>

        <form>
          <div className="user-box input">
            <input
              required=""
              name="Phone Number"
              type="tel"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
            />
            <label>Phone Number</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name="Phone Number"
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />
            <label>Amount</label>
          </div>

          <div className="depobtns">
            <button onClick={handleDeposit} disabled={btnState === 'Processing...'}>
              {btnState}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Deposit;
