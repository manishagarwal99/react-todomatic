import Header from './components/Header';
import Todos from './components/Todos';
import { useState } from 'react';
import AddToDo from './components/AddToDo';


function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks,setTasks] = useState([
  {
    id: 1,
    text: 'Doctor Appointment',
    date: '02/05/2022',
    time: '12:30 pm'
},
{
  id: 2,
  text: 'Dinner Prep',
  date: '02/05/2022',
  time: '19:30 pm'
}
]);

const addToDo = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTodo = { id, ...task };
  setTasks([...tasks, newTodo]);
}

const deleteToDo = (id) =>(
  setTasks(tasks.filter((task) => task.id !==id)))

  return (
    <div className="container">
      <Header showAdd={showAddTask} />
      <AddToDo onAdd={addToDo}/>
      {tasks.length>0 ? (<Todos tasks={tasks} onDelete={deleteToDo}/>
        ):
        ('You are all done!')}
    </div>
  );
}

export default App;
