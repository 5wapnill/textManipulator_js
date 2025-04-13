let uText = document.querySelector("#uText");
let lowerCase = document.querySelector("#lowerCase");
let upperCase = document.querySelector("#upperCase");
let inverseCase = document.querySelector("#inverseCase");
let mixedCase = document.querySelector("#mixedCase");
let titleCase = document.querySelector("#titleCase");

let clear = document.querySelector("#clear");

lowerCase.addEventListener("click", () => {
    uText.value = (uText.value).toLowerCase();
    console.log(uText);
});

upperCase.addEventListener("click", () => {
    uText.value = (uText.value).toUpperCase();
    console.log(uText);
});

inverseCase.addEventListener("click", () => {
    let uTextV = uText.value;
    let temp = "";
    for(let i = 0; i < uTextV.length; i++){
        if(i % 2 == 1) {
            temp += uTextV[i].toLowerCase();
        } else {
            temp += uTextV[i].toUpperCase();
        }
    }
    uText.value = temp;
});

mixedCase.addEventListener("click", () => {
    let uTextV = uText.value;
    let temp = "";
    for(let i = 0; i < uTextV.length; i++){
        if(parseInt(Math.random()*10) % 2 == 1) {
            temp += uTextV[i].toLowerCase();
        } else {
            temp += uTextV[i].toUpperCase();
        }
    }
    uText.value = temp;
});

titleCase.addEventListener("click", () => {
    let uTextV = uText.value;
    let temp = "";
    uTextV.toLowerCase();
    for(let i = 0; i < uTextV.length; i++){

        if(uTextV[i] == " ")
        {
            uTextV[i+1] = uTextV[i+1].toUpperCase();
            i++
        } 
    }
    uText.value = uTextV;
});

clear.addEventListener("click", () => {
    uText.value = "";
})