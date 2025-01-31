import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { BiNavigation } from 'react-icons/bi';

const ReturnForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, itemId } = location.state || {};
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    orderId: '',
    userId: '',
    productId: '',
    reason: '',
    choice: 'refund',
  });

  useEffect(() => {
    // Retrieve user ID from localStorage
    const userData = JSON.parse(localStorage.getItem('user')); // Ensure parsing JSON
  console.log("userData ",userData._id)
    const userId = userData ? userData._id : '';

    // Set orderId, productId, and userId from context/state
    if (orderId && itemId) {
      setFormData((prev) => ({
        ...prev,
        orderId,
        productId: itemId,
        userId,
      }));
    }
  }, [orderId, itemId]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.reason) {
      alert('Please provide a reason for the return.');
      return;
    }

    setLoading(true);

    try {
      console.log('Submitting Return Request:', formData);
      const response = await axios.post(
        `http://localhost:5000/api/return-order`,
        {
          orderId: formData.orderId,
          productId: formData.productId,
          userId: formData.userId,
          reason: formData.reason,
          choice: formData.choice,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("response ",response)
      if (response.data.success) {
        alert('Return request submitted successfully!');
        console.log('Return Request Response:', response.data);
        navigate('/orders')
      }
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert('Error submitting return request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="return-form-container" style={styles.container}>
      <h2 style={styles.title}>Return Request</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Reason for return:</label>
        <textarea
          placeholder="Explain the reason for return"
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          style={styles.textarea}
        ></textarea>

        <label style={styles.label}>Request Type:</label>
        <select
          value={formData.choice}
          onChange={(e) => setFormData({ ...formData, choice: e.target.value })}
          style={styles.select}
        >
          <option value="refund">Refund</option>
          <option value="exchange">Exchange</option>
        </select>

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Submitting...' : 'Submit Return'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
    minHeight: '80px',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default ReturnForm;
