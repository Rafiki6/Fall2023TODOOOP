import { FieldItem } from "./fielditem.js";

class DataModel {
    constructor(tableName = "defaultName", displayName = "", fieldList = []) {
        this.tableName = tableName
        this.displayName = displayName ? displayName : tableName
        this.fieldList = fieldList
    }
    create(){}
    read(){}
    update(){}
    delete(){}
    toString(){
        return this.fieldList.map(f => f.toString()).join("\n")
    }
}
class LocalDataModel extends DataModel{
    create(){}
    read(){
        const textJSON = localStorage.getItem(this.tableName)
        const data = JSON.parse(textJSON)
        this.fieldList = data.fieldList.map(f => new FieldItem(f.fieldName,f.displayName,f.value))
        console.log(this.fieldList)
    }
    update(){
        localStorage.setItem(this.tableName,JSON.stringify(this))
    }
    delete(){}
}
export {DataModel, LocalDataModel}