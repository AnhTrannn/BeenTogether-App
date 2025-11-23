let days = document.querySelector('.days span');
let hours = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

let startDate = new Date(2021, 2, 12);

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    let currentDay = new Date();
    let timeDifference = currentDay - startDate;

    // Calculate total seconds
    let totalSeconds = Math.floor(timeDifference / 1000);

    // Calculate days, hours, minutes, and seconds
    let daysCount = Math.floor(totalSeconds / (24 * 60 * 60));
    let hoursCount = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    let minutesCount = Math.floor((totalSeconds % 3600) / 60);
    let secondsCount = totalSeconds % 60;

    // Update the HTML elements
    days.innerText = daysCount;
    hours.innerText = hoursCount;
    min.innerText = minutesCount;
    second.innerText = secondsCount;
}
