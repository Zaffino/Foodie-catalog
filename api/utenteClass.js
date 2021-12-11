const { process_params } = require("express/lib/router");

class Utente{ 
    constructor (user){
        this.username=user; // nome dell'account
    }
}

class Personale {
    constructor (user, privilegi){
        this.username = user;
        for (i=0; i<privilegi.length; i++){
            this.privilegi[i] = privilegi[i];
        }
    }
}