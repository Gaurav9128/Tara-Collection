import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            // item['shippingFees'] = order.shippingFees || 0; // Assuming shippingFees is part of the order object
            item['returnStatus'] = order.returnStatus || ''; // Assuming returnStatus is part of the order object
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // Function to calculate total price (price * quantity + shipping fees)
  const calculateTotalPrice = (item) => {
    // Ensure the shipping fees are added properly to the total
    const totalPrice = item.price * item.quantity;
    return totalPrice;
  };

  // Function to handle return request
  const handleReturnRequest = async (orderId, itemId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/returnRequest',
        { orderId, itemId },
        { headers: { token } }
      );
      if (response.data.success) {
        // Update order data to show the return request status
        loadOrderData();
      }
    } catch (error) {
      console.error('Error while submitting return request:', error);
    }
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price * item.quantity}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="mt-1">
                  Date: <span className=" text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-1">
                  Payment: <span className=" text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <div>
                <p className="text-sm md:text-base">
                  Total: {currency}
                  {calculateTotalPrice(item).toFixed(2)}
                </p>
                {/* Add Return Button */}
                {item.returnStatus === 'Pending' ? (
                  <button disabled className="bg-gray-500 text-white px-4 py-2 text-sm font-medium rounded-sm">
                    Return Pending
                  </button>
                ) : item.returnStatus === 'Approved' ? (
                  <button disabled className="bg-green-500 text-white px-4 py-2 text-sm font-medium rounded-sm">
                    Return Approved
                  </button>
                ) : (
                  <button
                    onClick={() => handleReturnRequest(item.orderId, item._id)}
                    className="border px-4 py-2 text-sm font-medium rounded-sm"
                  >
                    Request Return
                  </button>
                )}
                <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
