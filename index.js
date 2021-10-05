var punktestandX = 0;
var punktestandO = 0;

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

function userSelect() {
    // Check if Player X won
    // For that it will check, if on the squares are X on the right possition
    if (((box1.innerText == 'X') && (box2.innerText == 'X') && (box3.innerText == 'X')) ||
        ((box1.innerText == 'X') && (box4.innerText == 'X') && (box7.innerText == 'X')) ||
        ((box7.innerText == 'X') && (box8.innerText == 'X') && (box9.innerText == 'X')) ||
        ((box3.innerText == 'X') && (box6.innerText == 'X') && (box9.innerText == 'X')) ||
        ((box1.innerText == 'X') && (box5.innerText == 'X') && (box9.innerText == 'X')) ||
        ((box3.innerText == 'X') && (box5.innerText == 'X') && (box7.innerText == 'X')) ||
        ((box2.innerText == 'X') && (box5.innerText == 'X') && (box8.innerText == 'X')) ||
        ((box4.innerText == 'X') && (box5.innerText == 'X') && (box6.innerText == 'X'))) {
        punktestandX++;
        replayX(punktestandO, punktestandX);
    }

    // Checking if Player O won
    // For that it will check, if on the squares are O on the right possition
    else if (((box1.innerText == 'O') && (box2.innerText == 'O') && (box3.innerText == 'O')) ||
        ((box1.innerText == 'O') && (box4.innerText == 'O') && (box7.innerText == 'O')) ||
        ((box7.innerText == 'O') && (box8.innerText == 'O') && (box9.innerText == 'O')) ||
        ((box3.innerText == 'O') && (box6.innerText == 'O') && (box9.innerText == 'O')) ||
        ((box1.innerText == 'O') && (box5.innerText == 'O') && (box9.innerText == 'O')) ||
        ((box3.innerText == 'O') && (box5.innerText == 'O') && (box7.innerText == 'O')) ||
        ((box2.innerText == 'O') && (box5.innerText == 'O') && (box8.innerText == 'O')) ||
        ((box4.innerText == 'O') && (box5.innerText == 'O') && (box6.innerText == 'O'))) {
        punktestandO++;
        replayO(punktestandO, punktestandX);
    }

    // Check if it's a tie
    else if ((box1.innerText == 'X' || box1.innerText == 'O') && (box2.innerText == 'X' ||
        box2.innerText == 'O') && (box3.innerText == 'X' || box3.innerText == 'O') &&
        (box4.innerText == 'X' || box4.innerText == 'O') && (box5.innerText == 'X' ||
            box5.innerText == 'O') && (box6.innerText == 'X' || box6.innerText == 'O') &&
        (box7.innerText == 'X' || box7.innerText == 'O') && (box8.innerText == 'X' ||
            box8.innerText == 'O') && (box9.innerText == 'X' || box9.innerText == 'O')) {
        window.alert('Match Tie');
        tie();
    }
}

function replayO(punktestandO, punktestandX) {
    if (confirm('Player O won! Play again?')) {
        // Play again
        reset(punktestandO, punktestandX);
    } else {
        // Not again
        restart();
    }
}

function replayX(punktestandO, punktestandX) {
    if (confirm('Player X won! Play again?')) {
        // Play again
        reset(punktestandO, punktestandX);
    } else {
        // Not again
        restart();
    }
}

function reset(punktestandO, punktestandX) {
    document.getElementById('box1').innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
    document.getElementById("punktestand-title").style.display = "block";
    document.getElementById("punktestand-text").style.display = "block";
    document.getElementById("punktestand-text").innerText = punktestandX + "  :  " + punktestandO;
}

function tie() {
    document.getElementById('box1').innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
}

function restart() {
    location.reload();
}

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("player_turn").style.display = "block";
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("container").style.display = "grid";
}