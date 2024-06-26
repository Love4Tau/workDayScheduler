// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  function userInput() {

      document.querySelectorAll(".saveBtn").forEach(button =>{
          button.addEventListener("click", function(){
            const hourId = this.parentElement.getAttribute("id");
            const userText = this.parentElement.querySelector(".description").value;
            localStorage.setItem(hourId, userText);
          })
      })
  }
                                         

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    var today = dayjs()

    var currentDate = today.format("dddd, MMMM DD");

    jQuery("#currentDay").html(currentDate);


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // define current hour
  const currentHour = dayjs().hour();


  // const hourId = document.querySelectorAll(".time-block");

  // console.log(hourId.id);

  // hourId.forEach((hourId) => {
  //   const scheduleHour = parseInt(hourId.id);
  //   console.log(scheduleHour);

  //   if(scheduleHour < currentHour) {
  //     hourId.classList.add("past");
  //   } else if(scheduleHour === currentHour) {
  //     hourId.classList.add("present");
  //     } else {
  //     hourId.classList.add("future");
  //     }
  // })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
