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
        this.id = id; // identificativo del menu
        this.type = type; // tipo del menu, dovrebbe variare tra "take away" e "tavolo"
        this.piatti = []; // lista degli elementi della classe Piatto che appartengono al menu
    }
    addPiatto (piatto){
        this.piatti.push() = piatto;
    }
    removePiatto (index){
        this.piatti.splice(index,index);
    }
    modifyPiatto (index, piatto){
        this.piatti[index] = piatto;
    }
}