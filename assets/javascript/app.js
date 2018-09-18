var toDoCount = 0;

var makeTask = function () {
    var rowDiv = $("<div>")
    var checkCol = $("<div>")
    var formDiv = $("<div>")
    var taskCol = $("<div>")
    var timeCol = $("<div>")
    var taskPara = $("<p>")
    var commentsPara = $("<p>")
    var startTimePara = $("<p>")
    var endTimePara = $("<p>")
    var datePara = $("<p>")
    // var checkbox = $("<input>")

    taskPara.text($("#taskInput").val().trim())
    commentsPara.text($("#commentsInput").val().trim())
    startTimePara.text($("#startTimeInput").val().trim())
    endTimePara.text($("#endTimeInput").val().trim())
    datePara.text($("#dateInput").val().trim())

    rowDiv.addClass("row border")
    rowDiv.attr("id", "item-", + toDoCount)
    checkCol.addClass("col-2")
    formDiv.addClass("form-check")
    taskCol.addClass("col-8")
    timeCol.addClass("col-2")
    taskPara.attr("id", "task")
    commentsPara.attr("id", "comments")
    startTimePara.attr("id", "timeDue")
    endTimePara.attr("id", "timeDue")
    datePara.attr("id", "dateDue")
    // checkbox.addClass("form-check-input")
    // checkbox.attr("type", "checkbox")
    // checkbox.attr("id", "checkboxID")

    var toDoComplete = $("<button class='btn-primary' id='check'>");
    toDoComplete.attr("data-to-do", toDoCount);
    toDoComplete.addClass("checkbox");
    toDoComplete.append("✓");
    
    formDiv.append(toDoComplete)

    // formDiv.append(checkbox)
    checkCol.append(formDiv)
    taskCol.append(taskPara)
    taskCol.append(commentsPara)
    timeCol.append(startTimePara)
    timeCol.append(endTimePara)
    timeCol.append(datePara)

    rowDiv.append(checkCol)
    rowDiv.append(taskCol)
    rowDiv.append(timeCol)

    $("#taskInput").val(" ");
    $("#startTimeInput").val(" ");
    $("#endTimeInput").val(" ");
    $("#dateInput").val(" ");
    $("#commentsInput").val(" ");

    $("#taskDiv").append(rowDiv)

}


//submit button clicked then do this function
$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    makeTask();
    // var toDoTask = $("#taskInput").val().trim();

    // var thisTask = $("<p>");


    // //date
    // var setDate = $("<p>");
    // setDate.addClass("set-date");

    // var addSetDate = $("#dateInput").val().trim();
    // thisTask.append(" Date: " + addSetDate + "<br>");


    // thisTask.attr("id", "item-", + toDoCount)
    // thisTask.append("Task: " + toDoTask + "<br>");

    // toDoCount++;


    // var comments = $("<p>");
    // comments.addClass("add-comments");

    // var addComments = $("#commentsInput").val().trim();
    // thisTask.append(" Comments: " + addComments);


    // //start time
    // var startToDo = $("<p>");
    // startToDo.addClass("starter");

    // var addStartTime = $("#startTimeInput").val().trim();
    // thisTask.append("<br>" + "Start Time: " + addStartTime);

    // //end time
    // var endTime = $("<p>");
    // endTime.addClass("end-time");

    // var addEndTime = $("#endTimeInput").val().trim();
    // thisTask.append(" End Time: " + addEndTime);


    // //checkmark button

    // var toDoComplete = $("<button class='btn-primary' id='check'>");
    // toDoComplete.attr("data-to-do", toDoCount);
    // toDoComplete.addClass("checkbox");
    // toDoComplete.append("✓");

    // thisTask.prepend(toDoComplete);


    // $("#taskInput").val(" ");
    // $("#startTimeInput").val(" ");
    // $("#endTimeInput").val(" ");
    // $("#dateInput").val(" ");
    // $("#commentsInput").val(" ");


    // $(".to-do-list").append(thisTask);

});


//remove item
$(document.body).on("click", ".checkbox", function () {
    var thisNumber = $(this).attr("data-to-do");

    $("#item-" + thisNumber).remove();
    console.log("click")
});



