// Delare a timer constant
const timer = {
    pomodoro: 25*60*1000,
    shortBreak: 5*60*1000,
    longBreak: 15*60*1000
}

/**
 * 
 * ************ START FUNCTIONS ****************
 * 
 */

// Convert millis to minutes and seconds
function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

// Convert minutes and seconds to millis
function minutesAndSecondsToMillis(millis) {
    let [min, sec] = millis.split(':');
    return min*60*1000 + sec*1000;
}


// Switch mode according to timer
function switchMode(curentTimer) {
    switch (curentTimer) {
        case 'pomodoro':
            var nodes = document.querySelectorAll('*');
            for(var i=0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = 'bisque';
            }
            break;
        case 'shortBreak':
            var nodes = document.querySelectorAll('*');
            for(var i=0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = 'darkgray';
            }
            break;
        case 'longBreak':
            var nodes = document.querySelectorAll('*');
            for(var i=0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = 'darkcyan';
            }
            break;
    }
}

// Update clock
function UpdateClock(timer) {
    document.getElementById('timer').innerHTML = millisToMinutesAndSeconds(timer);
}


// Pomodoro logic
const pomodoro = function() {
    UpdateClock(timer.pomodoro);
    switchMode('pomodoro');
}

// Short Break logic
const shortBreak = function() {
    UpdateClock(timer.shortBreak);
    switchMode('shortBreak');
}

// Long Break logic
const longBreak = function() {
    UpdateClock(timer.longBreak);
    switchMode('longBreak');
}


// Start & Stop logic
const startStop = function() {
    let action = document.getElementById('startStop').innerHTML;
    if(action === 'Start') {
        document.getElementById('startStop').innerHTML = 'Stop';
        countDown();
    } else if(action === 'Stop') {
        document.getElementById('startStop').innerHTML = 'Start';
        stopCounting();
    }
}


// Count Down
function countDown() {
    let time = minutesAndSecondsToMillis(document.getElementById('timer').innerHTML);
    console.log(time);

    // Start Counting... to 00:00

}

// Stop Counting
function stopCounting() {
    
}

/**
 * ************ END FUNCTIONS ****************
 */


/**
 * 
 * ************ START MAIN ****************
 * 
 */


// By Default
document.getElementById('timer').innerHTML = millisToMinutesAndSeconds(timer.pomodoro);


// Add Event Listeners on Buttons
document.getElementById('pomodoro').addEventListener('click', pomodoro);
document.getElementById('shortBreak').addEventListener('click', shortBreak);
document.getElementById('longBreak').addEventListener('click', longBreak);
document.getElementById('startStop').addEventListener('click', startStop);


// Add some sounds
// Add a progress bar if needed


/**
 * 
 * ************ END MAIN ****************
 * 
 */