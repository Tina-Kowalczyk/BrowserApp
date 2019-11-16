"use strict";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


class Database {
    constructor(){
        firebase.initializeApp({
            apiKey: "AIzaSyBEBm35gLXpwIa0VZye6coFas_vWI2PzDY",
            authDomain: "browserapp-5dda9.firebaseapp.com",
            databaseURL: "https://browserapp-5dda9.firebaseio.com",
            projectId: "browserapp-5dda9",
            storageBucket: "browserapp-5dda9.appspot.com",
            messagingSenderId: "44691335887",
            appId: "1:44691335887:web:28704268e3d27391db65ba"
        });
        this._db = firebase.firestore();
        this._gerichte=this._db.collection("gerichte");
    }

    createDemoData(){
        let gerichte =  this.selectAllGerichte();

        //Festlegen von einigen Demodaten, wenn noch keine vorhanden sind
        if(gerichte.length < 3){
            this.saveGerichte([{
                "id" : "Pizza",
                "Kalorien": "300",
            },
        {
            "id" : "Gummibärchen",
            "Kalorien": "300"
        },
    {
        "id" : "Fruchtgummis",
        "Kalorien": "300"
    },
{
    "id" : "Müsli",
    "Kalorien": "300"
}]);
        }
    }

    //Aufrufen aller vorhandenen Studenten
    selectAllGerichte(){
        return this._db.collection("gerichte").get();
    }

    //Aufrufen aller Studenten, sortiert nach dem übergebenen Kriterium (z.B. Name, Vorname, etc)
    selectAllGerichteByOrder(order){
        return this._db.collection("gerichte").orderBy(order).get();
    }

    selectAllGerichteByOrderBackwards(order){
        return this._db.collection("gerichte").orderBy(order, "desc").get();
    }

    //Gibt einen Student anhand seiner ID zurück
    //Die ID ist dabei die Mitarbeiter-ID
    selectGerichtById(id){
        return this._gerichte.doc(id).get();
    }

    /*Speichern eines Studenten
    Der Aufbau sollte wie folgt aussehen:
    "Name" : "Nachname",
    "Vorname": "Vorname",
    "Jahrgang": "2018",
    "Semester": "3.",
    "Hochschule": "DHBW",
    "Studiengang": "Wirtschaftsinformatik",
    "Geburtstag": "17.08.1997",
    "id": "375925",
    "Notizen": "Notizen als String"*/
    saveGericht(gericht){
        this._gerichte.doc(gericht.id).set(gericht);
    }

    //Student löschen, anhand der Mitarbeiter-Id
    deleteGerichtById(id){
        return this._gerichte.doc(id).delete();
    }

    //Speichern mehrerer Studenten
    saveGerichte(gerichte) {
        console.log("gerichte");
        let batch = this._db.batch();

        gerichte.forEach(gericht => {
            let dbGericht = this._gerichte.doc(gericht.id);
            batch.set(dbGericht, gericht);
        });

        return batch.commit();
    }

    //löschen mehrerer Studenten anhand der Mitarbeiter-Id
    deleteGerichteById(ids){
        let batch = this._db.batch();

        ids.forEach(id => {
            let dbGericht = this._gerichte.doc(id);
            batch.delete(dbGericht);
        });

        return batch.commit();
    }
}

export default Database;
