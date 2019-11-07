"use strict";

import stylesheet from "./index.css";
import GerichtAuswahl from "./GerichtAuswahl.js";
   // Erst loslaufen, wenn das Document Object Modul bereit ist
   window.addEventListener("load", () => {
       // Anwendung starten
       let app = new App();
       app.start();
   });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
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
