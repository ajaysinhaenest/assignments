import React, { useState } from 'react'

const InputField = () => {
  const [btnDisabled,setBtnDisabled] =useState(false)
  const [query,setQuery] =useState('')
  const [task, setTask] = useState([])

  const handleSubmit = () => {
    if (query !== "" && task.length < 5) {
        const oldTasks = [...task]
        const value = oldTasks.find((item,i)=> item.text === query)
        // console.log(value)
      if(value) return alert('Item already exist')
      setTask([...task, { id: task.length +1, text: query }])
      setQuery('')
      setBtnDisabled(false)
    }
    if (task.length > 5) {
      setBtnDisabled(true)
    }
  }

  const handleDelete = (id) => {
    const oldItems = [...task]

    const items = oldItems.filter((item, i) => {
      return item.id !== id
    } ) 
    // console.log(items)
    setTask(items)
  }
  
  return (
    <div className='mx-auto mt-10 bg-gray-100 w-96' >
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
          }}>
        <input type="text" className='border border-gray-400 w-4/5  p-1 bg-gray-100 focus:outline-none ' value={query} onChange={(e) => setQuery(e.target.value)} />
        {
            btnDisabled &&<button className='w-1/5 px-7 font-medium text-xl bg-green-300'  disabled >add</button>
        }
        {
          !btnDisabled && <button  className='w-1/5 p-1 px-7 font-medium text-xl bg-green-300' >add</button>
        }
              
      </form>
      {
        task.length !== 0 && task?.map((item, i) => <div key={i} className='flex p-2 justify-between bg-gray-200 text-gray-700 font-medium' >
          <div className='flex gap-3' >
            <p>{item.id}. </p>
            <p> {item.text}</p>
          </div>
          <div className='flex gap-3' >
            <img onClick={()=>setQuery(item.text)} className='h-4' src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png" alt="" />
            <img onClick={()=>handleDelete(item.id)} className='h-4' src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" />
          </div>
          
        </div>)
      }
    </div>
  )
}

export default InputField
