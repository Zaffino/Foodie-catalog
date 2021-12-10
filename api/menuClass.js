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
        this.piattiLenght = 0; // lunghezza dell'array di cui sopra
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