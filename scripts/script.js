function initActivation(type) {
    setTimeout(function() {
        var content;
        if (type == 'start') {
            content = document.getElementsByClassName("contentCentered")[0];
        } else {
            content = document.getElementsByClassName("tabletCentered")[0];
        }
        content.style.opacity = "1";
    }, 300);
}

function activate() {
    var content = document.getElementsByClassName("contentCentered")[0];
    content.style.opacity = "0";
    
    var audio = new Audio('sounds/activate.mp3');
    audio.play();

    setTimeout(function() {
        window.open("tablet", "_self");
    }, 600);
}


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

function initializeToolbarTime(isWhiteScreen) {
    var hoursMinutes = getHoursMinutes();
    document.getElementById("currentTime").innerHTML = hoursMinutes;

    if (isWhiteScreen) {
        var whiteScreen = document.getElementById("whiteScreen");

        setTimeout(function() {
            whiteScreen.style.transform = "scale(0)";
        }, 300);
        setTimeout(function() {
            whiteScreen.style.display = "none";
            whiteScreen.remove();
        }, 400);
    }

    setInterval(function() {
        var hoursMinutes = getHoursMinutes();
        document.getElementById("currentTime").innerHTML = hoursMinutes;
    }, 1000);
}


function returntoHomeScreen() {
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = "home_screen.html?startup=0";
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
        circle.classList.toggle("rotatedCircle");

        iframe.classList.toggle("rotatedIframe");
        iframe.style.height = width + "px";
        iframe.style.width = height + "px";
    } else {
        toggled = false;
        tablet.style.transform = "rotate(0)";
        circle.classList.toggle("rotatedCircle");

        iframe.classList.toggle("rotatedIframe");
        iframe.style.height = width + "px";
        iframe.style.width = height + "px";
    }
}


function navigateToApp(x) {
    var page;
    var whiteScreen = document.getElementById("whiteScreen");

    switch(x) {
        case 0:
            page = 'about/index';
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

    whiteScreen.style.display = "block";
    setTimeout(function() {
        whiteScreen.style.transform = "scale(1)";
    }, 10);
    
    setTimeout(function() {
        window.open(page + ".html?anim=1", "_self");
    }, 400);
}