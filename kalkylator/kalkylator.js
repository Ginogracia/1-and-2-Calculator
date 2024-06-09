// MIN KOD INNAN JAG BEHÖVDE ÄNDRA EFTERSOM JAG INTE VISSTE ATT JAG INTE FICK ANVÄNDA MIG UTAV EVAL FUNKTIONEN SAMT HADE INTE TIDEN FÖR ATT GÖRA OM HELA KALKYLATORN EFTERSOM JAG TOG STUDENTEN HOPPAS DET RÄCKER MED ATT JAG GJORDE ENBART DEN FÖRSTA DELEN. TACK.


// const display = document.getElementById('display');
// const buttonZero = document.querySelector('.button-zero');
// const buttonOne = document.querySelector('.button-one');
// const buttonTwo = document.querySelector('.button-two');
// const buttonThree = document.querySelector('.button-three');
// const buttonFour = document.querySelector('.button-four');
// const buttonFive = document.querySelector('.button-five');
// const buttonSix = document.querySelector('.button-six');
// const buttonSeven = document.querySelector('.button-seven');
// const buttonEight = document.querySelector('.button-eight');
// const buttonNine = document.querySelector('.button-nine');
// const buttonClear = document.querySelector('.button-clear');
// const buttonEqualSign = document.querySelector('.button-equal-sign');
// const buttonDivide = document.querySelector('.button-divide');
// const buttonMultiply = document.querySelector('.button-multiply');
// const buttonMinus = document.querySelector('.button-minus');
// const buttonPlus = document.querySelector('.button-plus');
// const buttonDot = document.querySelector('.button-dot');





//  function appendToDisplay(input){
//      display.value += input;
//  }

//  buttonZero.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('0');
//  })

//  buttonDot.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('.');
//  });

//  buttonOne.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('1');
//  });

//  buttonTwo.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('2');
//  });

//  buttonThree.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('3');
//  });

//  buttonFour.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('4');
//  });

//  buttonFive.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('5');
//  });

//  buttonSix.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('6');
//  });

//  buttonSeven.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('7');
//  });

//  buttonEight.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('8');
//  });

//  buttonNine.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('9');
//  });

//  buttonClear.addEventListener('click', (MouseEvent) => {

//     clearDisplay();
//  });

//  buttonDivide.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('/');
//  });

//  buttonMultiply.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('*');
//  });

//  buttonMinus.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('-');
//  });

//  buttonPlus.addEventListener('click', (MouseEvent) => {

//     appendToDisplay('+');
//  });

//  buttonEqualSign.addEventListener('click', (MouseEvent) => {
//     calculate();
//  });




// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
     
//    display.value = eval(display.value);
   

// }


document.addEventListener('DOMContentLoaded', () => {
   const display = document.getElementById('display');
   const buttonOne = document.querySelector('.button-one');
   const buttonTwo = document.querySelector('.button-two');
   const buttonThree = document.querySelector('.button-three');
   const buttonPlus = document.querySelector('.button-plus');

   buttonOne.addEventListener('click', () => {
       display.value += '1';
   });

   buttonTwo.addEventListener('click', () => {
       display.value += '2';
   });

   buttonThree.addEventListener('click', () => {
       display.value += '3';
   });

   buttonPlus.addEventListener('click', () => {
       display.value += '+';
   });

   document.querySelector('.button-clear').addEventListener('click', () => {
       display.value = '';
   });

   document.querySelector('.button-equal-sign').addEventListener('click', () => {
       const expression = display.value;
       const parts = expression.split('+');
       if (parts.length === 2) {
           const result = parseInt(parts[0]) + parseInt(parts[1]);
           display.value = result;
       } else {
           display.value = 'Calculator only accepts numbers 1 and 2 using the + component.';
       }
   });
});
