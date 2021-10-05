var punktestandX = 0;
var punktestand0 = 0;

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
        replayX(punktestand0, punktestandX);
    }

    // Checking if Player 0 won
    // For that it will check, if on the squares are 0 on the right possition
    else if (((box1.innerText == 'O') && (box2.innerText == 'O') && (box3.innerText == 'O')) ||
        ((box1.innerText == 'O') && (box4.innerText == 'O') && (box7.innerText == 'O')) ||
        ((box7.innerText == 'O') && (box8.innerText == 'O') && (box9.innerText == 'O')) ||
        ((box3.innerText == 'O') && (box6.innerText == 'O') && (box9.innerText == 'O')) ||
        ((box1.innerText == 'O') && (box5.innerText == 'O') && (box9.innerText == 'O')) ||
        ((box3.innerTex == 'O') && (box5.innerText == 'O') && (box7.innerText == 'O')) ||
        ((box2.innerText == 'O') && (box5.innerText == 'O') && (box8.innerText == 'O')) ||
        ((box4.innerText == 'O') && (box5.innerText == 'O') && (box6.innerText == 'O'))) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }

    // Check if it's a tie
    else if ((box1.innerText == 'X' || box1.innerText == 'O') && (box2.innerText == 'X' ||
        box2.innerText == 'O') && (box3.innerTex == 'X' || box3.innerTex == 'O') &&
        (box4.innerText == 'X' || box4.innerText == '0') && (box5.innerText == 'X' ||
            box5.innerText == 'O') && (box6.innerText == 'X' || box6.innerText == 'O') &&
        (box7.innerText == 'X' || box7.innerText == 'O') && (box8.innerText == 'X' ||
            box8.innerText == 'O') && (box9.innerText == 'X' || box9.innerText == 'O')) {
        window.alert('Match Tie');
        tie();
    }
}

function replay0(punktestand0, punktestandX) {
    if (confirm('Player 0 won! Play again?')) {
        // Play again
        reset(punktestand0, punktestandX);
    } else {
        // Not again
        restart();
    }
}

function replayX(punktestand0, punktestandX) {
    if (confirm('Player X won! Play again?')) {
        // Play again
        reset(punktestand0, punktestandX);
    } else {
        // Not again
        restart();
    }
}

function reset(punktestand0, punktestandX) {
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
    document.getElementById("punktestand-text").innerText = punktestandX + "  :  " + punktestand0;
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