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

// RETREIVING FROM LOCAL STORAGE
for (var hourIn = 9; hourIn < 18; hourIn++) {
    var hourScheduled = localStorage.getItem('hour-' + hourIn);
    
    if (hourScheduled) {
        $("#hour-" + hourIn).children("textarea").val(hourScheduled)
    }
}

// SAVING TO LOCAL STORAGE 
$(".saveBtn").on("click", function () {
    var input = $(this).parent().children('textarea');
    var task = input.val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, task);
})