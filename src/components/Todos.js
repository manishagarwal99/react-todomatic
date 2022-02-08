import Todo from './/Todo'

const Todos = (props) => {
  return(
    <div className='task'>
      {props.tasks?.map((task) => (
          <Todo key={task.id} task={task} onDelete={props.onDelete}/>
          )
      )}
  </div>)
};

export default Todos;
