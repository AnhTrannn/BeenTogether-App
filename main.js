// const timeEl = document.getElementById('time');
// setInterval(() => {
//     const now = new Date();
//     timeEl.innerHTML = `Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
// }, 1000);

// document.addEventListener('DOMContentLoaded', function() {
//     let days = document.querySelector('.days span');
// 	let hour = document.querySelector('.hours');
// 	let min = document.querySelector('.minutes');
// 	let second = document.querySelector('.seconds');
// 	let startDate = new Date(2020, 01, 25);
// 	days.innerText = Math.floor((new Date - startDate) / 86400000);
// 	countTime();

// 	function countTime() {
// 		let today = new Date();
// 		let ms = (today - startDate) % 86400000;
// 		hour.innerText = Math.floor(ms / 3600000);
// 		min.innerText = Math.floor(ms % 3600000 / 60000);
// 		second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
// 	}
// 	setInterval(countTime, 1000);
// }, false);

let days = document.querySelector('.days span');
let hour = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let second = document.querySelector('.seconds');
let startDate = new Date(2020, 1, 25);
days.innerText = Math.floor((new Date - startDate) / 86400000);

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    let today = new Date();
	let ms = (today - startDate) % 86400000;
	hour.innerText = Math.floor(ms / 3600000);
	min.innerText = Math.floor(ms % 3600000 / 60000);
	second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
}