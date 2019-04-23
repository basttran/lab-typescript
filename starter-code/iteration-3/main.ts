// Add the reference to the interface
import { ToDoItemInterface } from './interfaces';
import { ToDoListInterface } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class ToDoItem implements ToDoItemInterface {
  constructor(public title: string, public status: boolean=true, public updatedAt: Date = new Date()) {
  }
    

    toggleDone (): void {
      this.status == false ;
    }
}

// Create class TodoList that implements the corresponding interface
class ToDoList implements ToDoListInterface {
  constructor(public items: Array<ToDoItem>=[]) {}

      // 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
    addTask(task: ToDoItem): void {
      this.items.push(task);
      console.log('=========== NEW TASK =========== \n'+
                  'Task "' + task +'" inserted in the list \n'+
                  'Number of items: '+ this.items.length);
    }

    // 3. Create a function to list all tasks, it must show in the console de task.
    listAllTasks (): void {
      this.items.forEach(oneTask => {
        console.log(oneTask);
      })
    }


    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    deleteTask(task: ToDoItem): void {
      this.items.splice(this.items.indexOf(task),1);
      console.log('=========== TASK REMOVED =========== \n'+
      'Task "' + task +'" removed from the list \n'+
      'Number of items: '+ this.items.length);
    }

    listUncomplete (): void {
      this.items.forEach(oneTask => {
        if (oneTask.status==true) {console.log(oneTask)};
      })
    }
}

// Execution
let task1 = new ToDoItem('This is our first task');
let task2 = new ToDoItem('Eat pizza 🍕 yummy!!!');
let task3 = new ToDoItem('Finish this iteration 1!! 🤓');
let task4 = new ToDoItem('Finish this iteration 2!! 🤓');
let task5 = new ToDoItem('Finish this iteration 3!! 🤓');

let myTodos = new ToDoList();

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
