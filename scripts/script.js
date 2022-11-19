
let currentHour = parseInt(dayjs().format("k"));
// console.log(`current hour is: ${currentHour}`);

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour
// Loops through all the timeblocks and colors them according to their time
for (var i = 0; i < $(".time-block").length; i++) {

  // Targets the current timeblock id
  let currentTimeBlock = $(".time-block")[i];
  // console.log(parseInt($(currentTimeBlock).attr("id").slice(5)));

  // Slices the current timeblocks id name to just get the number, and converts it to actual number with parseInt to measure it against currentHour
  if (parseInt($(currentTimeBlock).attr("id").slice(5)) < currentHour) 
  {
    // console.log("past");
    $(currentTimeBlock).children(".description").addClass("past");
  } 
  else if (parseInt($(currentTimeBlock).attr("id").slice(5)) > currentHour) 
  {
    // console.log("future");
    $(currentTimeBlock).children(".description").addClass("future");
  } 
  else 
  {
    // console.log("present");
    $(currentTimeBlock).children(".description").addClass("present");
  }
}

// TODO: Add code to display the current date in the header of the page.
// set currentHour to equal current time as a number from 24hr clock
// Display current date/time at top of page with dayjs
let headerTimeDisplay = $("#currentDay").html(dayjs().format("dddd, MMMM M"));

// After html loads function executes
$(function () {
  // TODO: Add a listener for click events on the save button.
  // Event listener for every save button
  $(".saveBtn").on("click", function() {
    let element = $(this);

    // Grab userInput object from localStorage, if it doesn't exist create the object
    let userInput = JSON.parse(localStorage.getItem("userInput")||"{}");

    // Add/update the key/value to userInput
    userInput[element.parent().attr("id")] = $(element.siblings(".description")).val();

    // Update userInput to localStorage
    localStorage.setItem("userInput", JSON.stringify(userInput));
  });
 
  // Iterate through all the input blocks keys/values
  for (const [key, value] of Object.entries(JSON.parse(localStorage.getItem("userInput")))) {
    // Set the text of the current iteration's key to value
    $(`#${key}`).children(".description").text(value);

    // console.log(parseInt($(`#${key}`).children(".py-3").text().slice(0,-2)));
  }
});