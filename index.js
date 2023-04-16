var count = 0;

document.querySelector(".increase").addEventListener("click", function () {
  document.querySelector(".counter").innerHTML++;
    changeColor(".counter");

});
document.querySelector(".decrease").addEventListener("click", function () {
  document.querySelector(".counter").innerHTML--;
  changeColor(".counter");
});
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".counter").innerHTML = 0;
  document.querySelector(".counter").style.color = "#372949";
});

function changeColor(counterVar) {
  
  if (document.querySelector(counterVar).innerHTML<0) {
    document.querySelector(counterVar).style.color = "#EE4B2B";
  }
  if(document.querySelector(counterVar).innerHTML>0){
        document.querySelector(counterVar).style.color = "#5800FF";
}
}
