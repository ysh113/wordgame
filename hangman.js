let questions = ["dog"]

let words = " "
let answerArray = []

function init() {
    let words = questions[Math.floor(Math.random() * questions.length)] //picking a random word

    answerArray = [] //set up the answer array

    for (let i = 0; i < words.length; i++) {
        answerArray[i] = "_"
        
    }
    document.getElementById("answer").innerHTML = answerArray.join(" ")

}
init()












function guess() {
    let guess = document.getElementById("guess").value
    let thisMessage = ""

    if(guess.length !== 1) {
        thisMessage = "only one letter"
    }else {
        for (let i = 0; i < words.length; i++) {
            if (words[i] == guess) {
             answerArray[i] = guess
             thisMessage = "yes"
            }
             
         }

         let remainingLetters = answerArray.length
         for (let i = 0; i < answerArray.length; i++) {
           if(answerArray[i] !== "_")
           remainingLetters -= 1
            
         }

         document.getElementById("answer").innerHTML = answerArray.join("")

         document.getElementById("guess").value = ""
    }
    document.getElementById("message").innerHTML = thisMessage

    }


    
function reset() {
    document.getElementById("guess").value = " "
   
        
    
}

























































// let maxWrong = 6
// let mistakes = 0
// let guessed = []



// let words = ["dog", "cat", "cow", "wolf"]

// let wrds = new Array(words.length)


// document.getElementById("wrongs") = maxWrong

// function setup(){
//     let blank = document.getElementById("blank-text")
//    let Wins = document.getElementById("wins")
//    let Losses = document.getElementById("losses")
//    Wins = 0
//    Losses = 0

// }
// setup()
// function randomWords() {
   
       
//         let randomWords = words[Math.floor(Math.random() * words.length)]
//         let word = randomWords
//         console.log(randomWords)

//         let html = ''
//         for (let i = 0; i < wrds.length; i++) {
//             wrds[i] = ''
            
//         }
//     }

// function printwords(){
//     for (let i = 0; i < wrds.length; i++) {
//         let blank = document.getElementById("blank-text")
//         let node = document.createTextNode(wrds[i])
//         blank.appendChild(node)
//     }
// }
// printwords()



// randomWords()

