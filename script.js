var card = document.querySelectorAll(".card");
var p = document.querySelector("p");
var color = [];
var random = Math.floor(Math.random() * 9);  //Get the random number from 0 to 8
var randomColor = [];

var randomColor1 = Math.floor(Math.random() * 256); //Get the random color from 0 to 255

var randomColor2 = Math.floor(Math.random() * 256);

var randomColor3 = Math.floor(Math.random() * 256);

var randomColor4 = Math.floor(Math.random() * 256);

var randomColor5 = Math.floor(Math.random() * 256);

var randomColor6 = Math.floor(Math.random() * 256);

var randomColor7 = Math.floor(Math.random() * 256);

var randomColor8 = Math.floor(Math.random() * 256);

var randomColor9 = Math.floor(Math.random() * 256);

var randomColor10 = Math.floor(Math.random() * 256);

var randomColor11 = Math.floor(Math.random() * 256);


randomColor.push(
    randomColor1, randomColor2, randomColor3,
    randomColor4, randomColor5, randomColor6,
    randomColor7, randomColor8, randomColor9,
    randomColor10, randomColor11
)

for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgb(" + randomColor[i] + ',' + randomColor[i + 1] + ',' + randomColor3
    color.push(card[i].style.backgroundColor);
}

p.textContent = color[random];
p.style.backgroundColor = color[random];

const checkanswer = (cardindex) => {
    if (color[cardindex] == p.textContent) {
        alert("Your guess is correct");
        window.location.reload();
    }
    else {
        alert("Your guess is wrong");
    }
}