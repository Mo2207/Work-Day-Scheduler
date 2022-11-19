
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Event listener for every save button
  $(".saveBtn").on("click", function() {
    let element = $(this);

    // Grab userInput object from localStorage, if it doesn't exist create the object
    let userInput = JSON.parse(localStorage.getItem("userInput")||"{}");

    // Assign the key (button that was pressed), and the value (selected textarea) to userInput
    userInput[element.parent().attr("id")] = $(element.siblings(".description")).val();

    // Save the newly created key/value to localStorage
    localStorage.setItem("userInput", JSON.stringify(userInput));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Iterate through all the input blocks keys/values
  for (const [key, value] of Object.entries(JSON.parse(localStorage.getItem("userInput")))) {
    // console.log(`${key}: ${value}`);

    // Set the text of the current iteration's key, to equal the current iteration's value
    $(`#${key}`).children(".description").text(value);
  }

  // TODO: Add code to display the current date in the header of the page.

  //
  let headerTimeDisplay = $("#currentDay").html(dayjs().format("dddd, MMMM M"));

});