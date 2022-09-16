var hitLeftTimer = undefined;

function hitLeft() {
    $("#hit_left").fadeIn();

    if (hitLeftTimer != undefined) {
        clearTimeout(hitLeftTimer);
        hitLeftTimer = undefined;
    }

    hitLeftTimer = setTimeout(() => {
        $("#hit_left").fadeOut();
    }, 500);
}

var hitRightTimer = undefined;

function hitRight() {
    $("#hit_right").fadeIn();

    if (hitRightTimer != undefined) {
        clearTimeout(hitRightTimer);
        hitRightTimer = undefined;
    }

    hitRightTimer = setTimeout(() => {
        $("#hit_right").fadeOut();
    }, 500);
}

var hitTopTimer = undefined;

function hitTop() {
    $("#hit_top").fadeIn();

    if (hitTopTimer != undefined) {
        clearTimeout(hitTopTimer);
        hitTopTimer = undefined;
    }

    hitTopTimer = setTimeout(() => {
        $("#hit_top").fadeOut();
    }, 500);
}

var hitBottomTimer = undefined;

function hitBottom() {
    $("#hit_bottom").fadeIn();

    if (hitBottomTimer != undefined) {
        clearTimeout(hitBottomTimer);
        hitBottomTimer = undefined;
    }

    hitBottomTimer = setTimeout(() => {
        $("#hit_bottom").fadeOut();
    }, 500);
}

var hitMarkerTimer = undefined;

function hitMarker() {
    $("#hit_marker").fadeIn(50);

    if (hitMarkerTimer != undefined) {
        clearTimeout(hitMarkerTimer);
        hitMarkerTimer = undefined;
    }

    hitMarkerTimer = setTimeout(() => {
        $("#hit_marker").fadeOut(50);
    }, 200);
}

function headshot()
{
    var headshotSound = new Audio("package://cef/utils/sounds/headshot.mp3");
    headshotSound.play();
}