const { process_params } = require("express/lib/router");

class Utente{ 
    constructor (id,user){
        this.id = id;
        this.username=user; // nome dell'account
    }
}

class Personale {
    constructor (id, user, privilegi){
        this.id=id;
        this.username = user;
        for (i=0; i<privilegi.length; i++){
            this.privilegi[i] = privilegi[i];
        }
    }
}