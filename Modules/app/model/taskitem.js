import { DataModel } from '../../mvc/model/datamodel.js'
import { FieldItem } from '../../mvc/model/fielditem.js'

class TaskItem extends DataModel {
    constructor(name = "", id = -1) {
        const idField = new FieldItem("id", "ID", id)
        const nameField = new FieldItem("name", "Name", name)
        super("task", "Task", [idField, nameField])
        this.id = idField
        this.name = nameField
    }
    toString() {
        return " - " + this.fieldList[1].value;
    }
}
export { TaskItem }