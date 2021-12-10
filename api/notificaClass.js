class Notifica {
    constructor(testo){
        this.testo = testo;
    }
} // ricezioneNotifica() -> metodo/funzione la cui implementazione è lasciata al futuro. Necessità dell'implementazione di un
// Event Listener e di una certa competenza sulla implementazione di quest'ultimo per le trasmissioni via rete tra dispositivo e server.

//invioNotifica() -> metodo/funzione la cui implementazione necessita di competenza nell'implementazione di comunicazioni con altri 
//dispositivi collegati alla rete
class NotificaRitardo extends Notifica {
    constructor(tempo){
        testo = "Testo automatico delle notifiche di ritardo dell'ordine";
        this.tempo = tempo;
    }
}