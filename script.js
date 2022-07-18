let initialValue = "X"
const test = (e) => {
    // const one = document.getElementById("1").innerHTML
    // const two = document.getElementById("2").innerHTML
    // const three = document.getElementById("3").innerHTML
    // const four = document.getElementById(4).innerHTML
    // const five = document.getElementById(5).innerHTML
    // const six = document.getElementById(6).innerHTML
    // const seven = document.getElementById(7).innerHTML
    // const eight = document.getElementById(8).innerHTML
    // const nine = document.getElementById(9).innerHTML
    // if (one == "X" && two == "X" && three == "X" || one == "X" && four == "X" && seven == "X"||four == "X" && five == "X" && six == "X" || two == "X" && five == "X" && eight == "X"|| seven == "X" && eight == "X" && nine == "X" || three == "X" && six == "X" && nine == "X" || one == "X" && five == "X" && nine == "X" || three == "X" && five == "X" && seven == "X") {
    //     if (one == "X" && two == "X" && three == "X" || one == "X" && four == "X" && seven == "X"||four == "X" && five == "X" && six == "X" || two == "X" && five == "X" && eight == "X"|| seven == "X" && eight == "X" && nine == "X" || three == "X" && six == "X" && nine == "X" || one == "X" && five == "X" && nine == "X" || three == "X" && five == "X" && seven == "X") {
    //         e.target.innerText=""
    //         initialValue=""
    //     }
    //     alert("You've Won")
    // }

    // else if(one == "O" && two == "O" && three == "O" || one == "O" && four == "O" && seven == "O"||four == "O" && five == "O" && six == "O" || two == "O" && five == "O" && eight == "O"|| seven == "O" && eight == "O" && nine == "O" || three == "O" && six == "O" && nine == "O"|| one == "O" && five == "O" && nine == "O" || three == "O" && five == "O" && seven == "O") {
    //     alert("You've Won")
    // }

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

    if (one == "X" && two == "X" && three == "X" || one == "X" && four == "X" && seven == "X" || four == "X" && five == "X" && six == "X" || two == "X" && five == "X" && eight == "X" || seven == "X" && eight == "X" && nine == "X" || three == "X" && six == "X" && nine == "X" || one == "X" && five == "X" && nine == "X" || three == "X" && five == "X" && seven == "X") {
        // e.target.innerText=""
        initialValue = ""
        setTimeout(() => {
            alert("You've Won");
            empty();
        }, 500);
    }

    else if (one == "O" && two == "O" && three == "O" || one == "O" && four == "O" && seven == "O" || four == "O" && five == "O" && six == "O" || two == "O" && five == "O" && eight == "O" || seven == "O" && eight == "O" && nine == "O" || three == "O" && six == "O" && nine == "O" || one == "O" && five == "O" && nine == "O" || three == "O" && five == "O" && seven == "O") {
        // e.target.innerText=""
        initialValue = ""
        setTimeout(() => {
            alert("You've Won");
            empty();
        }, 500);
    }
}
const empty = ()=>{
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