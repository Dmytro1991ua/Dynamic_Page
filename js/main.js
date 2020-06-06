//select elements to work with
const time = document.querySelector(".time"),
   greeting = document.querySelector(".title__greeting"),
   name = document.querySelector(".title__name"),
   focus = document.querySelector(".focus"),
   showAmPm = true; //options for AM or PM


//function to dynamically show a time
const showTime = () => {
   let today = new Date(),
      hours = today.getHours(),
      minutes = today.getMinutes(),
      seconds = today.getSeconds();

   //figure out either ot's AM or PM
   const amPm = hours >= 12 ? "PM" : "AM";

   //getting a 12 hour format
   hours = hours % 12 || 12;

   //display time dynamically
   time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ""}`;
   setTimeout(showTime, 1000);

};

// function to add 0 before elements which need it
const addZero = (num) => {
   return (parseInt(num, 10) < 10 ? "0" : "") + num;
};

//function to set background and greeting depending on time
const displayImgGreeting = () => {
   const today = new Date(),
      hours = today.getHours();
   if (hours < 12) {
      document.body.style.backgroundImage = "url('img/morning.jpg')"
      greeting.textContent = "Good Morning,";
   } else if (hours < 18) {
      document.body.style.backgroundImage = "url('img/afternoon.jpg')"
      greeting.textContent = "Good Afternoon,";
   } else {
      document.body.style.backgroundImage = "url('img/evening.jpg')"
      greeting.textContent = "Good Evening,";
      document.body.style.color = "white";
   }
};

//getName  function which check what is in a local storage
const getName = () => {
   if (localStorage.getItem("name") === null) {
      name.textContent = "[Enter Name]";
   } else {
      name.textContent = localStorage.getItem("name");
   }
};

//setName function makes sure that enter doesn't pressed (to avoid updating localStorage on every keydown) and tells whether it's keydown or vlur
const setName = (event) => {
   if (event.type === "keydown" || event.keyCode === 13) {
      if (event.which === 13 || event.keyCode === 13) {
         localStorage.setItem("name", event.target.textContent);
         name.blur();
      }
   } else {
      localStorage.setItem("name", event.target.textContent);
   }
};

//getFocus function which check what is in a local storage
const getFocus = () => {
   if (localStorage.getItem("focus") === null) {
      focus.textContent = "[Enter Name]";
   } else {
      focus.textContent = localStorage.getItem("focus");
   }
};

//setFocus function makes sure that enter doesn't pressed (to avoid updating localStorage on every keydown) and tells whether it's keydown or vlur
const setFocus = (event) => {
   if (event.type === "keydown" || event.keyCode === 13) {
      if (event.which === 13 || event.keyCode === 13) {
         localStorage.setItem("focus", event.target.textContent);
         focus.blur();
      }
   } else {
      localStorage.setItem("focus", event.target.textContent);
   }
};

//event listeners
name.addEventListener("keydown", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keydown", setFocus);
focus.addEventListener("blur", setFocus);

//call functions
showTime();
displayImgGreeting();
getName();
getFocus();
