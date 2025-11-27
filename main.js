let years = document.querySelector('.years');
let months = document.querySelector('.months');
let days = document.querySelector('.days span');
let hours = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

let startDate = new Date(2021, 2, 12); // 12/03/2021

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    let now = new Date();

    // Clone ngày bắt đầu để tăng dần
    let temp = new Date(startDate);

    let y = 0, m = 0;

    // Tính số Năm
    while (new Date(temp.getFullYear() + 1, temp.getMonth(), temp.getDate()) <= now) {
        temp.setFullYear(temp.getFullYear() + 1);
        y++;
    }

    // Tính số Tháng
    while (new Date(temp.getFullYear(), temp.getMonth() + 1, temp.getDate()) <= now) {
        temp.setMonth(temp.getMonth() + 1);
        m++;
    }

    // Tính phần còn lại (ms)
    let diff = now - temp;

    let d = Math.floor(diff / (24 * 60 * 60 * 1000));
    diff %= (24 * 60 * 60 * 1000);

    let h = Math.floor(diff / (60 * 60 * 1000));
    diff %= (60 * 60 * 1000);

    let mins = Math.floor(diff / (60 * 1000));
    diff %= (60 * 1000);

    let s = Math.floor(diff / 1000);

    // Đẩy ra giao diện
    years.innerText = y;
    months.innerText = m;
    days.innerText = d;
    hours.innerText = h;
    min.innerText = mins;
    second.innerText = s;
}
