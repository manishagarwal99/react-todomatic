import { useState } from 'react';


const AddToDo = ({onAdd}) => {
    const [text,setText] = useState(['']);
    const [time,setTime] = useState(['']);
    const [date,setDate] = useState(['']);

    const submitToDo = (e) => {
        e.preventDefault()

        if (!text) {
          alert('Please add a todo before saving')
          return
        }
        onAdd({text,date,time})
    
        setText('')
        setDate('')
        setTime('')
      }
    
    
  return(
    <form className='add-form' onSubmit={submitToDo}>
      <div className='form-control'>
        <label>To-do</label>
        <input
          type='text'
          placeholder='Add Todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
          type='text'
          placeholder='Add Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          />
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input
          type='text'
          placeholder='Add Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Todo' className='btn btn-block' />
      </form>
  );
}

export default AddToDo;
