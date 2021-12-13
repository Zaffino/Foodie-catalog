class Piatto {
    constructor (id){
        this.id=id;
    }
    constructor (id, name, prezzo, image, description){
        this.id=id;
        this.name=name;
        this.prezzo=prezzo;
        this.image=image;
        this.descrizione = description;
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