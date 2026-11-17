// testing to see if javascript is linked correctly, 
// javascript is working correctly // 

console.log("Hello, World");
console.log("Let's Play Rock, Paper, Scissors!")

// attempting math.random nov.13th 4:50 pm // 

// nov 14th learned what math.floor is. 3:18 pm //

// success Math.Floor(Math.random() * 4); lets me have it give 1 - 3
// now to figure out how to assign 1 - 3 as rock paper scissors.// 

// function getComputerChoice() {
//    return Math.floor(Math.random() * 4);
// }

// changing the code from function getComputerChoice() {}
// to getComputerChoice(num); going to use num as the if else statements.
// if (num = 1) console.log(rock);  
// check over notes to see process on how I got to this conclusion. 
// snippet would be ( if ( 1 === true ) ) seems like extra work and makes not much sense. 
// num would be easier especially since I cant assign let 1 = rock.  
// observation and conclusion made nov 14th 5:30 pm //

//After countless notes and trials I finally figured it out step 2 is done. nov 16th 1:42pm. 

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ('rock');
    }else if (num === 1) {
        return ('paper');
    }else if (num === 2) {
        return ('scissors');
    }
}

inputButton.addEventListener("click", () => {
    let rps = prompt("Lets PLay, Rock, Paper, Scissors !");
})


