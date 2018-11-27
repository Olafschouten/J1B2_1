var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;

const prijsfris = 1.50;
const prijsbier = 2.50;
const prijswijn = 1.75;

var aantal8 = 0;
var aantalsnack8 = 0;
var aantal16 = 0;
var aantalsnack16 = 0;

const prijssnack8 = 4.50;
const prijssnack16 = 8.00;

var invoer
var aantal



function bestelling() {
    while (invoer != 'stop') {
        invoer = prompt("Wat wilt u bestellen?");
        if (invoer == 'fris') {
            aantal = parseInt(prompt('Hoeveel fris wilt u bestellen?'));
            aantalfris = aantalfris + aantal;
            console.log(aantalfris);
            bestelling();
        }
        else if (invoer == 'bier') {
            aantal = parseInt(prompt('Hoeveel bier wilt u bestellen?'));
            aantalbier = aantalbier + aantal;
            console.log(aantalbier);
            bestelling();
        }
        else if (invoer == 'wijn') {
            aantal = parseInt(prompt('Hoeveel wijn wilt u bestellen?'));
            aantalwijn = aantalwijn + aantal;
            console.log(aantalwijn);
            bestelling();
        }
        else if (invoer == 'stop') {
            console.log('if check stop');
            eindOrder();

        } else if (invoer == 'snack') {
            snack();
        }
        else {
            alert('U kunt dit hier niet bestellen.');
            bestelling();
        }
    }


}

bestelling();

function snack() {
    aantalsnack = parseInt(prompt('Wilt u 8 of 16 bitterballen bestellen?'));
    if (aantalsnack == '8') {
        aantalsnack8 = aantalsnack + aantalsnack8;
        aantal = parseInt(prompt('Hoeveel schalen wilt u bestellen?'));
        aantal8 = aantal8 + aantal;
        bestelling();
    }
    else if (aantalsnack == '16') {
        aantalsnack16 = aantalsnack + aantalsnack16;
        console.log(aantalsnack16);
        aantal = parseInt(prompt('Hoeveel schalen wilt u bestellen?'));
        aantal16 = aantal16 + aantal;
        bestelling();
    }

    else {
        alert('Je kunt alleen kiezen tussen 8 of 16 snacks!');
        snack();
    }
}


function eindOrder() {
    document.write('<h1>Order Bon: </h1>');
    if (aantalfris >= 1) {
        document.write('Aantal Fris: ' + aantalfris + '<br>');
        document.write('€' + aantalfris * prijsfris + '<br>');
    }
    if (aantalbier >= 1) {
        document.write('Aantal Bier: ' + aantalbier + '<br>');
        document.write('€' + aantalbier * prijsbier + '<br>');
    }
    if (aantalwijn >= 1) {
        document.write('Aantal Wijn: ' + aantalwijn + '<br>');
        document.write('€' + aantalwijn * prijswijn + '<br><br><br>');
    }
    if (aantal8 >= 1) {
        document.write('Aantal schalen 8 snacks: ' + aantal8 + '<br>');
        document.write('€ ' + aantal8 * prijssnack8 + '<br>');
    }
    if (aantal16 >= 1) {
        document.write('Aantal schalen 16 snacks: ' + aantal16 + '<br>');
        document.write('€ ' + aantal16 * prijssnack16 + '<br>');
    }

    var totaalfris = aantalfris * prijsfris;
    var totaalbier = aantalbier * prijsbier;
    var totaalwijn = aantalwijn * prijswijn;
    var totaalsnack8 = aantal8 * prijssnack8;
    var totaalsnack16 = aantal16 * prijssnack16;

    if ((totaalfris + totaalbier + totaalwijn + totaalsnack8 + totaalsnack16) >= 1) {
        document.write('Totaal: €' + (totaalfris + totaalbier + totaalwijn + totaalsnack8 + totaalsnack16));
        console.log(totaalfris + totaalbier + totaalwijn);
    } else {
        document.write('Je hebt niks besteld!');
    }
}