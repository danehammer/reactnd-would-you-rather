import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to={`${process.env.PUBLIC_URL}/`} exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`${process.env.PUBLIC_URL}/add`} activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to={`${process.env.PUBLIC_URL}/leaderboard`} activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
