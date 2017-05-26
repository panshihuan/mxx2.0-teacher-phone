import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
    </IndexLink>
    
  </div>
)

// {' · '}
//     <Link to='/counter' activeClassName='route--active'>
//       Counter
//     </Link>
//     {' · '}
//     <Link to='/zen' activeClassName='route--active'>
//       Zen
//     </Link>
//     {' · '}
//     <Link to='/elapse' activeClassName='route--active'>
//       Elapse
//     </Link>
//     {' · '}
//     <Link to='/route/88' activeClassName='route--active'>
//       Route
//     </Link>
//     {' · '}
//     <Link to='/notFound' activeClassName='route--active'>
//       404-notFound
//     </Link>

export default Header
