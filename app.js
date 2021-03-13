//for first call
mainCalulation();
//for updates
var intervalId = window.setInterval(function() {
  mainCalulation();
}, 1000);



//calcs
function mainCalulation() {
  var today = new Date();
  var dd = new Date(2021, 1, 9, 7);
  var dayDiff = Math.floor(getDifferenceInDays(dd, today));
  var hrDiff = Math.floor(getDifferenceInHours(dd, today) % 24);
  var minDiff = Math.floor(getDifferenceInMinutes(dd, today) - ((dayDiff * 24 * 60) + (hrDiff * 60)));
  var secDiff = Math.floor(getDifferenceInSeconds(dd, today) - ((dayDiff * 24 * 60 * 60) + (hrDiff * 60 * 60) + (minDiff * 60)))
  var monthDiff = Math.floor(dayDiff / 30);
  dayDiff = dayDiff - (monthDiff * 30)
  var yearDiff = Math.floor(monthDiff / 12);
  monthDiff = monthDiff - (yearDiff * 12);
  console.log(`Year: ${yearDiff} Month:${monthDiff} Days: ${dayDiff} Hours: ${hrDiff} Mins: ${minDiff} Seconds: ${secDiff}`);
  setTime(yearDiff, monthDiff, dayDiff, hrDiff, minDiff, secDiff);
}

function setTime(yearDiff, monthDiff, dayDiff, hrDiff, minDiff, secDiff) {
  document.getElementById("year").innerText = yearDiff;
  document.getElementById("month").innerText = monthDiff;
  document.getElementById("day").innerText = dayDiff;
  document.getElementById("hr").innerText = hrDiff;
  document.getElementById("min").innerText = minDiff;
  document.getElementById("sec").innerText = secDiff;
}

//PRE-MADE FUNCTIONS
function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

function getDifferenceInHours(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60);
}

function getDifferenceInMinutes(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60);
}

function getDifferenceInSeconds(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / 1000;
}
