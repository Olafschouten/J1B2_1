const prijs =  {fris:2.00, bier:2.50, wijn:4.50, snacks8:4.50, snacks16:8.50};

var producten = {fris:0, bier:0, wijn:0, snacks8:0, snacks16:0};

var Aantal;
var keuze;

function bestelling() {

    while(keuze != "stop"){

        keuze = prompt("Kies tussen fris, bier, wijn of een snack");

        if(keuze == "fris"){
            Aantal = parseInt(prompt("kies hoeveel fris uw wilt."));
            producten["fris"] = producten["fris"] + Aantal;
            bestelling();
        }

        else if(keuze == "bier"){
            Aantal = parseInt(prompt("kies hoeveel bier uw wilt."));
            producten["bier"] = producten["bier"] + Aantal;
            bestelling();
        }

        else if(keuze == "wijn"){
            Aantal = parseInt(prompt("kies hoeveel wijn uw wilt."));
            producten["wijn"] = producten["wijn"] + Aantal;
            bestelling();
        }

        else if(keuze == "snack"){
            snacks();
        }

        else if(keuze == "stop"){
            berekening();
        }

        else{
            alert("Uw kan dit niet bestellen.");
            bestelling();
        }
    }
}

bestelling();

// function voor bitterballen

function snacks(){
    Aantalsnacks = parseInt(prompt("Kies tussen 8 of 16 Snacks"));

    if(Aantalsnacks == 8){
        Aantal = parseInt(prompt("Hoeveel schalen van 8 snacks wilt uw?"));
        producten["snacks8"] = producten["snacks8"] + Aantal;
        bestelling();
    }

    else if(Aantalsnacks == 16){
        Aantal = parseInt(prompt("Hoeveel schalen van 16 snacks wilt uw?"));
        producten["snacks16"] = producten["snacks16"] + Aantal;
        bestelling();
    }
}

// function voor bereken van rekening.

function berekening() {

    var prijzen = [producten["fris"] * prijs["fris"], producten["bier"] * prijs["bier"], producten["wijn"] * prijs["wijn"], producten["snacks8"] * prijs["snacks8"], producten["snacks16"] * prijs["snacks16"] ]
    var Totaalprijs =  prijzen[0] + prijzen[1] + prijzen[2] + prijzen[3] + prijzen[4];

    if(producten["fris"] >= 1){
        document.write("Aantal fris: " + producten["fris"] + "<br>");
        document.write("Prijs fris: €" + prijzen[0] + "<br><br>");
    }

    if(producten["bier"] >= 1){
        document.write("Aantal bier: " + producten["bier"] + "<br>");
        document.write("Prijs bier: €" + prijzen[1] + "<br><br>");
    }

    if(producten["wijn"] >= 1){
        document.write("Aantal wijn: " + producten["wijn"] + "<br>");
        document.write("Prijs bier: €" + prijzen[2] + "<br><br>");
    }

    if(producten["snacks8"] >= 1){
        document.write("Aantal schalen van 8 snacks: " + producten["snacks8"] + "<br>");
        document.write("Prijs 8 stuks snacks: €" + prijzen[3] + "<br><br>");
    }

    if(producten["snacks16"] >= 1){
        document.write("Aantal schalen van 16 snacks: " + producten["snacks16"] + "<br>");
        document.write("Prijs 16 stuks snacks: €" + prijzen[4] + "<br><br>");
    }
    document.write("<br>Totaal prijs: €" + Totaalprijs);
}