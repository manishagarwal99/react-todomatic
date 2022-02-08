import React from 'react';

//Use icons as a component
import {FcCancel} from 'react-icons/fc'

const Todo = (props) => {
  return <>
    <h3>{props.task.text}<FcCancel cursor='pointer' onClick={()=>props.onDelete(props.task.id)}/></h3>
    <p>{props.task.date} at {props.task.time}</p>
  </>;
};

export default Todo;
