import { DataModel } from "../../mvc/model/datamodels.js";
import { FieldItem } from "../../mvc/model/fielditem.js";

class TaskList extends DataModel {
    constructor(name = "", id = -1, list = []) {
        super("task_list", "Task List", [
            new FieldItem("id", "ID", id),
            new FieldItem("name", "Name", name),
            new FieldItem("itemList", "Item List", list)
        ])
        this.list = list
    }
    add(item) {
this.list.push(item);
    }
    toString(){
        return this.fieldList[1].value
    }
}
export {TaskList}