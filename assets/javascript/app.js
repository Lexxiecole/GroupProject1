function showTime () {
    var d = new Date();
    document.getElementById("current-time").textContent= ("Current Time: " + d);
    console.log(d);
};
showTime();



//initialize firebase here
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
  


//create to do variable
var toDoCount= 0;

//submit button clicked then do this function
$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var toDoTask = $("#addTask1").val().trim();

      
    var addSetDate = $("#dateDue1").val().trim();

    var addComments = $("#comments1").val().trim();
    // thisTask.append( " Comments: " + addComments);

    

    var addStartTime = $("#startTime").val().trim();
    // thisTask.append("<br>" + "Start Time: " + addStartTime);


    var addEndTime = $("#endTime").val().trim();
    // thisTask.append( " End Time: " + addEndTime);



$("#addTask1").val(" ");
$("#startTime").val(" ");
$("#endTime").val(" ");
$("#dateDue1").val(" ");
$("#comments1").val(" ");

toDoCount++;
console.log(toDoCount);

var taskData = {
    
    formtoDoCount:toDoCount,
    formToDoTask: toDoTask,
    formAddSetDate: addSetDate,
    formAddComments: addComments,
    formAddStartTIme: addStartTime,
    formAddEndTime: addEndTime,

};

console.log(taskData);

database.ref().push(taskData);



});

database.ref().on("child_added", function (childSnapshot) {
    var toDoTask = childSnapshot.val().formToDoTask;
    var addSetDate = childSnapshot.val().formAddSetDate;
    var addComments = childSnapshot.val().formAddComments;
    var addStartTime = childSnapshot.val().formAddStartTIme;
    var addEndTime = childSnapshot.val().formAddEndTime;


    $("#tableContents").append("<tr><td>" + '<button class="btn-primary"><i class="fa fa-check" id= "delete" aria-hidden="true"></i></i></button>' + "</td><td>" + addSetDate + "</td><td>" + toDoTask + "</td><td>" +
    addStartTime + "</td><td>" + addEndTime + "</td><td>" + addComments + "</td></tr>");


})


//remove item
$("body").on("click", ".btn-primary", function() {
  $(this).closest("tr").remove();

    console.log("item removed")

});



