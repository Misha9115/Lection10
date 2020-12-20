import React from 'react';
//import s from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
      
      <div>
        <nav>
          <ul>
            <ol>
              <Link to="/">Home</Link>
            </ol>
            <ol>
              <Link to="/profile">Profile</Link>
            </ol>
            <ol>
              <Link to="/posts">Posts</Link>
            </ol>
            <ol>
              <Link to="/todos">Todos</Link>
            </ol>
          </ul>
        </nav>
        </div>
        
    )
}

export default Navbar;