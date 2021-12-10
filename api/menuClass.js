class Menu {
    getType (){
        return this.type;
    }
    getPiatti (){
        return this.piatti;
    }
}

class MenuModificabile extends menu {
    constructor(id, type){
        this.id = id;
        this.type = type;
        this.piatti = [];
        this.piattiLenght = 0;
    }
    addPiatto (piatto){
        this.piatti [piattiLenght] = 0;
        this.piattiLenght ++ ;
    }
    removePiatto (index){
        this.piatti.splice(index,index);
        this.piattiLenght -- ;
    }
    modifyPiatto (index, piatto){
        this.piatti[index] = piatto;
    }
}