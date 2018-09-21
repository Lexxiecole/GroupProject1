var config = {
    apiKey: "AIzaSyAlUnK57pmSv5MxlaZNXKYfRWg7rbgExn0",
    authDomain: "focus-project-636cf.firebaseapp.com",
    databaseURL: "https://focus-project-636cf.firebaseio.com",
    projectId: "focus-project-636cf",
    storageBucket: "",
    messagingSenderId: "665041759126"
};

firebase.initializeApp(config);

var database = firebase.database();

var toDoCount = 0;

setInterval(function showTime() {
    var d = new Date();
    document.getElementById("current-time").textContent = ("Current Time: " + d);
    // console.log(d);
}, 1000);
// showTime();

var makeTask = function (snap) {
    toDoCount++

    var rowDiv = $("<div>")
    var checkCol = $("<div>")
    var formDiv = $("<div>")
    var taskCol = $("<div>")
    var timeCol = $("<div>")
    var taskPara = $("<p>")
    var commentsPara = $("<p>")
    var startTimePara = $("<p>")
    // var endTimePara = $("<p>")
    var datePara = $("<p>")
    // var checkbox = $("<input>")
    var toDoTask = snap.val().formToDoTask;
    var addSetDate = snap.val().formAddSetDate;
    var addComments = snap.val().formAddComments;
    var addStartTime = snap.val().formAddStartTIme;
    var addEndTime = snap.val().formAddEndTime;

    taskPara.text(toDoTask)
    commentsPara.text(addComments)
    startTimePara.text(addStartTime + "-" + addEndTime)
    // endTimePara.text(addEndTime)
    datePara.text(addSetDate)

    rowDiv.addClass("row border taskBack")
    rowDiv.attr("id", "item-" + toDoCount)
    checkCol.addClass("col-2")
    formDiv.addClass("form-check")
    taskCol.addClass("col-8")
    timeCol.addClass("col-2")
    taskPara.addClass("task")
    commentsPara.addClass("comments")
    startTimePara.addClass("timeDue")
    // endTimePara.addClass("timeDue")
    datePara.addClass("dateDue")
    // checkbox.addClass("form-check-input")
    // checkbox.attr("type", "checkbox")
    // checkbox.attr("id", "checkboxID")

    var toDoComplete = $("<button class='btn-primary' id='check'>");
    toDoComplete.attr("data-to-do", toDoCount);
    toDoComplete.addClass("checkbox");
    toDoComplete.append("✓");
    
    var deleteTask = $("<button id='x'>");
    deleteTask.attr("data-to-delete", toDoCount);
    deleteTask.addClass("delete");
    deleteTask.append("x");
    timeCol.append(deleteTask);

    formDiv.append(toDoComplete)

    // formDiv.append(checkbox)
    checkCol.append(formDiv)
    taskCol.append(taskPara)
    taskCol.append(commentsPara)
    timeCol.append(startTimePara)
    // timeCol.append(endTimePara)
    timeCol.append(datePara)

    rowDiv.append(checkCol)
    rowDiv.append(taskCol)
    rowDiv.append(timeCol)
    
    $("#taskDiv").append(rowDiv)
   
}


//submit button clicked then do this function
$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    var task = $("#taskInput").val().trim()
    var comments = $("#commentsInput").val().trim()
    var startTime = $("#startTimeInput").val().trim()
    var endTime = $("#endTimeInput").val().trim()
    var dateValue = $("#dateInput").val().trim()

    var taskData = {

        formtoDoCount: toDoCount,
        formToDoTask: task,
        formAddSetDate: dateValue,
        formAddComments: comments,
        formAddStartTIme: startTime,
        formAddEndTime: endTime,
    
    };
    
    console.log(taskData);
    
    database.ref("Ver2").push(taskData);

    $("#taskInput").val(" ");
    $("#startTimeInput").val(" ");
    $("#endTimeInput").val(" ");
    $("#dateInput").val(" ");
    $("#commentsInput").val(" ");

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


database.ref("Ver2").on("child_added", function (childSnapshot) {
    makeTask(childSnapshot)

    // $("#tableContents").append("<tr><td>" + '<button class="btn-primary"><i class="fa fa-check" id= "delete" aria-hidden="true"></i></i></button>' + "</td><td>" + addSetDate + "</td><td>" + toDoTask + "</td><td>" +
    //     addStartTime + "</td><td>" + addEndTime + "</td><td>" + addComments + "</td></tr>");


})

var checked = false
//remove item
$(document.body).on("click", ".checkbox", function () {
    var thisNumber = $(this).attr("data-to-do");
    var thisDiv = $("#item-" + thisNumber)

    if (!checked) {
        thisDiv.removeClass("taskBack")
        thisDiv.addClass("checkTaskBack")
        checked = true
    }
    else if (checked) {
        thisDiv.removeClass("checkTaskBack")
        thisDiv.addClass("taskBack")
        checked = false
    }

    // console.log("click")
});
$(document.body).on("click", ".delete", function () {
    var thisNumber = $(this).attr("data-to-delete");

    $("#item-" + thisNumber).remove();
    ref.child(key).remove();
    console.log("click")
});



