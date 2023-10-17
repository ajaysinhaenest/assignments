import { useState, useEffect,useReducer } from 'react'
import { classDetails, studentsDetails,resultsDetails } from './config'
import StudentsDetails from './StudentsDetails'
import { Outlet } from 'react-router-dom'

const reducer=(state,action)=>{
  switch(action.type) {
    case 'COMBINED_DATA':{
        return {
               ...state,
               allClasses:action.payload.allClasses,
               allStudents:action.payload.allStudents,
               allMarks:action.payload.results
        }
    }
        default :{
            return state
        }
  }

}

const initialState ={
  allClasses:[],
  allStudents:[],
  allMarks:[]
}

const School = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
   console.log(state)
    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])
    const [results,setResults] =useState([])
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedRollNo, setSelectedRollNo] = useState('')
    const [filteredClass, setFilteredClass] = useState({})

    useEffect(() => {
        setClasses(classDetails)
        setStudents(studentsDetails)
        setResults(resultsDetails)
    }, [])
    useEffect(() => {
        const studentsByClass = students.find((cls, i) => cls.className === selectedClass)
        setFilteredClass(studentsByClass)
    }, [selectedClass, students])
 
    const handleClick =()=>{
     const allClasses = classes.map((cls)=>cls.class)
     const allStudents =students.map((stu)=>stu.studentsDetails)
    // console.log(results)

    //  console.log(allStudents)
     dispatch({type:'COMBINED_DATA',payload:{allClasses,allStudents,results}})
    }

    return (
        <>
        <div className="text-center">
            <h1 className="text-center my-4 font-medium text-gray-500 text-xl">
                Get Results Details
            </h1>
            <select
                className="px-2 mr-4 text-gray-700 font-medium "
                name="classes"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
            >
                <option value="">Select Class</option>
                {classes.map((cls, i) => (
                    <option value={cls.class} key={cls.classId}>
                        {cls.class}
                    </option>
                ))}
            </select>
            <select
                className="px-2 mr-4 font-medium text-gray-700"
                name="students"
                value={selectedRollNo}
                onChange={(e) => setSelectedRollNo(e.target.value)}
            >
                <option value="">Select Student</option>
                {filteredClass?.studentsDetails?.map((student, i) => (
                    <option value={student.rollNo} key={student.rollNo}>
                        {student.name}
                    </option>
                ))}
            </select>
            {Boolean(selectedRollNo) && <StudentsDetails rollNo={selectedRollNo} />}
            <Outlet />
        </div>
        <button className='flex mx-auto px-4 py-1 rounded-xl text-white  bg-gray-700 mt-10 hover:bg-gray-600' onClick={()=>handleClick()} >Combine Data</button>
        </>
    )
}

export default School
