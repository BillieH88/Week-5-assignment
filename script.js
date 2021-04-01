var nineAmElement = document.querySelector("#input9");
var tenAmElement = document.querySelector("#input10");
var elevenAmElement = document.querySelector("#input11");
var twelvePmElement = document.querySelector("#input12");
var onePmElement = document.querySelector("#input1");
var twoPmElement = document.querySelector("#input2");
var threePmElement = document.querySelector("#input3");
var fourPmElement = document.querySelector("#input4");
var fivePmElement = document.querySelector("#input5");
var saveBtn = document.querySelector("#save");

var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");
$("#currentDay").text(currentDay);
$("#currentHour").text(currentHour);




$(".save").on("click", function () {
    event.preventDefault();
    var nineElem = nineAmElement.value;
    var tenElem = tenAmElement.value;
    var elevenElem = elevenAmElement.value;
    var twelveElem = twelvePmElement.value;
    var oneElem = onePmElement.value;
    var twoElem = twoPmElement.value;
    var threeELem = threePmElement.value;
    var fourElem = fourPmElement.value;
    var fiveElem = fivePmElement.value;


    localStorage.setItem("9AM-UR", JSON.stringify(nineElem));
    localStorage.setItem("10AM-UR", JSON.stringify(tenElem));
    localStorage.setItem("11AM-UR", JSON.stringify(elevenElem));
    localStorage.setItem("12PM-UR", JSON.stringify(twelveElem));
    localStorage.setItem("1PM-UR", JSON.stringify(oneElem));
    localStorage.setItem("2PM-UR", JSON.stringify(twoElem));
    localStorage.setItem("3PM-UR", JSON.stringify(threeELem));
    localStorage.setItem("4PM-UR", JSON.stringify(fourElem));
    localStorage.setItem("5PM-UR", JSON.stringify(fiveElem));
});

displayText();

function displayText() {
    var nineAM = JSON.parse(localStorage.getItem("9AM-UR"));
    var tenAM = JSON.parse(localStorage.getItem("10AM-UR"));
    var elevenAM = JSON.parse(localStorage.getItem("11AM-UR"));
    var twelvePM = JSON.parse(localStorage.getItem("12PM-UR"));
    var onePM = JSON.parse(localStorage.getItem("1PM-UR"));
    var twoPM = JSON.parse(localStorage.getItem("2PM-UR"));
    var threePM = JSON.parse(localStorage.getItem("3PM-UR"));
    var fourPM = JSON.parse(localStorage.getItem("4PM-UR"));
    var fivePM = JSON.parse(localStorage.getItem("5PM-UR"));

    nineAmElement.value = nineAM;
    tenAmElement.value = tenAM;
    elevenAmElement.value = elevenAM;
    twelvePmElement.value = twelvePM;
    onePmElement.value = onePM;
    twoPmElement.value = twoPM;
    threePmElement.value = threePM;
    fourPmElement.value = fourPM;
    fivePmElement.value = fivePM;

    if (currentHour >= 9 &&  currentHour < 10){
        $("#input9").addClass("present");
    }else if (currentHour > 9){
        $("#input9").addClass("past");
    }else if (currentHour < 9){
        $("#input9").addClass("future");
    }

    if (currentHour >= 10 &&  currentHour < 11){
        $("#input10").addClass("present");
    }else if (currentHour > 10){
        $("#input10").addClass("past");
    }else if (currentHour < 10){
        $("#input10").addClass("future");
    }

    if (currentHour >= 11 &&  currentHour < 12){
        $("#input11").addClass("present");
    }else if (currentHour > 11){
        $("#input11").addClass("past");
    }else if (currentHour < 11) {
        $("#input11").addClass("future");
    }   


    if (currentHour >= 12 &&  currentHour < 13){
        $("#input12").addClass("present");
    }else if (currentHour > 12){
        $("#input12").addClass("past");
    }else if (currentHour < 12) {
        $("#input12").addClass("future");
    }   

    if (currentHour >= 13 &&  currentHour < 14){
        $("#input1").addClass("present");
    }else if (currentHour > 13){
        $("#input1").addClass("past");
    }else if (currentHour < 13) {
        $("#input1").addClass("future");
    }   


    if (currentHour >= 14 &&  currentHour < 15){
        $("#input2").addClass("present");
    }else if (currentHour > 14){
        $("#input2").addClass("past");
    }else if (currentHour < 14) {
        $("#input2").addClass("future");
    }   


    if (currentHour >= 15 &&  currentHour < 16){
        $("#input3").addClass("present");
    }else if (currentHour > 15){
        $("#input3").addClass("past");
    }else if (currentHour < 15) {
        $("#input3").addClass("future");
    }   



    if (currentHour >= 16 &&  currentHour < 17){
        $("#input4").addClass("present");
    }else if (currentHour > 16){
        $("#input4").addClass("past");
    }else if (currentHour < 16) {
        $("#input4").addClass("future");
    }   


    if (currentHour >= 17 &&  currentHour < 18){
        $("#input5").addClass("present");
    }else if (currentHour > 17){
        $("#input5").addClass("past");
    }else if (currentHour < 17) {
        $("#input5").addClass("future");
    }   


}