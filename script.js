let initialValue = "X"
const gamer = ()=>{
    document.getElementById("audio").play();
}
const empty = () => {
    initialValue = "X"
    box1.innerHTML = ""
    box2.innerHTML = ""
    box3.innerHTML = ""
    box4.innerHTML = ""
    box5.innerHTML = ""
    box6.innerHTML = ""
    box7.innerHTML = ""
    box8.innerHTML = ""
    box9.innerHTML = ""
}
var firstScore = Number(score1.innerHTML)
var secondScore = Number(score2.innerHTML)
const test = (e) => {

    if (initialValue == "X" && e.target.innerText == "") {
        e.target.innerText = "X"
        initialValue = "O"
    }
    else if (initialValue == "O" && e.target.innerText == "") {
        e.target.innerText = "O"
        initialValue = "X"
    }
    const one = document.getElementById("box1").innerHTML
    const two = document.getElementById("box2").innerHTML
    const three = document.getElementById("box3").innerHTML
    const four = document.getElementById("box4").innerHTML
    const five = document.getElementById("box5").innerHTML
    const six = document.getElementById("box6").innerHTML
    const seven = document.getElementById("box7").innerHTML
    const eight = document.getElementById("box8").innerHTML
    const nine = document.getElementById("box9").innerHTML

    if (one == "X" && two == "X" && three == "X" || one == "X" && four == "X" && seven == "X" || four == "X" && five == "X" && six == "X" || two == "X" && five == "X" && eight == "X" || seven == "X" && eight == "X" && nine == "X" || three == "X" && six == "X" && nine == "X" || one == "X" && five == "X" && nine == "X" || three == "X" && five == "X" && seven == "X"){
        // e.target.innerText=""
        initialValue = ""
        setTimeout(() => {
            text.innerHTML = "X Wins";
            empty();
            initialValue="O";
            ++firstScore;
            score1.innerHTML = firstScore;
            console.log(firstScore)
            // return;
        }, 500);
        setTimeout(() => {
            initialValue=" ";
        }, 800);
        setTimeout(() => {
            text.innerHTML = "Player O turn";
            initialValue="O"
        }, 1000);
    }

    else if (one == "O" && two == "O" && three == "O" || one == "O" && four == "O" && seven == "O" || four == "O" && five == "O" && six == "O" || two == "O" && five == "O" && eight == "O" || seven == "O" && eight == "O" && nine == "O" || three == "O" && six == "O" && nine == "O" || one == "O" && five == "O" && nine == "O" || three == "O" && five == "O" && seven == "O") {
        // e.target.innerText=""
        initialValue = ""
        setTimeout(() => {
            text.innerHTML = "O Wins";
            empty();
            initialValue="O";
            initialValue="O";
            ++secondScore;
            score2.innerHTML = secondScore;
            console.log(secondScore)
            // return;
        }, 500);
        setTimeout(() => {
            text.innerHTML = "Player X turn";
        }, 1200);
    }
    else if(one!=""&&two!=""&&three!=""&&four!=""&&five!=""&&six!=""&&seven!=""&&eight!=""&&nine!=""){
        initialValue = ""
        setTimeout(() => {
            text.innerHTML = "Draw Mate";
            empty();
            secondScore;
            score2.innerHTML = secondScore;
            console.log(secondScore);
            return;
        }, 500);
    }
}
function rest(){
    location.reload()
}
// songlist[
//     {
//         path:;

//     },
// {
//     path:;

// }
// ]
// var audio = document.getElementById("audio");
// loadSong =(songlist)=>{
//     audio.src = songlist.path;
// }