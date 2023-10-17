import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({singleStudent}) => {
  return (
       <Link to={singleStudent?.rollNo} className='underline text-gray-900 font-medium text-sm' >Check</Link>
  )
}

export default Table
