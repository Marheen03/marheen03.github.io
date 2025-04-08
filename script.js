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


function returntoHomeScreen() {
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = "pages/home_screen.html";
}

toggled = false;
function rotateTablet() {
    var tablet = document.getElementsByClassName("tablet")[0];
    var iframe = document.getElementsByTagName("iframe")[0];
    var circle = document.getElementsByClassName("circle")[0];
    var height = iframe.offsetHeight;
    var width = iframe.offsetWidth;

    if (!toggled) {
        toggled = true;
        tablet.style.transform = "rotate(90deg)";
        circle.style.marginTop = "14.5%";

        iframe.style.transform = "rotate(-90deg) translate(-5%, -6%)";
        iframe.style.height = width + "px";
        iframe.style.width = height + "px";
    } else {
        toggled = false;
        tablet.style.transform = "rotate(0)";
        circle.style.marginTop = "16px";

        iframe.style.transform = "rotate(0) translate(0, 0)";
        iframe.style.height = width + "px";
        iframe.style.width = height + "px";
    }
}

function navigateToApp(x) {
    var page;
    switch(x) {
        case 0:
            page = 'about';
            break;
        case 2:
            page = 'contacts';
            break;
        
    }
    window.open(page + ".html", "_self");
}