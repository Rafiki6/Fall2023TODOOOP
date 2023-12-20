class View{
    constructor(componentList){
        this.componentList = componentList;

    }
    render(){
        return this.componentList.map(c => c.render()).join("\n")
    }
    html(){
        return this.componentList.map(c => c.html()).join("\n")
    }
}
export {View}