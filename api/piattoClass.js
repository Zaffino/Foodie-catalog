class Piatto {
    constructor (name){
        this.name(); //definizione di questo attributo ancora incerto, necessità di avere accesso al .json con la strutturazione dei dati per implementare correttamente questa parte
    } // in ogni caso name -> identificativo (per il momento)
    addPrezzo (prezzo){
        this.prezzo = prezzo; // prezzo è un float
    }
    addImage (image){
        this.image = image; // formato ancora indeterminato, ma dev'essere non l'immagine stessa, ma il mezzo attraverso il quale l'interfaccia grafica può "fetchare" l'immagine giusta
    }
    addDescription (description){
        this.descrizione = description; // descrizione è una stringa
    }
    getPrezzo (){
        return this.prezzo;
    }
    getImage (){
        return this.image;
    }
    getDescription(){
        return this.descrizione
    }
}