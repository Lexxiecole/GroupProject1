var makeTask = function () {
    var rowDiv = $("<div>")
    var checkCol = $("<div>")
    var formDiv = $("<div>")
    var taskCol = $("<div>")
    var timeCol = $("<div>")
    var taskPara = $("<p>")
    var commentsPara = $("<p>")
    var timePara = $("<p>")
    var datePara = $("<p>")
    var checkbox = $("<input>")

    rowDiv.addClass("row border")
    checkCol.addClass("col-2")
    formDiv.addClass("form-check")
    taskCol.addClass("col-8")
    timeCol.addClass("col-2")
    taskPara.attr("id", "task")
    commentsPara.attr("id", "comments")
    timePara.attr("id", "timeDue")
    datePara.attr("id", "dateDue")
    checkbox.addClass("form-check-input")
    checkbox.attr("type", "checkbox")
    checkbox.attr("id", "checkboxID")
    
    formDiv.append(checkbox)
    checkCol.append(formDiv)
    taskCol.append(taskPara)
    taskCol.append(commentsPara)
    timeCol.append(timePara)
    timeCol.append(datePara)

    rowDiv.append(checkCol)
    rowDiv.append(taskCol)
    rowDiv.append(timeCol)


}
$(document).on("click", "#submitBtn", function () {

})
$(document).on("click", "#toCompleteBtn", function () {

})
$(document).on("click", "#completedBtn", function () {

})

