"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var ToDoItem = /** @class */ (function () {
    function ToDoItem(title, status, updatedAt) {
        if (status === void 0) { status = true; }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    ToDoItem.prototype.toggleDone = function () {
        this.status == false;
    };
    return ToDoItem;
}());
// Create class TodoList that implements the corresponding interface
var ToDoList = /** @class */ (function () {
    function ToDoList(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    // 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
    ToDoList.prototype.addTask = function (task) {
        this.items.push(task);
        console.log('=========== NEW TASK =========== \n' +
            'Task "' + task + '" inserted in the list \n' +
            'Number of items: ' + this.items.length);
    };
    // 3. Create a function to list all tasks, it must show in the console de task.
    ToDoList.prototype.listAllTasks = function () {
        this.items.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    ToDoList.prototype.deleteTask = function (task) {
        this.items.splice(this.items.indexOf(task), 1);
        console.log('=========== TASK REMOVED =========== \n' +
            'Task "' + task + '" removed from the list \n' +
            'Number of items: ' + this.items.length);
    };
    ToDoList.prototype.listUncomplete = function () {
        this.items.forEach(function (oneTask) {
            if (oneTask.status == true) {
                console.log(oneTask);
            }
            ;
        });
    };
    return ToDoList;
}());
// Execution
var task1 = new ToDoItem('This is our first task');
var task2 = new ToDoItem('Eat pizza 🍕 yummy!!!');
var task3 = new ToDoItem('Finish this iteration 1!! 🤓');
var task4 = new ToDoItem('Finish this iteration 2!! 🤓');
var task5 = new ToDoItem('Finish this iteration 3!! 🤓');
var myTodos = new ToDoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
