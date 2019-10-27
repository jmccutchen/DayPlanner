$(document).ready(function(){



var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);

// need a for loop to go through all time slots and run if statement that includes moment() isAfter then turn a color

// var timeSlot= 


var hourSlot = $(".hour").data("value")

// $.each(hourSlot, function (key, value) {
//    var nowHour = moment().format("HH");
//     var timeSlot = $(this).data('value');
//     if (nowHour < value) {
//         $(this).css({"background-color": "gray"})
//     } else if (nowHour > value) {
//         $(this).css({"background-color": "green"})
//     } else if (nowHour === value) {
//         $(this).css({"background-color": "red"})
//     }
//     console.log(key+ ":"+ value);
   
// });   




$(".hour").each( (key, element) => {
     var nowHour = moment().format("HH");
     var timeSlot = $(element).attr('data-value');
    // var JSONstring = JSONstringify.timeSlot
    //  array.push($(".hour").data("value"))

     if (nowHour < timeSlot) {
         $(element).siblings("textarea:first").css({"background-color": "gray"})
     } 
     
     if (nowHour > timeSlot) {
         $(element).siblings("textarea:first").css({"background-color": "green"})
     } 
     
     if (nowHour === timeSlot) {
         $(element).siblings("textarea:first").css({"background-color": "red"})
     }
     console.log(element);
 
     console.log(timeSlot);
     console.log(nowHour);
 });

//  $("i").on("click", () => {


//  })

});
