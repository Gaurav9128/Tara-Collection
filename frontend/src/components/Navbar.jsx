import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { token, setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Clear the token
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src="/assets/ADS.png" style={{ width: '80px', height: 'auto' }} alt="Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className="flex flex-col items-center gap-1 hover:text-black"
          >
            <p>{item}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />
        
        <div className="relative group">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
          {token ? (
            <div className="absolute hidden group-hover:block right-0 bg-slate-100 rounded py-3 px-5 w-36">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link to="/orders" className="cursor-pointer hover:text-black">Orders</Link>
              <p onClick={handleLogout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          ) : (
            <Link to="/login">
              <p>Login</p>
            </Link>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-xs text-center bg-black text-white rounded-full">
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="Menu" />
      </div>

      {/* Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col">
          <div onClick={() => setVisible(false)} className="p-3 flex items-center gap-2 cursor-pointer">
            <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setVisible(false)}
              className="py-2 px-6 border-b hover:bg-gray-200"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
