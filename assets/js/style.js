// SAVE BUTTON
// saves entry to local storage
// needs render function to display on the schedule after refresh
// this stackoverflow link might be helpful:
// https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te

// jQuery things I will need:
// getElementById ---> creating variables based on id
//      --- var name = $('#id-name')
// set text content ---> setting text of currentDay to actually be the current time 
//      --- variable.text('moment function for current time')


// HEADER
var currentDay = moment().format('LL');
$('#currentDay').text(currentDay);


// GET CURRENT TIME
var currentTime = moment().hour();

// FOR LOOP - CALLS COMPARISON FUNCTION WITH HOUR=9 --> HOUR=17
for (var hour = 9; hour < 18; hour++) {
    compareTime(hour);
};

// DEFINE COMPARISON FUNCTION
function compareTime (hour) {
    // Select block based on the id value of '#hour-(value of variable hour)'
    var hourBlock = $('#hour-' + hour);

    // Adds class based on time comparison
    if (currentTime > hour) {
        hourBlock.addClass('past');
    } else if (currentTime === hour) {
        hourBlock.addClass('present');
    } else {
        hourBlock.addClass('future');
    }
};

