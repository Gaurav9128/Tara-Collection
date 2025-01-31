import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReturnStatus = ({ userId }) => {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fetchReturns = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/returns/${userId}`);
        setReturns(res.data.returns);
      } catch (err) {
        alert('Error fetching return requests.');
      }
    };
    fetchReturns();
  }, [userId]);

  return (
    <div>
      <h3>Return Status</h3>
      <ul>
        {returns.map((ret) => (
          <li key={ret._id}>
            Order ID: {ret.orderId} | Status: {ret.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReturnStatus;