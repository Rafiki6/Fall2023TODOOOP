import { Component } from "../../mvc/view/component.js";

class TaskListComponent extends Component{
    render(){
        return this.data + ":\n" + this.data.fieldList.map(task => task).join("\n")
    }
    html(){
        return `<h1 class="taskLis>${this.data}:</h1>`
            + this.data.list.map(task => `<div class="taskItem"> ${task}</div>`).join("\n")
    }
}
export {TaskListComponent}
