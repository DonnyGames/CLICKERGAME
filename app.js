

   
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
var gitRepoCost = 5000;
var gitRepos = 0;

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
function buygitRepo() {
    if (scripts >= gitRepoCost) {
        scripts = scripts - gitRepoCost;
        gitRepos = gitRepos + 1
        gitRepoCost = Math.round(gitRepoCost * 1.15);
        document.getElementById("scripts").innerHTML = scripts;
        document.getElementById("gitRepoCost").innerHTML = gitRepoCost;
        document.getElementById("gitRepos").innerHTML = gitRepos;
        console.log(`Reprository ${gitRepos} has been bought successfully`);
        updateSPS();
    }
}




function updateSPS () { 
    scriptspersecond = tags + Vars * 5 + bakkies * 20 + gitRepos * 75;
    document.getElementById("scriptspersecond").innerHTML = scriptspersecond;
}


function saveGame() {
    var gameSave = {
scripts:scripts,
ClickingPower:ClickingPower,
tagCost:tagCost,
tags:tags,
VarCost:VarCost,
Vars:Vars,
bakkieCost:bakkieCost,
bakkies:bakkies,
gitRepoCost:gitRepoCost,
gitRepos:gitRepos

    };

    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.scripts !== "undefined") {
        scripts = savedGame.scripts;
    }
    if (typeof savedGame.ClickingPower !== "undefined") {
        ClickingPower = savedGame.ClickingPower;
    }
    if (typeof savedGame.tagCost !== "undefined") {
        tagCost = savedGame.tagCost;
    }
    if (typeof savedGame.tags !== "undefined") {
        tags = savedGame.tags;
    }
    if (typeof savedGame.VarCost !== "undefined") {
        VarCost = savedGame.VarCost;
    }
    if (typeof savedGame.Vars !== "undefined") {
       Vars = savedGame.Vars;
    }
    if (typeof savedGame.bakkieCost !== "undefined") {
        bakkieCost = savedGame.bakkieCost;
    }
    if (typeof savedGame.bakkies !== "undefined") {
        bakkies = savedGame.bakkies;
    }
    if (typeof savedGame.gitRepoCost !== "undefined") {
        gitRepoCost = savedGame.gitRepoCost;
    }
    if (typeof savedGame.gitRepos !== "undefined") {
        gitRepos = savedGame.gitRepos;
    }
}



function resetGame() {
    if (confirm("Are you sure you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

window.onload = function() {
loadGame();
updateSPS();
document.getElementById("scripts").innerHTML = scripts;
        document.getElementById("tagCost").innerHTML = tagCost;
        document.getElementById("tags").innerHTML = tags;
        document.getElementById("VarCost").innerHTML = VarCost;
        document.getElementById("Vars").innerHTML = Vars;
        document.getElementById("bakkieCost").innerHTML = bakkieCost;
        document.getElementById("bakkies").innerHTML = bakkies;
        document.getElementById("gitRepoCost").innerHTML = gitRepoCost;
        document.getElementById("gitRepos").innerHTML = gitRepos;

};

setInterval (function () {
    scripts = scripts + tags;
    scripts = scripts + Vars * 5
    scripts = scripts + bakkies * 20;
    scripts = scripts + gitRepos * 75;
    document.getElementById("scripts").innerHTML = scripts;
    document.title = scripts + " scripts - Javascript clicker";
}, 1000); //1000 ms = 1secons lol

setInterval(function() {
saveGame();
},30000);

setInterval(() => { if (isNaN(scripts)) location.reload(); }, 100);


document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }
}, false);



