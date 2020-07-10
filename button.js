  
  
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  if (daylist[day]!= "" && daylist[day] != "Sunday" && daylist[day] != "Saturday") {
    
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    
    if (hour >= 15  && (hour <= 18))  {
      $("#buttonLive").show();
    } else {
      $("#buttonLive").hide();
    }

  } else if (daylist[day] == "Saturday") {

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    
    if (hour >= 9  && (hour <= 13))  {
      $("#buttonLive").show();
    } else {
      $("#buttonLive").hide();
    }

  } else if (daylist[day] == "Sunday") {

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    
    if (hour >= 21  && (hour <= 1))  {
      $("#buttonLive").show();
    } else {
      $("#buttonLive").hide();
    }

  }






// var timeList = [
//   { 'days': [0,1,2,3,4], 'times': [ [ 10, 00 ], [18, 30] ] },
//   { 'days': [5], 'times': [ [ 10,00 ], [12, 30] ] },
//   { 'days': [6], 'times': [ [ 22,00 ], [00, 30] ] }
// ];

// var minutesNearTimeListToShow = 30;
// var pollSeconds = 60;

// $(document).ready(function() {
//   checkForShowing();
// });

// function checkForShowing() {

//   var now = new Date();
//   var currentDay = now.getDay();
//   var currentHour = now.getHours();
//   var currentMinute = now.getMinutes();
//   var timeAndDay = getNextTimeAndDay (currentDay, currentHour, currentMinute);

//   var nextAlertDue = new Date(now.getYear() + 1900, now.getMonth(), now.getDate(), timeAndDay.hour, timeAndDay.minute);
//   nextAlertDue.setDate(now.getDate() - currentDay + timeAndDay.day);

//   var differenceSeconds = (nextAlertDue - now) / 1000;

//   if (differenceSeconds < minutesNearTimeListToShow * 60) {

//       $("#buttonLive").show();
//       window.setTimeout (function() {
//           $("#buttonLive").hide();
//       }, differenceSeconds * 1000);

//   } else {
//       $("#buttonLive").hide();
//       window.setTimeout(checkForShowing, pollSeconds * 1000);
//   }

// }

// function getNextTimeAndDay(tDay, tHour, tMinute) {

//   var times = getTimesForDay(tDay);
//   var nextTime = getNextTime (tHour, tMinute, times)

//   if (!nextTime) {
//       tHour = 0;
//       tMinute = 0;        
//       tDay++;
//       if (tDay == 7) { tDay = 0; }
//       times = getTimesForDay(tDay);
//       nextTime = getNextTime (tHour, tMinute, times);
//   }

//   return { day: tDay, hour: nextTime[0], minute: nextTime[1] };

// }

// function getNextTime (tHour, tMinute, times) {

//   for (var i in times) {
//       if ((tHour < times[i][0]) || (tHour == times[i][0] && tMinute <= times[i][1])) {
//           return times[i];
//       }
//   }

//   return false;

// }

// function getTimesForDay(currentDay) {

//   var times = false;

//   for (var i in timeList) {
//       var days = timeList[i].days;
//       if (days.indexOf(currentDay) > -1) {
//           times =  timeList[i].times;
//       }
//   }

//   return times;

// }

