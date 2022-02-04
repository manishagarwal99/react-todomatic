import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	const [tasks, setTasks] = useState([
		{ index: 1, text: "Hello", day: "ddd" },
		{ index: 2, text: "Bye", day: "ddd" },
	]);
	const [showForm, setshowForm] = useState(true);

	// Add Task
	// const addTask = async (task) => {
	// 	const res = await fetch("http://localhost:5000/tasks", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(task),
	// 	});

	// 	const data = await res.json();

	// 	setTasks([...tasks, data]);
	// };

	// Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Delete Task
	// const deleteTask = async (id) => {
	// 	const res = await fetch(`http://localhost:5000/tasks/${id}`, {
	// 		method: "DELETE",
	// 	});
	// 	//We should control the response status to decide if we will change the state or not.
	// 	res.status === 200
	// 		? setTasks(tasks.filter((task) => task.id !== id))
	// 		: alert("Error Deleting This Task");
	// };

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleButton = () => {
		setshowForm(!showForm);
	};

	return (
		<div className="container">
			<Header title="Task Tracker" onToggle={toggleButton} />
			{showForm == true ? <AddTask onAdd={addTask} /> : " "}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				"No Tasks To Show"
			)}{" "}
		</div>
	);
}

export default App;
