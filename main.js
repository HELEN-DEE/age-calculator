let inputDay = document.getElementById('inputDay');
let inputMonth = document.getElementById('inputMonth');
let inputYear = document.getElementById('inputYear');

const inputBtn = document.getElementById('input-btn')
let currentDate = new Date();
const msInDay = 24*60*60*1000
const daysInMonth = 30
const monthsInYear = 12

let yearResult = document.getElementById('year-result')
let monthResult = document.getElementById('month-result')
let dayResult = document.getElementById('day-result')


inputBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const day = parseInt(inputDay.value, 10);
    const month = parseInt(inputMonth.value, 10);
    const year = parseInt(inputYear.value, 10);


    let userInput = new Date(year, month - 1, day);
    let diff = currentDate.getTime() - userInput.getTime()
    let diffDay = Math.floor(diff / msInDay)
    let diffMonth = Math.floor(diffDay / daysInMonth)
    let diffYear = Math.floor(diffMonth / monthsInYear)

    yearResult.innerHTML = diffYear
    monthResult.innerHTML = diffMonth
    dayResult.innerHTML = diffDay
console.log(diffDay, diffMonth, diffYear);
console.log(currentDate, userInput)

})
