class Bilanz{
    constructor(app){
        this._app = _app;
        _app = this._app;
        _db = app._db;

    }

    onShow(){
        let section = document.querySelector("#section_Bilanz").cloneNode(true);

        return {
            className: "section_Bilanz",
            main: section.querySelectorAll("section > *"),
        };
    };
    onLoad(){
      //EventListener von Suchen-Button
      document.getElementById("button_filter").addEventListener("click", suchen);

      //EventListener für Filter-Felder
      document.getElementById("filter_gericht").addEventListener("keyup", keyType);
      document.getElementById("filter_kalorien").addEventListener("keyup", keyType);
  }
  onLeave(goon){
    return true;
}
}

export default Bilanz;
