let answers = ""

let currentProgress = []

hint = document.getElementById("hint")

function init(){
    answers = questions[Math.floor(Math.random() * questions.length)]
    word = answers.word
    
    
    
    hint.innerHTML = answers.hint
    

    currentProgress = []

    for (let i = 0; i < word.length; i++) {
       currentProgress[i] = "_"
        
    }

    document.getElementById("answer").innerHTML = currentProgress.join(" ")
    // document.getElementById("message").innerHTML = "lets play"
}

init()

function lowerCase() {
   let lower = document.getElementById("guess")
   lower.addEventListener("input", function(e){
      e.target.value = e.target.value.toLowerCase()
   })
}

lowerCase()





function input(){
    let userInput = document.getElementById("guess").value
    let showMessage = ""
    

    

    if(userInput.length !== 1){
        showMessage = "only one letter at a time"
    }else{  
         for (i = 0; i < word.length; i++) {
            if(word[i] === userInput){
               currentProgress[i] = userInput
              
                showMessage = `Yes ${userInput} is in the answer`
            }
        }
        // HTMLElement = currentProgress

        let remainingLetters = currentProgress.length
        for (i = 0; i < currentProgress.length; i++) {
           if(currentProgress[i] !== "_") {
            remainingLetters -= 1
           }
            
        }

        if(remainingLetters == 0) {
            showMessage = "Correct"
        }

      

        if(showMessage === ""){
            showMessage = "not right"
        }

        document.getElementById("answer").innerHTML = currentProgress.join("")
        document.getElementById("guess").value = ""
       
    }
    document.getElementById("message").innerHTML = showMessage
}





    function reset() {
    document.getElementById("guess").value = " "
    location.reload()
   
        
    
}

function revealWord() {
   document.getElementById("message").innerHTML = `The word was ${word}`
   for (let i = 0; i < word.length; i++) {
      currentProgress[i] = word[i]
      
   }
      
   
 

   document.getElementById("answer").innerHTML = currentProgress.join("")
}





function nextQuestion() {
   answers = questions[Math.floor(Math.random() * questions.length)]
    word = answers.word
    
    
    hint.innerHTML = answers.hint
    

    currentProgress = []

    for (let i = 0; i < word.length; i++) {
       currentProgress[i] = "_"
        
    }
    document.getElementById("answer").innerHTML = currentProgress.join(" ")
    document.getElementById("message").innerHTML = ""
}
















































