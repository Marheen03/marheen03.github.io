function getHoursMinutes() {
    const date = new Date();
    var hoursMinutes = date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return hoursMinutes;
}

function initializeHomeScreen() {
    var hoursMinutes = getHoursMinutes();
    document.getElementById("currentTime").innerHTML = hoursMinutes;
    document.getElementById("currentTime1").innerHTML = hoursMinutes;

    const date = new Date();
    var days = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
    var dayName = days[date.getDay()];
    var currentDate = date.getDate() + ". " + (date.getMonth()+1) + ". " + date.getFullYear() + ".";
    document.getElementById("currentDay").innerHTML = dayName + ", " + currentDate;

    setInterval(function() {
        var hoursMinutes = getHoursMinutes();
        document.getElementById("currentTime").innerHTML = hoursMinutes;
        document.getElementById("currentTime1").innerHTML = hoursMinutes;
    }, 1000);
}

function initializeToolbarTime() {
    var hoursMinutes = getHoursMinutes();
    document.getElementById("currentTime").innerHTML = hoursMinutes;

    setInterval(function() {
        var hoursMinutes = getHoursMinutes();
        document.getElementById("currentTime").innerHTML = hoursMinutes;
    }, 1000);
}