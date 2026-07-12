import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const { user, setUser } = useAuth();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await fetch("https://tradehub-6mu3.onrender.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);

      window.location.href = "http://localhost:3000/login";
    } catch (err) {
      console.log(err);
    }
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="logo.png"
        alt="TradeHub Logo"
        style={{ width: "50px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = "http://localhost:3000";
        }}
      />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/transactions"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Transactions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            ></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {user?.profileImage ? (
              <img src={user.profileImage} alt="Profile" />
            ) : (
              user?.username.charAt(0).toUpperCase() || "U"
            )}
          </div>

          <p className="username">{user ? user.username : "Guest"}</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>👤 My Profile</p>
            </Link>
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>⚙️ Settings</p>
            </Link>
            <p
              onClick={() => {
                window.location.href = "http://localhost:3000";
              }}
            >
              🌐 Go to Website
            </p>
            <p onClick={handleLogout}>🚪 Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
