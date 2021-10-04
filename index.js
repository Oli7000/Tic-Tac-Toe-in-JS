var punktestandX = 0;
var punktestand0 = 0;

function userSelect() {
    var box1 = document.getElementById("box1").innerText;
    var box2 = document.getElementById("box2").innerText;
    var box3 = document.getElementById("box3").innerText;
    var box4 = document.getElementById("box4").innerText;
    var box5 = document.getElementById("box5").innerText;
    var box6 = document.getElementById("box6").innerText;
    var box7 = document.getElementById("box7").innerText;
    var box8 = document.getElementById("box8").innerText;
    var box9 = document.getElementById("box9").innerText;

    if ((box1 == 'X') && (box2 == 'X') && (box3 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box2 == 'X') && (box4 == 'X') && (box7 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box7 == 'X') && (box8 == 'X') && (box9 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box3 == 'X') && (box6 == 'X') && (box9 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box1 == 'X') && (box5 == 'X') && (box9 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box3 == 'X') && (box5 == 'X') && (box7 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box2 == 'X') && (box5 == 'X') && (box8 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }
    else if ((box4 == 'X') && (box5 == 'X') && (box6 == 'X')) {
        punktestandX++;
        replayX(punktestand0, punktestandX);
    }

    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((box1 == '0') && (box2 == '0') && (box3 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box1 == '0') && (box4 == '0') && (box7 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box7 == '0') && (box8 == '0') && (box9 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box3 == '0') && (box6 == '0') && (box9 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box1 == '0') && (box5 == '0') && (box9 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box3 == '0') && (box5 == '0') && (box7 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box2 == '0') && (box5 == '0') && (box8 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }
    else if ((box4 == '0') && (box5 == '0') && (box6 == '0')) {
        punktestand0++;
        replay0(punktestand0, punktestandX);
    }

    // Check if it's a tie
    else if ((box1 == 'X' || box1 == '0') && (box2 == 'X'
        || box2 == '0') && (box3 == 'X' || box3 == '0') &&
        (box4 == 'X' || box4 == '0') && (box5 == 'X' ||
            box5 == '0') && (box6 == 'X' || box6 == '0') &&
        (box7 == 'X' || box7 == '0') && (box8 == 'X' ||
            box8 == '0') && (box9 == 'X' || box9 == '0')) {
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