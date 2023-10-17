import { useState, useEffect } from 'react'
import { classDetails,studentsDetails } from './config'
import StudentsDetails from './StudentsDetails'
import { Outlet } from 'react-router-dom'

const School = () => {
    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedRollNo,setSelectedRollNo] =useState('')
    const [filteredClass,setFilteredClass] = useState({})

    useEffect(() => {
        setClasses(classDetails)
        setStudents(studentsDetails)
    }, [])
    useEffect(() => {
        const allStudents = [...students]
        const studentsByClass = allStudents?.find((cls, i) => cls.className === selectedClass) 
        setFilteredClass(studentsByClass)
    }, [selectedClass])
    
  return (
      <div className='text-center'>
        
      <h1 className='text-center my-4 font-medium text-gray-500 text-xl'>Get Results Details</h1>
          <select className='px-2 mr-4 text-gray-700 font-medium '    name="classes" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} id="">
              <option value="">Select Class</option>
           {
                  classes?.map((cls, i) => <option value={cls.class} key={cls.classId} >{cls.class}</option>)
          }  
          </select>
          <select className='px-2 mr-4 font-medium text-gray-700'  name="students" id="" value={selectedRollNo} onChange={(e)=>setSelectedRollNo(e.target.value)} >
               <option value="">Select Student</option>
                 {
                  filteredClass?.studentsDetails?.map((student, i) => <option value={student.rollNo} key={student.rollNo}  >{student.name}</option> )
          } 
          </select>
          {
              selectedRollNo !=='' &&  <StudentsDetails rollNo={selectedRollNo}  />
          }
          <Outlet/>
    </div>
  )
}

export default School
