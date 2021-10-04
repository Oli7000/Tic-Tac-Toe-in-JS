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
        replayX();
    }
    else if ((box2 == 'X') && (box4 == 'X') && (box7 == 'X')) {
        replayX();
    }
    else if ((box7 == 'X') && (box8 == 'X') && (box9 == 'X')) {
        replayX();
    }
    else if ((box3 == 'X') && (box6 == 'X') && (box9 == 'X')) {
        replayX();
    }
    else if ((box1 == 'X') && (box5 == 'X') && (box9 == 'X')) {
        replayX();
    }
    else if ((box3 == 'X') && (box5 == 'X') && (box7 == 'X')) {
        replayX();
    }
    else if ((box2 == 'X') && (box5 == 'X') && (box8 == 'X')) {
        replayX();
    }
    else if ((box4 == 'X') && (box5 == 'X') && (box6 == 'X')) {
        replayX();
    }

    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((box1 == '0') && (box2 == '0') && (box3 == '0')) {
        replay0();
    }
    else if ((box1 == '0') && (box4 == '0') && (box7 == '0')) {
        replay0();
    }
    else if ((box7 == '0') && (box8 == '0') && (box9 == '0')) {
        replay0();
    }
    else if ((box3 == '0') && (box6 == '0') && (box9 == '0')) {
        replay0();
    }
    else if ((box1 == '0') && (box5 == '0') && (box9 == '0')) {
        replay0();
    }
    else if ((box3 == '0') && (box5 == '0') && (box7 == '0')) {
        replay0();
    }
    else if ((box2 == '0') && (box5 == '0') && (box8 == '0')) {
        replay0();
    }
    else if ((box4 == '0') && (box5 == '0') && (box6 == '0')) {
        replay0();
    }

    // Check if it's a tie
    else if ((box1 == 'X' || box1 == '0') && (box2 == 'X'
        || box2 == '0') && (box3 == 'X' || box3 == '0') &&
        (box4 == 'X' || box4 == '0') && (box5 == 'X' ||
            box5 == '0') && (box6 == 'X' || box6 == '0') &&
        (box7 == 'X' || box7 == '0') && (box8 == 'X' ||
            box8 == '0') && (box9 == 'X' || box9 == '0')) {
        window.alert('Match Tie');
    }
}

function replay0() {
    if (confirm('Player 0 won! Play again?')) {
        // Play again
        console.log('Thing was saved to the database.');
        restart();
    } else {
        // Not again
        reset();
    }
}

function replayX() {
    if (confirm('Player X won! Play again?')) {
        // Play again
        console.log('Thing was saved to the database.');
        restart();
    } else {
        // Not again
        reset();
    }
}

function reset() {
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