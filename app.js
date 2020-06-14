//   ====================== Q7. Guess game:=====================

//     Store a secret number(ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a.If user guesses the same number, show“ Bingo!Correct
// answer”.
// b.If the guessed number + 1 is the secret number, show“ Close enough to the correct answer”.
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user
// if the number
// is divisible by 3.
// 9. Write a program that checks whether the given input is an
// even number or an odd number

// ==================== Guess Game Function ==============

function game() {

    var user_number = document.getElementById("number").value;
    var secret = 4;
    var bingo = "“Bingo! Correct answer”.";
    var empty = "You didn't Entered Any number! Please Enter A Luck number";
    var sorry = "Sorry! Try Again";
    var close_enough = "“Close enough to the correct answer”.";
    var divisable = "The numberis divisible by 3.";
    var divisable_two = "The numberis divisible by 2.";

    if (user_number == secret) {
        document.getElementById("game_result").value = bingo;
        document.getElementById("game_result").style.color = "green";
    } else if (user_number == "") {
        document.getElementById("game_result").value = empty;
        document.getElementById("game_result").style.color = "purple";

    } else if (user_number == ++secret) {
        document.getElementById("game_result").value = close_enough;
        document.getElementById("game_result").style.color = "blue";
    } else if (user_number % 3 === 0) {
        document.getElementById("game_result").value = divisable;
        document.getElementById("game_result").style.color = "brown";
    } else if (user_number % 2 === 0) {
        document.getElementById("game_result").value = divisable_two;
        document.getElementById("game_result").style.color = "orange";
    } else {
        document.getElementById("game_result").value = sorry;
        document.getElementById("game_result").style.color = "red";
    }
}

// ============== End Guess Game function ===========================

// Q10: Temperature

function temp() {
    var user = document.getElementById("user_t").value;
    var hot = "It is too hot outside.";
    var Normal = "“The Weather is Normal.”";
    var cool = "“Today’s Weather is cool..”";
    var to_cool = "“OMG! Today’s weather is so Cool..”";
    var empty = "Please Enter Temperature!";

    if (user == "") {
        document.getElementById("tem_result").value = empty;
        document.getElementById("tem_result").style.color = "Purple";
    }
    if (user >= 40) {
        document.getElementById("tem_result").value = hot;
        document.getElementById("tem_result").style.color = "red";
    } else if (user >= 30) {
        document.getElementById("tem_result").value = Normal;
        document.getElementById("tem_result").style.color = "green";
    } else if (user >= 20) {
        document.getElementById("tem_result").value = cool;
        document.getElementById("tem_result").style.color = "purple";
    } else if (user >= 10) {
        document.getElementById("tem_result").value = to_cool;
        document.getElementById("tem_result").style.color = "blue";
    }
}

// ======================== End temperatur ===================

// ======================== Calculator =========================

function showresult(choise) {
    var n1 = parseFloat(document.getElementById("first_num").value);
    var n2 = parseFloat(document.getElementById("second_num").value);
    var r;
    var c = choise;

    switch (c) {
        case '1':
            r = n1 + n2;
            break;
        case '2':
            r = n1 - n2;
            break;
        case '3':
            r = n1 * n2;
            break;
        case '4':
            r = n1 / n2;
            break;
        case '5':
            r = n2 * 100 / n1;
            break;
        default:
            break;

    }
    document.getElementById("answer").value = r;



}