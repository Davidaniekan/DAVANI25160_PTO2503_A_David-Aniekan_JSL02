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

