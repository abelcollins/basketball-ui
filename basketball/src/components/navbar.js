import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/park">Park</Link>
    </li>
    <li>
      <Link to="/friends">Friends</Link>
    </li>
    <li>
      <Link to="/settings">Settings</Link>
    </li>
  </div>
  );
}
export default navbar;