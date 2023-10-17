import React, { useEffect, useState } from 'react'
import { resultsDetails } from './config'
import { Link } from 'react-router-dom'
import Table from './Table'

const StudentsDetails = ({ rollNo }) => {
  // console.log(rollNo)
    const [singleStudent, setSingleStudent] = useState({})
    useEffect(() => {
        const studentResult = resultsDetails?.find((stu, i) => stu.rollNo === rollNo)
        setSingleStudent(studentResult)
    }, [rollNo])
    // console.log(singleStudent)
  return (
    <div className='flex justify-center my-4' >
          <Table singleStudent={singleStudent} />
    </div>
  )
}

export default StudentsDetails
