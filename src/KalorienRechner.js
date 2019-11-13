/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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
