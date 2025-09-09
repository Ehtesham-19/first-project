import React from 'react'
import { Link } from 'react-router'
import "./header.css"

export default function NavBar() {
  return (
    <div className='header'>
          <div className="logo">
              <Link className='link' to="/" ><h2>Logo</h2></Link>
          </div>
          <div className="menu">
              <Link to="/">Home</Link>
              <Link to="/student">Students</Link>
              <Link to="/College">College</Link>
          </div>
    </div>
  )
}
