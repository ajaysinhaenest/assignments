import React, { useEffect, useState } from 'react'
import { resultsDetails } from './config'
import { Link, useParams } from 'react-router-dom'
const Result = () => {
    const [singleStudent, setSingleStudent] = useState({})
    // const [marks,setMarks] = useState([])
    const {rollNo
    } = useParams()
    console.log(rollNo)
    useEffect(() => {
        const studentResult = resultsDetails?.find((stu, i) => stu.rollNo === rollNo)
        setSingleStudent(studentResult)

    }, [rollNo])
    console.log(singleStudent)

    return (
  <div className='flex justify-center' >
    <table className='p-2 m-3 border-2 border-gray-600 ' >
      <thead className=''>
        <tr className=''>
          <th className='px-3 py-1 border-2'>Name</th>
          <th className='px-3 py-1 border-2'>Class</th>
          <th className='px-3 py-1 border-2'>Roll No</th>
          <th className='px-3 py-1 border-2'>Total Subjects</th>
          <th className='px-3 py-1 border-2'>Hindi</th>
          <th className='px-3 py-1 border-2'>English</th>
          <th className='px-3 py-1 border-2'>Maths</th>
        </tr>
      </thead>
      <tbody>
          <tr className=''>
            <td className='border-2 px-3'>{ singleStudent?.name}</td>
            <td className='border-2 px-3'>{singleStudent?.className}</td>
            <td className='border-2 px-3'>{singleStudent?.rollNo}</td>
                {
                            singleStudent?.marks && <td className='border-2 px-3'>{singleStudent.marks.length}</td>
                        }  
                         {
                            singleStudent?.marks &&  <td className='border-2 px-3'>{ singleStudent?.marks[0]?.hindi} { singleStudent?.marks[0]?.hindi >27? 'P':'F'}  </td>
                  }
                        {
                            singleStudent?.marks && <td className='border-2 px-3'>{singleStudent?.marks[1]?.english} {singleStudent?.marks[1]?.english > 27 ? 'P' : 'F'} </td>}
                         {
                            singleStudent?.marks &&    <td className='border-2 px-3'>{ singleStudent?.marks[2]?.maths} { singleStudent?.marks[2]?.maths >27? 'P':'F'} </td> 
                  }
                         
          </tr>
      </tbody>
    </table>
    </div>
            )
}

export default Result
