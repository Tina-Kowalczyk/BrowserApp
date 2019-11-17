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
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.aktivDropbtn')) {
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
      document.getElementById("aktivButton").innerHTML=value;
  }

function berechnen(){
    let gewicht= document.getElementById("gewicht").innerHTML;
    let groesse= document.getElementById("groesse").innerHTML;
    let alter= document.getElementById("groesse").innerHTML;
    let geschlecht=getElementById("geschlecht").innerHTML;
    let aktivitaet=getElementById("aktivDropbtn").innerHTML;

    if (geschlecht.value=="männlich"){
        geschlecht=5;
    }
    else if (geschlecht.value=="weiblich") {
        geschlecht=-161;
    }

    let ergebnis= ((10 * gewicht) + (6.25 * groesse) - (5 * alter) + geschlecht) * aktivitaet;
}

export default KalorienbedarfPage;
