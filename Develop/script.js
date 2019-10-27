$(document).ready(function(){



var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);

var hourSlot = $(".hour").data("value")


// for changing color based on current time
$(".hour").each( (key, element) => {
     var nowHour = moment().format("HH");
     var timeSlot = $(element).attr('data-value');

     if (nowHour < timeSlot) {
         $(element).siblings("textarea:first").css({"background-color": "gray"})
     } 
     
     if (nowHour > timeSlot) {
         $(element).siblings("textarea:first").css({"background-color": "green"})
     } 
     
     if (nowHour === timeSlot) {
         $(element).siblings("textarea:first").css({"background-color": "red"})
     }
    
 });

var text9Array = [];
var text10Array = [];
var text11Array = [];
var text12Array = [];
var text13Array = [];
var text14Array = [];
var text15Array = [];
var text16Array = [];
var text17Array = [];

// The below is not very efficient but works, if I had more time I would figure out a way to do this better
// for 9 oclock text area save

    render9();


 $(".saveBtn9").on("click", (event) => {
    event.preventDefault();
    var text= $("#textArea9").val();
   
   text9Array.splice(0, 1, text)
   local9save()
   render9()
 });

 function local9save() {
    localStorage.setItem("text9", JSON.stringify(text9Array))
 }

 function render9 () {
    var storedText9 = JSON.parse(localStorage.getItem("text9"));
    
  if (storedText9 != null){
    var text= storedText9[0]
    $("#textArea9").val(text);
  }  
  }
 

// // for 10 oclock
render10();


$(".saveBtn10").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea10").val();
  
  text10Array.splice(0, 1, text)
  local10save()
  render10()
});

function local10save() {
   localStorage.setItem("text10", JSON.stringify(text10Array))
}

function render10 () {
   var storedText10 = JSON.parse(localStorage.getItem("text10"));
   
 if (storedText10 != null){
   var text= storedText10[0]
   $("#textArea10").val(text);
 }  
 }

//  for 11 oclock
render11();


$(".saveBtn11").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea11").val();
  
  text11Array.splice(0, 1, text)
  local11save()
  render11()
});

function local11save() {
   localStorage.setItem("text11", JSON.stringify(text11Array))
}

function render11 () {
   var storedText11 = JSON.parse(localStorage.getItem("text11"));
   
 if (storedText11 != null){
   var text= storedText11[0]
   $("#textArea11").val(text);
 }  
 }

//  for 12 oclock
render12();


$(".saveBtn12").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea12").val();
  
  text12Array.splice(0, 1, text)
  local12save()
  render12()
});

function local12save() {
   localStorage.setItem("text12", JSON.stringify(text12Array))
}

function render12 () {
   var storedText12 = JSON.parse(localStorage.getItem("text12"));
   
 if (storedText12 != null){
   var text= storedText12[0]
   $("#textArea12").val(text);
 }  
 }

//  for 1 oclock
render13();


$(".saveBtn13").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea13").val();
  
  text13Array.splice(0, 1, text)
  local13save()
  render13()
});

function local13save() {
   localStorage.setItem("text13", JSON.stringify(text13Array))
}

function render13 () {
   var storedText13 = JSON.parse(localStorage.getItem("text13"));
   
 if (storedText13 != null){
   var text= storedText13[0]
   $("#textArea13").val(text);
 }  
 }

//  for 2 oclock
render14();


$(".saveBtn14").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea14").val();
  
  text14Array.splice(0, 1, text)
  local14save()
  render14()
});

function local14save() {
   localStorage.setItem("text14", JSON.stringify(text14Array))
}

function render14 () {
   var storedText14 = JSON.parse(localStorage.getItem("text14"));
   
 if (storedText14 != null){
   var text= storedText14[0]
   $("#textArea14").val(text);
 }  
 }

//  for 3 oclock
render15();


$(".saveBtn15").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea15").val();
  
  text15Array.splice(0, 1, text)
  local15save()
  render15()
});

function local15save() {
   localStorage.setItem("text15", JSON.stringify(text15Array))
}

function render15 () {
   var storedText15 = JSON.parse(localStorage.getItem("text15"));
   
 if (storedText15 != null){
   var text= storedText15[0]
   $("#textArea15").val(text);
 }  
 }

//  for 4 oclock
render16();


$(".saveBtn16").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea16").val();
  
  text16Array.splice(0, 1, text)
  local16save()
  render16()
});

function local16save() {
   localStorage.setItem("text16", JSON.stringify(text16Array))
}

function render16 () {
   var storedText16 = JSON.parse(localStorage.getItem("text16"));
   
 if (storedText16 != null){
   var text= storedText16[0]
   $("#textArea16").val(text);
 }  
 }

//  for 5 oclock
render17();


$(".saveBtn17").on("click", (event) => {
   event.preventDefault();
   var text= $("#textArea17").val();
  
  text17Array.splice(0, 1, text)
  local17save()
  render17()
});

function local17save() {
   localStorage.setItem("text17", JSON.stringify(text17Array))
}

function render17 () {
   var storedText17 = JSON.parse(localStorage.getItem("text17"));
   
 if (storedText17 != null){
   var text= storedText17[0]
   $("#textArea17").val(text);
 }  
 }
});
