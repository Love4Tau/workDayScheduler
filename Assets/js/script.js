// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
                                         
  //Added evvent listener to save button to save 
  //id and text area value to local storage
  function userInput() {

    document.querySelectorAll(".saveBtn").forEach(button =>{
        button.addEventListener("click", function(){
          const hourId = this.parentElement.getAttribute("id");
          const userText = this.parentElement.querySelector(".description").value;
          localStorage.setItem(hourId, userText);
        })
    })
}
userInput();

  // define current hour
  const currentHour = dayjs().hour();
  
  //created function to compare hour in schedule to current hour
  //color updates/changes depending on it's relation to the current time
  function updateColor(){
    document.querySelectorAll(".time-block").forEach((element) => {
      const scheduleHour = element.id;
      const newScheduleHour = scheduleHour.substring(5);

      if(newScheduleHour < currentHour) {
        element.classList.remove("present", "future")
        element.classList.add("past")
      } else if(newScheduleHour === currentHour) {
        element.classList.remove("past", "future")
        element.classList.add("present")
      } else {
        element.classList.remove("past", "present")
        element.classList.add("future")
      }
    })
  }
updateColor();

  //Pulling text area value from local storage and pushing to html
  document.querySelectorAll(".time-block").forEach((element) => {
    const key = element.id;
    const textBoxVal = localStorage.getItem(key);
    element.querySelector(".description").value = textBoxVal;
  })


  // Pulling current date using dayJs and appending to id in html
  var today = dayjs()

  var currentDate = today.format("dddd, MMMM DD");

  jQuery("#currentDay").html(currentDate);
});
