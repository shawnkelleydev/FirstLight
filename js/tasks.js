//structural declarations
const tasks = document.querySelector("#tasks-box");
const taskInput = document.querySelector("#task-input");
const tasksUL = allUL[0];
const openTasks = document.querySelector("#open-tasks");
const taskBtn = document.querySelector("#task-submit");
const taskError = document.querySelector("#task-error");
const taskList = document.querySelector("#task-list");

//show / hide
showSectionListener(openTasks, tasks, taskInput);

//add/subtract
addItemListener(taskBtn, "#task-input", taskList, taskError);
