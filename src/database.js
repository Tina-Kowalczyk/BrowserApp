"use strict";

class Database {
    /**
     * Konstruktor mit der Verbindung zur Database
     */
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyD0Z_5DRMdWdlaUe9feahTYsQNRVDKYzzM",
            authDomain: "test-72b3a.firebaseapp.com",
            databaseURL: "https://test-72b3a.firebaseio.com",
            projectId: "test-72b3a",
            storageBucket: "test-72b3a.appspot.com",
            messagingSenderId: "496635632514",
            appId: "1:496635632514:web:4567d149cda58011e4cd9b",
        });

        this._db = firebase.firestore();
        this._gerichte = this._db.collection("gerichte");
    }

    async createDemoData() {
        let gerichte = await this.selectAllGerichte();

        if (gerichte.length < 1) {
            this.saveGerichte([{
                "gericht": "schokolade",
                "kcal": "200",
            }, {
                "gericht": "kekse",
                "kcal": "50",
            }, {
                "gericht": "gummibärchen",
                "kcal": "100"
            }]);
        }
    }
    /*
     * Hier werden alle Gerichte, die in der Datenbank gespeichert sind, zurückgegeben
     */
    async selectAllGerichte() {
        let result = await this._gerichte.orderBy("gericht").get();
        let gerichte = [];

        result.forEach(entry => {
            let gericht = entry.data();
            gerichte.push(gericht);
        });

        return gerichte;
    }

    /**
     * Gibt ein ausgewähltes Gericht anhand seines Namens zurück
     */
    async selectGerichtById(gericht) {
        let result = await this._gerichte.doc(gericht).get();
        return result.data();
    }

    /**
     * Speichert ein Gericht in der Datenbank
     */
    saveGericht(gericht) {
        this._gerichte.doc(gericht.gericht).set(gericht);
    }

    /**
     * Löscht ein einzelnes Gericht aus der Datenbank
     */
    async deleteGerichtById(gericht) {
        return this._gerichte.doc(gericht).delete();
    }

    /**
     * Speichert die Gerichte in der Datenbank
     */
    async saveGerichte(gerichte) {
        let batch = this._db.batch();

        gerichte.forEach(gericht => {
            let dbGericht = this._gerichte.doc(gericht.gericht);
            batch.set(dbGericht, gericht);
        });

        return batch.commit();
    }

    /**
     * Löscht Gerichte aus der Datenbank.
     */
    async deleteGerichteById(gerichte) {
        let batch = this._db.batch();

        gerichte.forEach(gericht => {
            let dbGerichte = this._gerichte.doc(gericht);
            batch.delete(dbGerichte);
        });

        return batch.commit();
    }
}
