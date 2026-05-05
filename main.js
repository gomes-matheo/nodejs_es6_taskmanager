const tasksOfTheDay = [
	{
		title: 'Faire les courses', done: false
	},
	{
		title: 'Nettoyer la maison', done: true
	},
	{
		title: 'Planter le jardin', done: false
	}
];

// Function used to separate test blocks
function separate() {
	console.log("\n--------------------------------------------------\n");
};

// Add a specified task in a specified list
// Returns : new array of previous list's elements + the new task
const addTask = (taskList, newTask) => {
	// We use spread element to add previous list's element in the new array we created
	return [...taskList, newTask];
};

// Remove a task by its title (case sensitive) in a specified list
// Since Array.filter creates an instance of the array that matches condition,
// we use that in our advantage by inverting the condition :
const removeTask = (taskList, title) => {
	// We want everything that do not match with the searched title
	return taskList.filter(t => t.title != title);
};

// Inverts the specified task status (toggle button)
const toggleTaskStatus = (task) => {
	task.done ? (task.done = false) : (task.done = true);
};

const Status_filter = Object.freeze({
	DONE: "done",
	UNDONE: "undone",
	NO_FILTER: "no_filter"
});

const showTasks = (taskList, status) => {
	switch(status) {
		case Status_filter.DONE:
			console.log(taskList.filter(t => t.done == true));
			break;
		case Status_filter.UNDONE:
			console.log(taskList.filter(t => t.done == false));
			break;
		default:
			console.log(taskList);
			break;
	};
};

const jsTask = {title: 'Coding in JS', done: false};
const washDishes = {title: 'Wash the dishes', done: false};

// First array manipulations
separate();
console.log("Here are my tasks of the the day");
console.log(tasksOfTheDay);

// Second array manipulations
separate();
console.log("I decided to add another task : coding in JS");
const a2 = addTask(tasksOfTheDay, jsTask);
console.log(a2);

console.log("I also need to wash the dishes !");
const a3 = addTask(tasksOfTheDay, washDishes);
console.log(a3);

// Third array manipulations
separate();
console.log("I'm too lazy to wash the dishes, let's remove it from my todo list");
const a4 = removeTask(a3, 'Wash the dishes');
console.log(a4);

// Task manipulations
separate();
console.log(jsTask);
toggleTaskStatus(jsTask);
console.log("I've coded a bit in JS, let's mark this as done");
console.log(jsTask);

// Show tasks with the status "false"
separate();
console.log("Let's see what I need to do now :");
showTasks(a4, Status_filter.UNDONE);
