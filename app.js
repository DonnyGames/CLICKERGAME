//starter message//
console.log("Welcome player!");


//variables//
var scripts = 0;
var image1 = document.getElementById("image1")
var tagCost = 15;
var tags = 0;
var VarCost = 100;
var Vars = 0;
var ClickingPower = 1
var buttonVar =  document.getElementById("buttonVar")





//functions//
function addScore(amount) {
    scripts = scripts + amount;

    if (scripts < 1000) {
        document.getElementById("scripts").innerHTML = scripts;
    } else {
        console.log(`${scripts/1000}`.length)

        if (`${scripts/1000}`.length > 3) {
            document.getElementById("scripts").innerHTML = `${scripts / 1000}`.slice(0, -2) + "k";
        } else {
            document.getElementById("scripts").innerHTML = `${scripts / 1000}k`;
        }
    }
}

function imagePressed() {
    addScore(ClickingPower);
}

function buyTag() {
    if (scripts >= tagCost) {
        scripts = scripts - tagCost;
        tags = tags + 1
        tagCost = Math.round(tagCost * 1.15);
        document.getElementById("scripts").innerHTML = scripts;
        document.getElementById("tagCost").innerHTML = tagCost;
        document.getElementById("tags").innerHTML = tags;
        console.log(`Tag ${tags} has been bought successfully`);
    }
}

function buyVar() {
    if (scripts >= VarCost) {
        scripts = scripts - VarCost;
        Vars = Vars + 1
        VarCost = Math.round(VarCost * 1.15);
        document.getElementById("scripts").innerHTML = scripts;
        document.getElementById("VarCost").innerHTML = VarCost;
        document.getElementById("Vars").innerHTML = Vars;
        console.log(`Variable ${Vars} has been bought successfully`);
    }
}

setInterval (function () {
    scripts = scripts + tags;
    scripts = scripts + Vars * 5;
}, 1000); //1000 ms = 1secons lol

setInterval(() => { if (isNaN(scripts)) location.reload(); }, 100);