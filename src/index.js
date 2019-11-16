"use strict";
//JS Datei für das Hauptfenster

import stylesheet from "./index.css";
import App from "./app.js";
import Database from "./database.js";

//Wenn DOM ist bereit
window.addEventListener("load", ()=>{
    //starte Anwendung
    console.log("load");
    let app = new App();
    app.start();
});
