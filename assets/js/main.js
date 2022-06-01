// Übung lev2_3: getElementsByTagName
// In dieser Übung werden wir die getElementsByTagName Methode lernen.
// Schreibe eine Funktion, die beim Anklicken des “Change me”-Buttons, die Button- und Hintergrundfarbe der einzelnen Elemente ändert.
// Hinweise:
// Nutze die Methode getElementById
// Nutze die Methode getElementsByTagName
// Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333
// Denk an den index[]

let navHome = document.getElementById("navHome");
let navNews = document.getElementById("navNews");
let navContact = document.getElementById("navContact");
let navChange = document.getElementById("navChange");
//let navAll = (document.getElementById("navHome") + document.getElementById("navNews") + document.getElementById("navContact") + document.getElementById("navChange"));


function change() {
    console.log("worksss");
    navHome.style.backgroundColor = "#f6c89f";
    navHome.style.color = "#666";
    navNews.style.backgroundColor = "#ffe7d1";
    navNews.style.color = "#666";
    navContact.style.backgroundColor = "#4b8e8d";
    navContact.style.color = "#666";
    navChange.style.backgroundColor = "#396362";
    navChange.style.color = "#666";
    //navAll.style.Color = "#666";
};

//DOM-lvl1-2-lev2_3
