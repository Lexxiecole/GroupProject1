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
    // toDoCount++

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
    var num = snap.val().formtoDoCount

    taskPara.text(toDoTask)
    commentsPara.text(addComments)
    startTimePara.text(addStartTime + "-" + addEndTime)
    // endTimePara.text(addEndTime)
    datePara.text(addSetDate)

    rowDiv.addClass("row border taskBack")
    rowDiv.attr("id", "item-" + num)
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
    toDoComplete.attr("data-to-do", num);
    toDoComplete.addClass("checkbox");
    toDoComplete.append("✓");
    
    var deleteTask = $("<button id='x'>");
    deleteTask.attr("data-to-delete", num);
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
$(document).on("click", "#submitBtn", function (event) {
    event.preventDefault();

    toDoCount++

    var task = $("#taskInput").val().trim()
    var comments = $("#commentsInput").val().trim()
    var startTime = $("#startTimeInput").val().trim()
    var endTime = $("#endTimeInput").val().trim()
    var dateValue = $("#dateInput").val()

    var taskData = {

        formtoDoCount: toDoCount,
        formToDoTask: task,
        formAddSetDate: dateValue,
        formAddComments: comments,
        formAddStartTIme: startTime,
        formAddEndTime: endTime,
    
    };
    
    console.log(taskData);
    var itemNum = "item" + toDoCount
    console.log(itemNum)
    database.ref("items/" + itemNum).set(taskData);
    database.ref("theFinalCountDown").set({
        toDoCount: toDoCount
    })

    $("#taskInput").val(" ");
    $("#startTimeInput").val(" ");
    $("#endTimeInput").val(" ");
    $("#dateInput").val(" ");
    $("#commentsInput").val(" ");

    
});

database.ref("theFinalCountDown").on("value", function (snapChild) {
    toDoCount = snapChild.val().toDoCount
    console.log(toDoCount)
    console.log("help")
})

database.ref("items").on("child_added", function (childSnapshot) {
    makeTask(childSnapshot)
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
    
});
$(document).on("click", ".delete", function () {
    var thisNumber = $(this).attr("data-to-delete");
    console.log(thisNumber)
    $("#item-" + thisNumber).remove();
    database.ref("items/item" + thisNumber).remove()
    console.log("click")
});



