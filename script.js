// Delare a timer constant
const timer = {
    pomodoro: 25*60,
    shortBreak: 5*60,
    longBreak: 15*60
}

let countId;
let currentModeTimer = timer.pomodoro;

/**
 * 
 * ************ START FUNCTIONS ****************
 * 
 */

// Convert seconds to minutes and seconds
function secondsToMinutesAndSeconds(seconds) {
    let minutes = Math.floor(seconds / 60);
    let sec = ((seconds % 60)).toFixed(0);
    return minutes + ':' + (sec < 10 ? '0' : '') + sec;
}

// Convert minutes and seconds to seconds
function minutesAndSecondsToSeconds(seconds) {
    let [min, sec] = seconds.split(':');
    return (+min * 60) + +sec;
}


// Switch mode according to timer
function switchMode(currentModeTimer) {
    switch (currentModeTimer) {
        case 'pomodoro':
            var nodes = document.querySelectorAll('*');
            for(var i=0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = '#b392ac';
            }
            break;
        case 'shortBreak':
            var nodes = document.querySelectorAll('*');
            for(var i=0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = '#d1b3c4';
            }
            break;
        case 'longBreak':
            var nodes = document.querySelectorAll('*');
            for(var i=0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = '#e8c2ca';
            }
            break;
    }
}

// Update clock
function UpdateClock(timer) {
    document.getElementById('timer').innerHTML = secondsToMinutesAndSeconds(timer);
}


// Pomodoro logic
const pomodoro = function() {
    currentModeTimer = timer.pomodoro;
    stopCounting();
    UpdateClock(currentModeTimer);
    switchMode('pomodoro');
}

// Short Break logic
const shortBreak = function() {
    currentModeTimer = timer.shortBreak;
    stopCounting();
    UpdateClock(currentModeTimer);
    switchMode('shortBreak');
}

// Long Break logic
const longBreak = function() {
    currentModeTimer = timer.longBreak;
    stopCounting();
    UpdateClock(currentModeTimer);
    switchMode('longBreak');
}


// Count Down
const countDown = function() {
    // Start progressing
    document.getElementById('progressBar').style.width = '100%';
    document.getElementById('progressBar').style.backgroundColor = 'black';
    
    // play start sound
    startSound();

    // Start Counting... until 00:00
    if(!countId) {
        countId = setInterval(decrimentTime, 1000);
    }
}


// Decrement by second
const decrimentTime = function() {
    let time = minutesAndSecondsToSeconds(document.getElementById('timer').innerHTML);
    if(time == 0) {
        stopCounting();
        return;
    }
    time--;
    document.getElementById('timer').innerHTML = secondsToMinutesAndSeconds(time);
    updateProgress();
}


// Stop Counting
const stopCounting = function() {
    clearInterval(countId);
    countId = null;

    // play stop sound
    stopSound();
}

// Update progress
function updateProgress() {
    let currentTime = minutesAndSecondsToSeconds(document.getElementById('timer').innerHTML);
    let progress = (currentTime * 100 / currentModeTimer);
    document.getElementById('progressBar').style.width = progress + '%';
}


// Play start sound
function startSound() {
    const start = new Audio('assets/start.mp3');
    start.play();
}

// Play stop sound
function stopSound() {
    const stop = new Audio('assets/stop.mp3');
    stop.play();
}

/**
 * ************ END FUNCTIONS ****************
 */


// By Default
document.getElementById('timer').innerHTML = secondsToMinutesAndSeconds(timer.pomodoro);


// Add Event Listeners on Buttons
document.getElementById('pomodoro').addEventListener('click', pomodoro);
document.getElementById('shortBreak').addEventListener('click', shortBreak);
document.getElementById('longBreak').addEventListener('click', longBreak);
document.getElementById('start').addEventListener('click', countDown);
document.getElementById('stop').addEventListener('click', stopCounting);
