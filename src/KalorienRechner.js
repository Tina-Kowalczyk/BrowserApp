import stylesheet from "./KalorienRechner.css";
import App from "./app.js";
import Database from "./database.js";

let _app="";
let _db ="";
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
class KalorienbedarfPage {
    constructor(app){
        this._app = _app;
        _app = this._app;
        _db = app._db;

    }

    onShow(){
        console.log(document.querySelector("#section_KalorienRechner"));
        let section = document.querySelector("#section_KalorienRechner").cloneNode(true);

        return {
            className: "section_KalorienRechner",
            main: section.querySelectorAll("section > *"),
        };
    };
    onLoad(){
        myFunction();
        myAktivFunction();
        berechnen();
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
function myFunction() {
  document.getElementById("aktivButton").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 function myAktivFunction(value) {
      document.getElementById("aktivDrop").innerHTML=value;
  }

function berechnen(){

    let gewicht= document.getElementById("gewicht").value;
    let groesse= document.getElementById("groesse").value;
    let alter= document.getElementById("alter").value;
    let geschlecht;
    let aktivitaet;

    if (document.getElementById("männlich").checked==true){
        geschlecht=5;
    }
    else if (document.getElementById("weiblich").checked==true) {
        geschlecht=-161;
    }
    else {
        geschlecht=0;
    }



    switch (document.getElementById("aktivDrop").innerHTML) {
    case "wenig aktiv":
      aktivitaet = 1.2;
      break;
    case "leicht aktiv":
      aktivitaet = 1.375;
      break;
  case "moderat aktiv":
    aktivitaet = 1.55;
    break;
  case "sehr aktiv":
    aktivitaet=1.725;
    break;
  case "extrem aktiv":
    aktivitaet=1.9
    break;
    default:
    aktivitaet=0;
    }


    if (aktivitaet==0||geschlecht==0||gewicht==0||alter==0||groesse==0){
        alert("Bitte alle Felder mit Werten größer als 0 ausfüllen!");
    }


    let ergebnis= (((10 * gewicht) + (6.25 * groesse) - (5 * alter) + geschlecht) * aktivitaet);

    document.getElementById("ergebnis").innerHTML= "Dein täglicher Kalorienbedarf beträgt "+ergebnis+" Kcal";
}

export default KalorienbedarfPage;
