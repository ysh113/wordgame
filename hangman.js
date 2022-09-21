 let questions = [
    {word: "dog",
    hint: "Descedent of wolf"
 },
 {
    word: "jaguar",
    hint: "A large cat that lives in the Amazon"
 },
 {
    word: "tiger",
    hint: "Largest living cat species with vertical stripes and orange fur"
 },
 {
    word: "lion",
    hint: "A large cat that lives in Africa and India. It's the largest cat in Africa"
 },
 {
    word: "leopard",
    hint: "A member of the cat family, also called panther"
 },
 {
   word: "elephant",
   hint: "The largest existing land animal"
 },
 {
   word: "giraffe",
   hint: "It is the tallest existing animal"
 },
 {
   word: "hippopotamus",
   hint: "A large semiaquatic mammal native to sub-Saharan Africa. They spend up to 16 hours a day in water"
 },
 {
   word: "rhinoceros",
   hint: "A critically endangered animal with a horn on its head. Commonly mistaked as a unicorn"
 },
 {
   word: "cheetah",
   hint: "A large cat that lives in Africa. It is the fastest land animal"
 },
 {
   word: "honeybadger",
   hint: "A mammal widely distributed in Africa, Southwest Asia, and the Indian subcontinent. It is known for their viciousness, and willing to fight anybody at anytime. They are even immuned to cobra's venom"
 },
 {
   word: "seals",
   hint: "It lives in the ocean but are able to come on land for long periods of time. They are also called pinnipeds. They have fins. And gets clubbed to death in Canada"
 },
 {
   word: "walrus",
   hint: "A large flipered marine mammal with tusks"
 },
 {
   word: "orca",
   hint: "A toothed whale belonging to the oceanic dolphin family, of which it is the largest member. They are highly intellgient and will kill and eat just about anything"
 },
 { word: "dolphin",
   hint: "An aquatic mammal known for its friendliness and intelligence. They are like whales but smaller"
 },
 {
   word: "whale",
   hint: "They are like dolphines but much bigger"
 },
 {
   word: "turtle",
   hint: "They have shell on their back and some live under water or close to it"
 },
 {
   word: "kangaroo",
   hint: "Native to Australia and New Guinea. They hop around and known for boxing"
 },
 {
   word: "bear",
   hint: "They are mammals that belong to the family of Ursidae. They are mainly carnivores and can be found around the world. They are commonly sold as dolls"
 },
 {
   word: "wolf",
   hint: "Ancestors of dogs"
 },
 {
   word: "cow",
   hint: "A herbivore animal that humans commonly consumes. The meat is known as beef"
 },
 {
   word: "chicken",
   hint: "The most common type of poultry in the world. Humans also eat their eggs"
 },
 {
   word: "sheep",
   hint: "A domestic livestock kept for its wool"
 },
 {
   word: "horse",
   hint: "A domesticated hoofed mammal. Humans usually ride them for various activities"
 },
 {
   word: "goat",
   hint: "bahhhhhhhh"
 },
 {
   word: "squirrel",
   hint: "A small rodent that climbs trees exceptionally well and eats nuts and things"
 }

]




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
















































