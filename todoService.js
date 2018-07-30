const fs = require('fs');
let todos = [];
let datasstore=[];
function add(todo){
    todos=[];
    todos = getAllTodos();
    todos.push(todo);
    fs.writeFile('./ToDos.txt',JSON.stringify(todos),(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("written in file");
        }
    });
}
function getAllTodos(){
    let temp = [];
    temp = fs.readFileSync('./ToDos.txt','utf8');
    // console.log("temo",temp);
    if(temp==''){
        temp = '[]';
    }
    todos = JSON.parse(temp);
    return todos;
}

function getNextId() {
    let todos = getAllTodos();
    let maxId = todos.reduce((acc,value)=>{
        if(acc<value.id){
            acc = value.id;
        }
        return acc;
    },0);

    return maxId+1;
}
function Edata(todo){
    console.log(todo.description);
    todos=getAllTodos();
    datasstore =todos.map((val,index)=>{
        if(val.id==todo.id){
            
            val.id=todo.id;
            if(todo.title==undefined){
                val.title=val.title;
            }else{
                val.title=todo.title;
            }
            if(todo.description==undefined){
                val.description=val.description;
            }else{
                val.description=todo.description;
            }
            if(todo.completed==undefined){
                val.completed=val.completed;
            }else{
                val.completed=todo.completed;
            }

            // console.log(todos);


        }
        return val;
    });
    changeData(datasstore);

}
function changeData(datasstore) {
    fs.writeFile('./ToDos.txt',JSON.stringify(datasstore),(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("written in file");
        }
    });
}
function complete(parameter){
    todos=[];
    todos=getAllTodos();
    datasstore=todos.map((val,index)=>
        {
            if (val.id == parameter.id) {
                val.id = parameter.id;
                if (val.title == undefined) {
                    val.title = val.title;
                } else {
                    val.title = parameter.title;
                }
                if (val.description == undefined) {
                    val.description = val.description
                }
                else {
                    val.description = parameter.description;
                }
                val.completed=true;
            }

            return val;
        }

    );
    changeData(datasstore);

}
function deleted(parameter){
    todos=getAllTodos();
    storeData =todos.filter((val)=>{
        return val.id!=parameter.id;
        // }
    });
    changeData(storeData);
}

module.exports={
    add,
    getAllTodos,
    getNextId,
    Edata,
    complete,
    deleted
}