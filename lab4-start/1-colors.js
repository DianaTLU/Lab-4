const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");
btn.addEventListener('click',function(){
    console.log("Button Clicked0");
    
    //let randomRGB = "rgba(" + getRandomRBG() + "," + getRandomRBG() + "," + getRandomRBG() + ")";
    let randomHEX = "#" + getRandomHex();
    infoSection.style.backgroundColor = randomHEX;
    colorTxt.textContent = randomHEX;
    // let randomIndex = getRandomNumber();
    // infoSection.style.backgroundColor = colors[randomIndex];
})

// random colour from an array
/* function getRandomNumber() {
    let result = Math.floor(Math.random()*colors.length);
    console.log(result);
    return result;
} */

// randomize choosing an RGB colour
/* function getRandomRBG() {
    let result = Math.floor(Math.random()*256);
    console.log(result);
    return result;
} */

// random HEX colour

function getRandomHex() {
    const hexChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
    var result = "";
    for (let i = 1; i < 7; i++) 
    {
        result += hexChars[Math.floor(Math.random()*hexChars.length)];
    }   
    return result;
 }
