import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className='flex w-full py-2 px-4 bg-green-400 justify-center gap-4 ' >
          <li className='text-lg font-medium text-gray-800 hover:text-gray-500' >
              <Link to='/' >todo</Link>
          </li>
          <li className='text-lg font-medium text-gray-800 hover:text-gray-500' > <Link to='/school' >school</Link></li>
    </ul>
  )
}

export default Header
