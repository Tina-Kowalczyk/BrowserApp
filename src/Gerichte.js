import stylesheet from "./Gerichte.css";
import Database from "./database.js";
import Index from "./Index.js";
import App from "./app.js";


let _app="";
let _db = "";

class Gerichte{
    constructor(app){
        this._app = _app;
        _app = this._app;
        _db = app._db;

    }

    onShow(){
        console.log(document.querySelector("#section_Gerichte"));
        let section = document.querySelector("#section_Gerichte").cloneNode(true);

        return {
            className: "section_Gerichte",
            main: section.querySelectorAll("section > *"),
        };
    };
    onLoad(){
        //Test
        test();
      //EventListener von Suchen-Button
      //document.getElementById("button_filter").addEventListener("click", suchen);

      //EventListener für Filter-Felder
      //document.getElementById("filter_gericht").addEventListener("keyup", keyType);
      //document.getElementById("filter_kalorien").addEventListener("keyup", keyType);
  }
  onLeave(goon){
    return true;
}
}

function test(){
    _db.saveGericht({
        "id" : "Pizza",
        "Kalorien": "300",
    });
}
function suchen (){
    //Tabelle leeren
    //dient dazu, dass nur die gefundenen Elemente angezeigt werden
    deleteTable("Tabellenhead");
    deleteTable("Tabellenbody");

    //Auslesen der Filtertextfelder und in Kleinbuchstaben verwandeln
    let gericht = document.getElementById("filter_nachname").value.toLowerCase();
    let kcal = document.getElementById("filter_vorname").value.toLowerCase();

    //Überprüfen, ob ein Filter aktiviert ist. Wenn nicht wird die komplette Tabelle angezeigt
    if(gericht=="" && kcal==""){
        anzeigen();
    } else {
        //Aufrufen aller Studenten rückwärts
        _db.selectAllGerichteByOrderBackwards("Gericht").then(function (querySnapshot) {
            //jeden Studenten überprüfen
            querySnapshot.forEach(function(doc){
                //wenn einer der Filter im Studenten beinhaltet wird, wird dieser der Tabelle hinzugefügt

                //Flag, der anzeigt, ob ein Filter auf den Studenten zutrifft
                let gerichtflag = false;
                let kalorienflag = false;

                //Überprüfen, ob etwas in den Feldern steht
                if(gericht!==""){
                    //überprüfen, ob das, was im Feld steht, im Studenten vorhanden ist
                    //zu Verbesserung der Suche werden die Strings in Kleinbuchstaben verwandelt
                    //Der Vorgang wird in allen folgenden if-Schleifen wiederholt
                    if(doc.data().Gericht.toLowerCase().indexOf(gericht)>=0){
                        gerichtflag = true;
                    }
                } else {
                    gerichtflag = true;
                }

                if(kcal!==""){
                    if(doc.data().Kalorien.toLowerCase().indexOf(kcal)>=0){
                        kalorienflag = true;
                    }
                } else{
                    gerichtflag = true;
                }


                //Wenn mindestens eine der Bedingungen zutrifft, wird der Student der Tabelle hinzugefügt
                if(gerichtflag && kalorienflag){
                    //Speichern der Daten in Variablen
                    let gericht = doc.data().Gericht;
                    let kalorien = doc.data().Kalorien;

                    //Hinzufügen des Studenten mit den Variablen
                    einfügen(gericht, kalorien);
                }
            });
        });
    }
}

    //Übergebenen Student der Tabelle an erster Stelle hinzufügen
function einfügen (gericht, kcal){
    //Einfügen des Studenten
    //Einfügen von neuer Zeile an erster Stelle in der Tabelle //
    let neueTr = document.getElementById("Tabellenhead").insertRow(2);

    //erzeugen der Tabellenspalten//
    let tdGericht = document.createElement("td");
    let tdKCAL = document.createElement("td");

    //Vergeben von Klassen, damit auf der Handyversion nur der Name angezeigt wird
    tdKCAL.classList.add("handyUnsichtbar");

    let ank = '<a href = "/Gerichte/' + id + '" navigo>';

    //befüllen der Spalten//
    tdName.innerHTML = ank + gericht + " " + kalorien + '</a>';
    tdName.id = id;
    tdGer.innerHTML = ger;
    tdKcal.innerHTML = kcal;

    //hinzufügen der Spalten//
    neueTr.appendChild(tdGericht);
    neueTr.appendChild(tdKCAL);


    //Einfügen von neuer Zeile an erster Stelle in der Tabelle//
    neueTr = null;
    neueTr = document.getElementById("Tabellenbody").insertRow(2);
    let td = document.createElement("td");
}

export default Gerichte;
