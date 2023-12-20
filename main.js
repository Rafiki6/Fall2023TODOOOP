class FieldItem {
    constructor(fieldName = "default", displayName = "", value = "") {
        this.fieldName = fieldName
        this.displayName = displayName ? displayName : fieldName
        this.value = value
        if (fieldName === "defaultName" || !fieldName) {
            console.log("WARNING: False or default field name")
        }
    }
}
class DataModel {
    constructor(tableName = "defaultName", displayName = "", fieldList = []) {
        this.tableName = tableName;
        this.displayName = displayName;
        this.fieldList = fieldList
    }
    create() { }
    read() { }
    update() { }
    delete() { }
}

class TaskItem extends DataModel {
    constructor(name = "", id = -1) {
        super("task", "Task", [
            new FieldItem("id", "ID", id),
            new FieldItem("name", "Name", name),
        ])
    }
}

class TaskList extends DataModel {
    constructor(name = "", id = -1, list = []) {
        super("task_list", "Task List", [
            new FieldItem("id", "ID", id),
            new FieldItem("name", "Name", name),
            new FieldItem("itemList", "Item List", list)
        ])
        this.list = list;
    }
    add(item) {
        this.list.push(item);
    }
}
class Component {
    render() {
        return "I am a generic component"
    }
}
class View {
    constructor(componentList) {
        this.componentList = componentList;
    }
    render() {
        return this.componentList.map(c => c.render()).join("\n")
    }
}
class TaskListComponent {
    constructor(list) {
        this.list = list
    }
    render() {
        return this.taskList.list.map(t => t.name).join("\n")
    }
}


list = new TaskList("My List");
list.add(new TaskItem("Research the documentation"));
list.add(new TaskItem("Sketch out a plan"));
const view = new View([
new TaskListComponent(list)
]);

console.log(view.render())
