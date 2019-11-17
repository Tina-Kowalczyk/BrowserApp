"use strict";

import stylesheet from "./app.css";

import Navigo from "../node_modules/navigo/lib/navigo.js";
import Database from "./database.js";

import Gerichte from "./Gerichte.js";
import KalorienbedarfPage from "./KalorienRechner.js";
import Bilanz from "./Bilanz.js";

class App {
    constructor() {
        this._title = "Studentenübersicht";
        this._currentView = null;

        this._router = new Navigo();
        this._currentUrl = "/Gerichte";
        this._navAborted = false;
        this._db = new Database();
        this._db.createDemoData();

        this._router.on({
            "/": () => this.showGerichtePage(),
            "/Home": () => this.showGerichtePage(),
            "/Gerichte": () => this.showGerichtePage(),
            "/Bilanz": () => this.showBilanzPage(),
            "/Kalorienbedarf": () => this.showKalorienbedarfPage(),
        });

        this._router.hooks({
            after: (params) => {
                if (!this._navAborted) {
                    this._currentUrl = this._router.lastRouteResolved().url;
                } else {
                    this._router.pause(true);
                    this._router.navigate(this._currentUrl);
                    this._router.pause(false);
                    this._navAborted = false;
                }
            }
        });
    }

    start() {
        console.log("start");
        this._router.resolve();
    }

    showGerichtePage() {
        let view = new Gerichte(this);
        this._switchVisibleView(view);
    }

    showBilanzPage() {
        let view = new Bilanz(this);
        this._switchVisibleView(view);
    }

    showKalorienbedarfPage() {
        let view = new KalorienbedarfPage(this);
        this._switchVisibleView(view);
    }

    _switchVisibleView(view) {
        let newUrl = this._router.lastRouteResolved().url;
        let goon = () => {
            this._router.navigate(newUrl + "?goon");
        }

        if (this._currentView && !this._currentView.onLeave(goon)) {
            this._navAborted = true;
            return false;
        }

        this._currentView = view;
        this._switchVisibleContent(view.onShow());
        view.onLoad();
        return true;
    }

    _switchVisibleContent(content) {
        // <header> und <main> des HTML-Grundgerüsts ermitteln
        let app = document.querySelector("#app");
        let main = document.querySelector("#app > main");

        // Zuvor angezeigte Inhalte entfernen
        // Bei der Topbar nur die untere Zeile, im Hauptbereich alles!
        app.className = "";
        main.innerHTML = "";

        // CSS-Klasse übernehmen, um die viewspezifischen CSS-Regeln zu aktivieren
        if (content && content.className) {
            app.className = content.className;
        }

        // Neue Inhalte des Hauptbereichs einfügen
        if (content && content.main) {
            content.main.forEach(element => {
                main.appendChild(element);
            });
        }
        // Navigo an die Links in der View binden
        this._router.updatePageLinks();
    }


}

export default App;