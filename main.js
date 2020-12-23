// DOM Elements
const time = document.getElementById("time"),
 	greeting = document.getElementById("greeting"),
 	name = document.getElementById("name"),
 	focus = document.getElementById("focus");

// Option
const showAmPm = true;

// Show Time
function showTime() {
	// Custon Time
//	let today = new Date(2020, 10, 1, 8, 20, 10);
	let today = new Date(),
 		hour = today.getHours(),
 		min = today.getMinutes(),
 		sec = today.getSeconds();

 	// Set AM or PM
 	const amPm = hour >= 12 ? "PM" : "AM";

 	// 12hr Format
 	hour = hour % 12 || 12;

 	// Output Time
 	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

 	setTimeout(showTime, 1000);
 }

// Add Zeros
function addZero(n) {
	return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeding
function setBgGreet() {
	//  Custom Time
//	let today = new Date(2020, 10, 1, 8, 20, 10);
	let today = new Date(),
		hour = today.getHours();
	if(hour < 11) {
		// Morning
		document.body.style.backgroundImage = "url('img/morning.jpg')";
		greeting.textContent = "Good Morning";
	} else if(hour < 16) {
		// Afternoon
		document.body.style.backgroundImage = "url('img/afternoon.jpg')";
		greeting.textContent = "Good Afternoon";
	} else if(hour < 19) {
		// Evening
		document.body.style.backgroundImage = "url('img/evening.jpg')";
		greeting.textContent = "Good Evening";
		document.body.style.color = "white";
	} else {
		// Night
		document.body.style.backgroundImage = "url('img/night.jpg')";
		greeting.textContent = "Good Night";
		document.body.style.color = "white";
	}
}

// Get Name
function getName() {
	if(localStorage.getItem("name") === null) {
		name.textContent = "[Enter Name]";
	} else {
		name.textContent = localStorage.getItem("name");
	}
}

// Set Name
function setName(e) {
	if(e.type === "keypress") {
		// Make sure enter is pressed
		if(e.which == 13 || e.keyCode == 13) {
			localStorage.setItem("name", e.target.innerText);
			name.blur(); // to not add new line after Enter is pressed
		}
	} else {
		localStorage.setItem("name", e.target.innerText);
	}
}

// Get Focus
function getFocus() {
	if(localStorage.getItem("focus") === null) {
		focus.textContent = "[Enter focus]";
	} else {
		focus.textContent = localStorage.getItem("focus");
	}
}

function setFocus(e) {
	if(e.type === "keypress") {
		// Make sure enter is pressed
		if(e.which == 13 || e.keyCode == 13) {
			localStorage.setItem("focus", e.target.innerText);
			focus.blur(); // to not add new line after Enter is pressed
		}
	} else {
		localStorage.setItem("focus", e.target.innerText);
	}
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

 // Run
 showTime();
 setBgGreet();
 getName();
 getFocus();