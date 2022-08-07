var elForm = document.querySelector(".form");
var elFormInput = document.querySelector("#form-input");
var elFormCheckInput = elForm.querySelectorAll(".form-input-check");
var elAdditionalAmount= document.querySelector(".min-sum");
var elAnsverText = document.querySelector(".answer-text");

elForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var inputValue = Number(elFormInput.value);

    elFormCheckInput[0].checked ? Number(elFormCheckInput[0].value = 300) : Number(elFormCheckInput[0].value = 0);
    elFormCheckInput[1].checked ? Number(elFormCheckInput[1].value = 700) : Number(elFormCheckInput[1].value = 0);
    elFormCheckInput[2].checked ? Number(elFormCheckInput[2].value = 500) : Number(elFormCheckInput[2].value = 0);
    elFormCheckInput[3].checked ? Number(elFormCheckInput[3].value = 400) : Number(elFormCheckInput[3].value = 0);
    elFormCheckInput[4].checked ? Number(elFormCheckInput[4].value = 600) : Number(elFormCheckInput[4].value = 0);
 
    var ticketPrise = Number(elFormCheckInput[0].value) * 11000;
    var hotelPrise = Number(elFormCheckInput[1].value) * 12000;
    var travelPrise = Number(elFormCheckInput[2].value) * 12000;
    var giftPrise = Number(elFormCheckInput[3].value) * 12000;
    var additionalAmount = Number(elFormCheckInput[4].value) * 11000;

    var maxAmount = ticketPrise + hotelPrise + travelPrise + giftPrise + additionalAmount;
    var insufficientAmount = maxAmount - inputValue;
    
    if(inputValue < 0) {
        elAnsverText.style.color = "red";
        elAnsverText.textContent = "Iltimos musbat son kiriting ";
    }
    else if(ticketPrise == 0 && hotelPrise == 0 && travelPrise == 0) {
        elAnsverText.style.color = "red";
        elAnsverText.textContent = "Iltimos hech bo'lmaganda bilet va mexmonhonani tanlang ";
    }
    else if(inputValue >= maxAmount) {
        elAnsverText.style.color = "green";
        elAnsverText.textContent = "Tabiriklayman siz sayohatga borsangiz bo'ladi";
    }
    else if(insufficientAmount) {
        elAnsverText.style.color = "#ec8a09";
        elAnsverText.textContent = `Kechirasiz sizda eng kamida ${insufficientAmount} sum yetmayabdi`;
    }
})