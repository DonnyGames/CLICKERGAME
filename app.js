

   
//starter message//
console.log("Welcome player!");


//variables//
var scripts = 0;
var image1 = document.getElementById("image1")
var tagCost = 15;
var tags = 0;
var VarCost = 100;
var Vars = 0;
var ClickingPower = 1;
var buttonVar =  document.getElementById("buttonVar");
var bakkieCost = 1000;
var bakkies = 0;

//functions//
function addScore(amount) {
    scripts = scripts + amount;
    document.getElementById("scripts").innerHTML = scripts;

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
        updateSPS();
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
        updateSPS()
        
    }
}

function buyBakkie() {
    if (scripts >= bakkieCost) {
        scripts = scripts - bakkieCost;
        bakkies = bakkies + 1
        bakkieCost = Math.round(bakkieCost * 1.15);
        document.getElementById("scripts").innerHTML = scripts;
        document.getElementById("bakkieCost").innerHTML = bakkieCost;
        document.getElementById("bakkies").innerHTML = bakkies;
        console.log(`Tag ${bakkies} has been bought successfully`);
        updateSPS();
    }
}



function updateSPS () {
    scriptspersecond = tags + Vars * 5 + bakkies * 20;
    document.getElementById("scriptspersecond").innerHTML = scriptspersecond;
}

setInterval (function () {
    scripts = scripts + tags;
    scripts = scripts + Vars * 5
    scripts = scripts + bakkies * 20;
    document.getElementById("scripts").innerHTML = scripts;
    document.title = scripts + " scripts - Javascript clicker";
}, 1000); //1000 ms = 1secons lol

setInterval(() => { if (isNaN(scripts)) location.reload(); }, 100);