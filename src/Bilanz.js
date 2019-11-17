import stylesheet from "./bilanz.css";
import App from "./app.js";
import Database from "./database.js";
import KalorienRechner from "./KalorienRechner.js";

class Bilanz {
    constructor(app) {
        this._app = _app;
        _app = this._app;
        _db = app._db;

    }


    onShow() {
        let section = document.querySelector("#section_Bilanz").cloneNode(true);

        return {
            className: "section_Bilanz",
            main: section.querySelectorAll("section > *"),
        };
    };
    onLoad() {
        //EventListener von Suchen-Button
        document.getElementById("button_filter").addEventListener("click", suchen);

        //EventListener für Filter-Felder
        document.getElementById("filter_gericht").addEventListener("keyup", keyType);
        document.getElementById("filter_kalorien").addEventListener("keyup", keyType);
    }
    onLeave(goon) {
        return true;
    }
    MahlzeitBerechnen(Mahlzeiten) {
        let Gesamt = 0;
        for (i = 0; i >= Mahzeiten.length; i++) {
            Gesamt = Gesamt + Mahlzeit[i];
        }
        return Gesamt;
    }
}
export default Bilanz;