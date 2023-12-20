import {TaskItem} from './Modules/app/model/taskitem.js'
import {TaskList} from './Modules/app/model/tasklist.js'
import {View} from './Modules/mvc/view/view.js'
import {TaskListComponent} from './Modules/app/view/tasklistcomponent.js'

//TESTS

//MODELS
const list = new TaskList("My List")
//list.render();
list.add(new TaskItem("Read the documentation"));
list.add(new TaskItem("Skecth out a plan"));

//list.update()

//VIEWS
const view = new View ([
    new TaskListComponent(list)
]);
//RENDERING
console.log(view.render());
//HTML ALSO?
document.body.innerHTML = view.html();