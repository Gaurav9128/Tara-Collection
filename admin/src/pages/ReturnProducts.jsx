import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const ReturnProducts = ({ token }) => {
  const [returns, setReturns] = useState([]);
  const [filteredReturns, setFilteredReturns] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  const fetchReturnOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.get(backendUrl + '/api/returns', {
        headers: { token },
      });
      if (response.data.success) {
        const returnData = response.data.returnOrders.reverse();
        setReturns(returnData);
        setFilteredReturns(returnData); // Initialize with all returns
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFilter = () => {
    if (!filterDate) {
      setFilteredReturns(returns);
      return;
    }

    const selectedDate = new Date(filterDate).toDateString();
    const filtered = returns.filter((order) => {
      const orderDate = new Date(order.date).toDateString();
      return orderDate === selectedDate;
    });

    setFilteredReturns(filtered);
  };

  const handleApproveReturn = async (orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/return/approve',
        { orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('Return approved');
        fetchReturnOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRejectReturn = async (orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/return/reject',
        { orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success('Return rejected');
        fetchReturnOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchReturnOrders();
  }, [token]);

  return (
    <div>
      <h3>Return Products</h3>

      {/* Date Filter Section */}
      <div className="mb-5">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Filter
        </button>
      </div>

      <div>
        {filteredReturns.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 relative"
            key={index}
          >
            <img className="w-12" src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => (
                  <p className="py-0.5" key={index}>
                    {item.name} x {item.quantity} <span>{item.size}</span>
                    {index !== order.items.length - 1 && ','}
                  </p>
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ','}</p>
                <p>
                  {order.address.city +
                    ', ' +
                    order.address.state +
                    ', ' +
                    order.address.country +
                    ', ' +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Items : {order.items.length}</p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency}
              {order.amount}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleApproveReturn(order._id)}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleRejectReturn(order._id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnProducts;
