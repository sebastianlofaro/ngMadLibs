var questionNumber;

function hideAllQuestions() {
    $('#femaleName').hide();
    $('#jobTitle').hide();
    $('#tediousTask').hide();
    $('#dirtyTask').hide();
    $('#celeberity').hide();
    $('#uselessSkill').hide();
    $('#obnoxiousCeleberity').hide();
    $('#hugeNumber').hide();
    $('#adjective').hide();
    $('.result').hide();
}

$(document).ready(function () {
    console.log("ready!");
    hideAllQuestions();

    //Set initial question
    questionNumber = 0;
});

var questionArray = ["#femaleName", "#jobTitle", "#tediousTask", "#dirtyTask", "#celeberity", "#uselessSkill", "#obnoxiousCeleberity", "#hugeNumber", "#adjective", ".result"]



$(document).on('click', '.nextButton', function () {
    hideAllQuestions();
    $(questionArray[questionNumber]).show("slow");
    if (questionNumber < (questionArray.length - 1)) {
        questionNumber++;
    }
})
