class Piatto {
    constructor (id){
        this.id=id;
    }
    setName(name){
        this.name = name; // name è una stringa
    }
    setPrezzo (prezzo){
        this.prezzo = prezzo; // prezzo è un float
    }
    setImage (image){
        this.image = image; // formato ancora indeterminato, ma dev'essere non l'immagine stessa, ma il mezzo attraverso il quale l'interfaccia grafica può "fetchare" l'immagine giusta
    }
    setDescription (description){
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