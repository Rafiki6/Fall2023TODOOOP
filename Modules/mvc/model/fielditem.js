class FieldItem {
    constructor(fieldName = "default", displayName = "", value = "") {
        this.fieldName = fieldName
        this.displayName = displayName ? displayName : fieldName
        this.value = value
        if(fieldName === "default" || !fieldName){
            console.log("WARNING: Farle or default field name")
        }
    }
    toString(){
        return `${this.displayName} = ${this.value}`
    }
}
export {FieldItem}