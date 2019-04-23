// Add the reference to the "TodoInterface"
import { taskArray } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.

class ToDo implements taskArray {
  constructor(public taskStack: Array<string>) {}

      // 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
    addTask(task: string): void {
      this.taskStack.push(task);
      console.log('=========== NEW TASK =========== \n'+
                  'Task "' + task +'" inserted in the list \n'+
                  'Number of items: '+ this.taskStack.length);
    }

    // 3. Create a function to list all tasks, it must show in the console de task.
    listAllTasks (): void {
      this.taskStack.forEach(oneTask => {
        console.log(oneTask);
      })
    }


    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    deleteTask(task: string): void {
      this.taskStack.splice(this.taskStack.indexOf(task),1);
      console.log('=========== TASK REMOVED =========== \n'+
      'Task "' + task +'" removed from the list \n'+
      'Number of items: '+ this.taskStack.length);
    }

}


// Execution
let myTodos = new ToDo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
