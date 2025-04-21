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


function activate() {
    window.open("tablet", "_self");
}


function returntoHomeScreen() {
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = "home_screen.html";
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
        circle.style.marginTop = "15.9%";

        iframe.style.transform = "rotate(-90deg) translate(-5%, -6%)";
        iframe.style.height = width + "px";
        iframe.style.width = height + "px";
    } else {
        toggled = false;
        tablet.style.transform = "rotate(0)";
        circle.style.marginTop = "17px";

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
        case 1:
            page = 'projects/index';
            break;
        case 2:
            page = 'contacts';
            break;
        case 3:
            page = 'files/index';
            break;
    }
    window.open(page + ".html", "_self");
}

function setActive(id) {
    var footerLinks = document.querySelectorAll('footer > a > div');
    for (var i=0; i < footerLinks.length; i++) {
        footerLinks[i].classList.remove('active');
    }
    footerLinks[id].classList.add('active');
}