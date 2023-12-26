const wordsList=[
    "apple", "beach", "table", "chair", "river", "house", "plant", "mouse", "music", "light",
    "paper", "watch", "stone", "bread", "eagle", "laugh", "radio", "queen", "peace", "heart",
    "dream", "horse", "green", "smile", "dance", "cloud", "black", "peach", "eagle", "frost",
    "blaze", "brush", "clean", "crane", "crisp", "drift", "flash", "float", "glaze", "grace",
    "bliss", "bloom", "charm", "chill", "blend", "blaze", "blaze", "cheer", "clasp", "blend",
    "bound", "carve", "chase", "charm", "cheer", "climb", "close", "carve", "dance", "dazzl",
    "dream", "dazzl", "feast", "flame", "flare", "float", "flash", "frost", "fresh", "gaze",
    "glide", "gloom", "grace", "grand", "green", "gusty", "happy", "heart", "hinge", "humor",
    "ideal", "ivory", "jewel", "juicy", "jumbo", "junta", "kayak", "kings", "knead", "lance",
    "larch", "laugh", "leash", "libel", "lucky", "lumpy", "magic", "maple", "medal", "mercy",
    "mimic", "muddy", "music", "nifty", "noise", "olive", "opera", "optic", "ovary", "panel",
    "peach", "pedal", "plank", "plain", "plant", "plump", "plush", "prize", "queen", "query",
    "quick", "quiet", "quite", "quirk", "quite", "quirk", "quirky", "quash", "quell", "quick",
    "queen", "quirk", "quilt", "quest", "quiet", "quote", "quake", "raven", "relax", "river",
    "rouge", "rally", "rumba", "radix", "relic", "rouse", "ridge", "round", "royal", "rhino",
    "savor", "sandy", "shade", "silky", "slice", "slate", "smile", "space", "spade", "stare",
    "sweet", "swell", "swirl", "taken", "tease", "tense", "thrum", "tidal", "total", "toxic",
    "tract", "twist", "train", "tally", "unify", "unveil", "ulcer", "under", "unity", "unbox",
    "untie", "upper", "ultra", "unify"
  ]

var selectedWord = '';
let counter=0;

function reload() {
    const index = Math.floor(Math.random() * 150);
    selectedWord = wordsList[index].toUpperCase();
    // console.log(selectedWord);
    
    alert(
        "Word Guesser Game\n\n" +
        "Welcome to the Word Guesser Game! In this game, the computer randomly selects a secret 5-letter word, and it's your task to guess that word. The game provides feedback for each letter you guess:\n\n" +
        "- Red Color: The letter is not present in the word.\n" +
        "- Yellow Color: The letter is present in the word but in the wrong position.\n" +
        "- Green Color: The letter is correct and in the right position.\n\n" +
        "To start, the computer has chosen a secret word. Take your best shot at guessing it! After each guess, you'll receive color-coded feedback to help you figure out the correct word.\n\n" +
        "Good luck, and let the guessing begin!"
      );
      

}



document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('load', reload);
    // document.write("counter : "+counter)
    
    letter_focus();
    buttonClick();

});

function letter_focus() {
    var letterInputs = document.querySelectorAll('.letter');

    letterInputs.forEach(function(input, index, array) {
        input.addEventListener('input', function() {
            input.nextElementSibling.textContent = input.value;

            if (index < array.length - 1 && input.value.length === 1) {
                array[index + 1].focus();
            }
        });
    });
}

function buttonClick() {
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.onclick = function() {
            var lettersDiv = button.previousElementSibling;

            function areAllInputsFilled() {
                var letterInputs = lettersDiv.querySelectorAll('.letter');
                var allFilled = true;

                letterInputs.forEach(function(input) {
                    if (input.value.length !== 1) {
                        allFilled = false;
                    }
                });

                return allFilled;
            }

            if (areAllInputsFilled()) 
            {
                checkWord(button)
                nextWord(button);


            } else {
                alert("Please Enter Whole Spelling!");
            }
        };
    });
}


function checkWord(button){
    console.log("\n counter "+counter);

    
    const word = button.parentNode;
    
    const wordId= word.getAttribute('id');
    const inputs = document.querySelectorAll(`#${wordId} .letters .letter`)
    let inputWord =''
    inputs.forEach(function(input) {
        var inputValue = input.value.toUpperCase();
        inputWord += inputValue
    });

    let guessedLetter;
    let flag= true;
    for (let i = 0; i < inputWord.length; i++) 
    {
        // console.log(inputWord.length)
        guessedLetter = inputWord[i].toUpperCase();
        // console.log(guessedLetter);
        if (selectedWord.includes(guessedLetter)) 
        {
            
            if (guessedLetter === selectedWord[i]) {
                inputs[i].style.color= 'green';
                inputs[i].style.background= 'lightgreen';

            }
            else
            {
                inputs[i].style.color= 'orange';
                inputs[i].style.background= 'lightyellow';

                flag=false;
            }
        } 
        else {
            inputs[i].style.color= 'red';
            inputs[i].style.background= 'peachpuff';
            flag=false;
        }

        
    }
    
    if (flag){
        alert("Hooray! You Won!");
        location.reload();

    }
    else
    {

        counter++;
        if (counter >=6)
        {

            alert(" Oops! You loose"+"\n\n Correct Word was : "+selectedWord);
            location.reload();
        }
    }

    
    

    
}

function nextWord(button) {
    var currentWord = button.parentNode;
    var nextWord = currentWord.nextElementSibling;

    
    

    if (nextWord) {
        var inputs = nextWord.querySelectorAll('.letter');
        inputs.forEach(function(input) 
        {
            input.removeAttribute('disabled');
        });

        var input = nextWord.querySelector('.letter');
        input.focus()

    }
    button.classList.add('clicked');
    button.disabled = true;
}

