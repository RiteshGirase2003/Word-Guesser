const wordsList = [
    "About", "Alert", "Argue", "Beach", "Above", "Alike", "Arise", "Began",
    "Abuse", "Alive", "Array", "Begin", "Actor", "Allow", "Aside", "Begun",
    "Acute", "Alone", "Asset", "Being", "Admit", "Along", "Audio", "Below",
    "Adopt", "Alter", "Audit", "Bench", "Adult", "Among", "Avoid", "Billy",
    "After", "Anger", "Award", "Birth", "Again", "Angle", "Aware", "Black",
    "Agent", "Angry", "Badly", "Blame", "Agree", "Apart", "Baker", "Blind",
    "Ahead", "Apple", "Bases", "Block", "Alarm", "Apply", "Basic", "Blood",
    "Album", "Arena", "Basis", "Board", "Boost", "Buyer", "China", "Cover",
    "Booth", "Cable", "Chose", "Craft", "Bound", "Calif", "Civil", "Crash",
    "Brain", "Carry", "Claim", "Cream", "Brand", "Catch", "Class", "Crime",
    "Bread", "Cause", "Clean", "Cross", "Break", "Chain", "Clear", "Crowd",
    "Breed", "Chair", "Click", "Crown", "Brief", "Chart", "Clock", "Curve",
    "Bring", "Chase", "Close", "Cycle", "Broad", "Cheap", "Coach", "Daily",
    "Broke", "Check", "Coast", "Dance", "Brown", "Chest", "Could", "Dated",
    "Build", "Chief", "Count", "Dealt", "Built", "Child", "Court", "Death",
    "Debut", "Entry", "Forth", "Group", "Delay", "Equal", "Forty", "Grown",
    "Depth", "Error", "Forum", "Guard", "Doing", "Event", "Found", "Guess",
    "Doubt", "Every", "Frame", "Guest", "Dozen", "Exact", "Frank", "Guide",
    "Draft", "Exist", "Fraud", "Happy", "Drama", "Extra", "Fresh", "Harry",
    "Drawn", "Faith", "Front", "Heart", "Dream", "False", "Fruit", "Heavy",
    "Dress", "Fault", "Fully", "Hence", "Drill", "Fibre", "Funny", "Night",
    "Drink", "Field", "Giant", "Horse", "Drive", "Fifth", "Given", "Hotel",
    "Drove", "Fifty", "Glass", "House", "Dying", "Fight", "Globe", "Human",
    "Eager", "Final", "Going", "Ideal", "Early", "First", "Grace", "Image",
    "Earth", "Fixed", "Grade", "Index", "Eight", "Flash", "Grand", "Inner",
    "Elite", "Fleet", "Grant", "Input", "Empty", "Floor", "Grass", "Issue",
    "Enemy", "Fluid", "Great", "Irony", "Enjoy", "Focus", "Green", "Juice",
    "Enter", "Force", "Gross", "Joint", "Judge", "Metal", "Media", "Newly",
    "Known", "Local", "Might", "Noise", "Label", "Logic", "Minor", "North",
    "Large", "Loose", "Minus", "Noted", "Laser", "Lower", "Mixed", "Novel",
    "Later", "Lucky", "Model", "Nurse", "Laugh", "Lunch", "Money", "Occur",
    "Layer", "Lying", "Month", "Ocean", "Learn", "Magic", "Moral", "Offer",
    "Lease", "Major", "Motor", "Often", "Least", "Maker", "Mount", "Order",
    "Leave", "March", "Mouse", "Other", "Legal", "Music", "Mouth", "Ought",
    "Level", "Match", "Movie", "Paint", "Light", "Mayor", "Needs", "Paper",
    "Limit", "Meant", "Never", "Party", "Peace", "Power", "Radio", "Round",
    "Panel", "Press", "Raise", "Route", "Phase", "Price", "Range", "Royal",
    "Phone", "Pride", "Rapid", "Rural", "Photo", "Prime", "Ratio", "Scale",
    "Piece", "Print", "Reach", "Scene", "Pilot", "Prior", "Ready", "Scope",
    "Pitch", "Prize", "Refer", "Score", "Place", "Proof", "Right", "Sense",
    "Plain", "Proud", "Rival", "Serve", "Plane", "Prove", "River", "Seven",
    "Plant", "Queen", "Quick", "Shall", "Plate", "Sixth", "Stand", "Shape",
    "Point", "Quiet", "Roman", "Share", "Pound", "Quite", "Rough", "Sharp",
    "Sheet", "Spare", "Style", "Times", "Shelf", "Speak", "Sugar", "Tired",
    "Shell", "Speed", "Suite", "Title", "Shift", "Spend", "Super", "Today",
    "Shirt", "Spent", "Sweet", "Topic", "Shock", "Split", "Table", "Total",
    "Shoot", "Spoke", "Taken", "Touch", "Short", "Sport", "Taste", "Tough",
    "Shown", "Staff", "Taxes", "Tower", "Sight", "Stage", "Teach", "Track",
    "Since", "Stake", "Teeth", "Trade", "Sixty", "Start", "Texas", "Treat",
    "Sized", "State", "Thank", "Trend", "Skill", "Steam", "Theft", "Trial",
    "Sleep", "Steel", "Their", "Tried", "Slide", "Stick", "Theme", "Tries",
    "Small", "Still", "There", "Truck", "Smart", "Stock", "These", "Truly",
    "Smile", "Stone", "Thick", "Trust", "Smith", "Stood", "Thing", "Truth",
    "Smoke", "Store", "Think", "Twice", "Solid", "Storm", "Third", "Under",
    "Solve", "Story", "Those", "Undue", "Sorry", "Strip", "Three", "Union",
    "Sound", "Stuck", "Threw", "Unity", "South", "Study", "Throw", "Until",
    "Space", "Stuff", "Tight", "Upper", "Upset", "Whole", "Waste", "Wound",
    "Urban", "Whose", "Watch", "Write", "Usage", "Woman", "Water", "Wrong",
    "Usual", "Train", "Wheel", "Wrote", "Valid", "World", "Where", "Yield",
    "Value", "Worry", "Which", "Young", "Video", "Worse", "While", "Youth",
  ];

var selectedWord = '';
let counter=0;
let wrong_word_list=[];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

function reload() {
    const shuffledWords = shuffleArray(wordsList);
    const index = Math.floor(Math.random() * 150);
    selectedWord = shuffledWords[index].toUpperCase();
    console.log(selectedWord);

    
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
    
    letter_focus();
    buttonClick();

});

function letter_focus() {
    var letterInputs = document.querySelectorAll('.letter');

    letterInputs.forEach(function(input, index, array) {
        input.addEventListener('input', function() {
            input.nextElementSibling.textContent = input.value;

            if (index < array.length - 1 && input.value.length === 1) {
                if (wrong_word_list.includes(array[index].value))
                {
                    alert(" Wrong Word! : "+array[index].value)
                    array[index].value='';
                    array[index].focus();
                }   
                else{             
                    array[index + 1].focus();
                }
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

function convertToSuperscript(count) {
    const superscriptDigits = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
    return count.toString().split('').map(digit => superscriptDigits[parseInt(digit)]).join('');
}

function wrongWord(letter){
    const wrong = document.getElementById('wrong-word');
    wrong.innerHTML += `<span>${letter.value}</span>`;
}
function checkWord(button){
    
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
        
        guessedLetter = inputWord[i].toUpperCase();
        

        if (selectedWord.includes(guessedLetter)) 
        {
            let count = 0;
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guessedLetter) {
                    count++;
                }
            }
            const superscriptCount = convertToSuperscript(count);
            
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

            if (count>1)
            {
                inputs[i].value =`${guessedLetter}${superscriptCount}`;
            }

        } 
        else {
            inputs[i].style.color= 'red';
            inputs[i].style.background= 'peachpuff';
            flag=false;
            if (!(wrong_word_list.includes(inputs[i].value)))
            {
                wrong_word_list.push(inputs[i].value);
                wrongWord(inputs[i])
            }

        }

        
    }
    
    if (flag){
        alert("Hooray! You Won! \n\n Attempts : "+(counter+1));
        location.reload();

    }
    else
    {

        counter++;
        if (counter >=6)
        {
            alert(" Oops! You loose \n\n Correct Word was : "+selectedWord);
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

