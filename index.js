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
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((box2 == 'X') && (box4 == 'X') && (box7 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";

        window.alert('Player X won');
    }
    else if ((box7 == 'X') && (box8 == 'X') && (box9 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((box3 == 'X') && (box6 == 'X') && (box9 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((box1 == 'X') && (box5 == 'X') && (box9 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((box3 == 'X') && (box5 == 'X') && (box7 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((box2 == 'X') && (box5 == 'X') && (box8 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((box4 == 'X') && (box5 == 'X') && (box6 == 'X')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }

    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((box1 == '0') && (box2 == '0') && (box3 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box1 == '0') && (box4 == '0') && (box7 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box7 == '0') && (box8 == '0') && (box9 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box3 == '0') && (box6 == '0') && (box9 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box1 == '0') && (box5 == '0') && (box9 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box3 == '0') && (box5 == '0') && (box7 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box2 == '0') && (box5 == '0') && (box8 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
    }
    else if ((box4 == '0') && (box5 == '0') && (box6 == '0')) {
        document.getElementById('gewonnen')
            .innerHTML = "Player 0 won";

        if (confirm('Do you want to play again?')) {
            // Save it!
            console.log('Thing was saved to the database.');
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }

    // 
    else if ((box1 == 'X' || box1 == '0') && (box2 == 'X'
        || box2 == '0') && (box3 == 'X' || box3 == '0') &&
        (box4 == 'X' || box4 == '0') && (box5 == 'X' ||
            box5 == '0') && (box6 == 'X' || box6 == '0') &&
        (box7 == 'X' || box7 == '0') && (box8 == 'X' ||
            box8 == '0') && (box9 == 'X' || box9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
}

var turn = 1;
var player_turn = document.getElementById("player_turn");

function function1() {
    if (turn == 1) {
        box1.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box1.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function2() {
    if (turn == 1) {
        box2.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box2.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function3() {
    if (turn == 1) {
        box3.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box3.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function4() {
    if (turn == 1) {
        box4.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box4.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function5() {
    if (turn == 1) {
        box5.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box5.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function6() {
    if (turn == 1) {
        box6.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box6.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function7() {
    if (turn == 1) {
        box7.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box7.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function8() {
    if (turn == 1) {
        box8.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box8.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
    }
}
function function9() {
    if (turn == 1) {
        box9.innerText = 'X';
        player_turn.innerHTML = "Player 0's turn";
        turn++;
    } else if (turn == 2) {
        box9.innerText = '0';
        player_turn.innerHTML = "Player X's turn";
        turn--;
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