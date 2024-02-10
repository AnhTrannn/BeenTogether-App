let days = document.querySelector('.days span');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let startDate = new Date(2020,1,25);

updateTime();
setInterval(updateTime,1000);

function updateTime() {
	let today = new Date();
	let timeDiff = today - startDate;

	// Calculate days, hours, minutes, and seconds
	let daysCount = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hoursCount = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesCount = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsCount = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML elements
    days.innerText = daysCount;
    hours.innerText = hoursCount;
    minutes.innerText = minutesCount;
    seconds.innerText = secondsCount;
}