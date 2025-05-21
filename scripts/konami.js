var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }

    current++;
    if (pattern.length === current) {
        current = 0;
        var audio = new Audio('../sounds/sam1.mp3');
        audio.play();
        
        var tablet = document.getElementsByClassName("tablet")[0];
        var button = document.getElementsByClassName("rotateTabletButton")[0];
        button.removeAttribute("onclick");
        button.style.cursor = "initial";

        var subtitles = document.getElementById('subtitles');
        subtitles.style.display = "block";
        subtitles.innerHTML = "Secret mode activated.";

        const rotation = getRotationDegrees(tablet);
        var spin;

        if (rotation == 0) {
            spin = [
                { transform: "rotate(0)" },
                { transform: "rotate(720deg)" },
            ];
        } else {
            spin = [
                { transform: "rotate(90)" },
                { transform: "rotate(810deg)" },
            ];    
        }
        const timing = {
            duration: 9000,
            easing: "ease-in-out"
        };

        setTimeout(function() {
            audio = new Audio('../sounds/spin.mp3');
            audio.play();

            subtitles.style.display = "none";
        }, 1700);

        setTimeout(function() {
            tablet.animate(spin, timing);
            document.body.style.backgroundColor = "#1a1a1a";
        }, 1750);

        setTimeout(function() {
            audio = new Audio('../sounds/sam2.mp3');
            audio.play();

            subtitles.style.display = "block";
            subtitles.innerHTML = "Secret mode aborted.";
        }, 10600);

        setTimeout(function() {
            document.body.style.backgroundColor = "#4B4B4B";
            button.setAttribute("onclick", "rotateTablet()");
            button.style.cursor = "pointer";
        }, 10700);

        setTimeout(function() {
            subtitles.style.display = "none";
        }, 12000);
    }
};

document.addEventListener('keydown', keyHandler, false);


function getRotationDegrees(element) {
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.mozTransform;

    // If there's no transform applied
    if (!transform || transform === 'none') {
        return 0;
    }

    // Transform matrix looks like: matrix(a, b, c, d, e, f)
    const values = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);

    // Calculate rotation in degrees
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle;
}