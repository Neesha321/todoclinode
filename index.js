const argv = require('yargs').argv;
const todoSerice = require('./todoService');
// --title = '' --desc=''
console.log('yargs',argv);

let todo={};

switch (argv.process){
    case "add":
        addTodo(argv);
        break;
    case "getAll":
        listAllTodo();
        break;
    
    case "edit":
        Edit(argv);
        break;
    case "complete":
        complete(argv);
        break;
    case "delete":
        deleted(argv);
        break;
    default:
        console.log("parameter dont match");
}
function addTodo(data){
    todo.title = data.title;
    todo.description = data.desc;
    todo.completed = false;
    todo.id = todoSerice.getNextId();
    todoSerice.add(todo);
}

function listAllTodo(){
    let todos = todoSerice.getAllTodos();
    console.log(todos);
}
function Edit(data){
    
    todo.title =data.title;
    todo.description = data.desc;
    todo.completed = false;
    todo.id=data.id;
    todoSerice.Edata(todo);
}
function  complete(data){
    console.log(data);
    todo.id=data.id;
    todoSerice.complete(todo);
}
function deleted(data){
    console.log(todo);
    todo.id=data.id;
    todoSerice.deleted(todo); 
}