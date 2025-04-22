let countg = 0;
let btng = document.getElementById("Google-button");
let dispg = document.getElementById("Countgoog");
btng.addEventListener("click", function () {
countg++;
dispg.innerHTML = "Google: "+countg;
});

let countf = 0;
let btnf = document.getElementById("Facebook-button");
let dispf = document.getElementById("Countface");
btnf.addEventListener("click", function () {
countf++;
dispf.innerHTML = "Facebook: "+countf;
});

let counti = 0;
let btni = document.getElementById("Instagram-button");
let dispi = document.getElementById("Countinst");
btni.addEventListener("click", function () {
counti++;
dispi.innerHTML = "Instagram: "+counti;
});

let text = num.toString();
var someVarName = "value";
localStorage.setItem("someVarKey", someVarName);