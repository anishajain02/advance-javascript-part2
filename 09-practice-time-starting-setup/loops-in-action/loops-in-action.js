//calculator using for loop
const calculateSumButtonElement = document.querySelector('#calculator button');

 function calculateSum() {
    const userInputElements= document.getElementById('user-number');
    const enteredNumber = userInputElements.value;

    let sumUptoNumber = 0;
    for(let i=0; i<=enteredNumber;i++){
        sumUptoNumber += i;
    }
    const resultElement = document.getElementById('calculated-sum');
    resultElement.textContent = sumUptoNumber;
    resultElement.style.display = 'block';
 }
 calculateSumButtonElement.addEventListener('click', calculateSum );


 //highlight the links using for of loop
 const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {

    const anchorElements = document.querySelectorAll('#highlight-links a');
    for(const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);



//display user input using for in loop
const userData ={
    name:'ani',
    age: 25,   
    country:'India'
}
const displayUserInputButtonElement = document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = '';
    for(const key in userData){
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase()+': '+userData[key];
        newUserDataListElement.textContent = outputText;
        outputDataElement.append(newUserDataListElement);
    }
}
displayUserInputButtonElement.addEventListener('click', displayUserData);


// Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);