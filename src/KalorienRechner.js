/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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
        break;
    }
    else if (aktivitaet==0||geschlecht==0||gewicht==0||alter==0||groesse==0){}
    /*let ergebnis= ""+gewicht+" "+groesse+" "+alter+" "+geschlecht+" "+aktivitaet;*/

    let ergebnis= (((10 * gewicht) + (6.25 * groesse) - (5 * alter) + geschlecht) * aktivitaet);

    document.getElementById("ergebnis").innerHTML= "Dein täglicher Kalorienbedarf beträgt "+ergebnis+" Kcal";

}
