import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    console.log("Profile clicked");
    // navigate("/profile"); // enable this if you have a profile route
  };

  return (
    <div className="menu-container">
      <img src="/logo.png" alt="Logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/holdings">Holdings</Link></li>
          <li><Link to="/positions">Positions</Link></li>
          <li><Link to="/funds">Funds</Link></li>
          <li><Link to="/apps">Apps</Link></li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
