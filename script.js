// Function to gather task data from the user
function getTaskData(taskNumber) {
  let title = prompt(`Enter task ${taskNumber} title:`);
  let description = prompt(`Enter task ${taskNumber} description:`);
  let status = getValidStatus(taskNumber);

  return {
    title,
    description,
    status,
  };
}

// Function to prompt the user until a valid status is entered
function getValidStatus(taskNumber) {
  let status;
  let validStatuses = ["todo", "doing", "done"];

  while (true) {
    status = prompt(
      `Enter task ${taskNumber} status (todo, doing, done):`
    ).toLowerCase(); // Converts the input to lowercase for consistency

    if (validStatuses.includes(status)) {
      break;
    } else {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }

  return status; // this returns the valid status entered by the user.
}

// These two lines collect input for Task 1 and Task 2, storing them in separate variables.
let task1 = getTaskData(1);
let task2 = getTaskData(2);

// Store tasks in an array for easy handling
let tasks = [task1, task2];

// Filter and display completed (done) tasks
let completedTasks = tasks.filter((task) => task.status === "done");

// This calls a function once for every item in the completedTasks array
if (completedTasks.length > 0) {
  for (let i = 0; i < completedTasks.length; i++) {
    let task = completedTasks[i];
    console.log(`Title: ${task.title}, Status: ${task.status}`);
  }
} else {
  console.log("No tasks completed, let's get to work!"); // If no tasks are completed, the motivational message is shown.
}
