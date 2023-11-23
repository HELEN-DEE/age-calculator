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

function leapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
// .

inputBtn.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('trw')
    if (
        !isNumeric(inputDay.value) ||
        !isNumeric(inputMonth.value) ||
        !isNumeric(inputYear.value)
    ) {
        if (!isNumeric(inputDay.value)){
            displayErrorMessage(inputDay, 'This field is required');
        }
        if (!isNumeric(inputMonth.value)){
            displayErrorMessage(inputMonth, 'This field is required');
        }
        if (!isNumeric(inputYear.value)){
            displayErrorMessage(inputYear, 'This field is required');
        }
        return;
    }

    const day = parseInt(inputDay.value, 10);
    const month = parseInt(inputMonth.value, 10);
    const year = parseInt(inputYear.value, 10);

    if (!isValidDay(day,month,year) || !isValidMonth(month) || isValidYear(year)) {
        return;
    } 


    let userInput = new Date(year, month - 1, day);
    let diff = currentDate.getTime() - userInput.getTime()
    let diffDay = Math.floor(diff / msInDay)
    let diffMonth = Math.floor(diffDay / daysInMonth)
    let diffYear = Math.floor(diffMonth / monthsInYear)

    

    if (leapYear(userInput.getFullYear())){
        diffDay--;
        diffMonth--;
    }
    diffDay = Math.abs(diffDay)
    diffMonth = Math.abs(diffMonth)
    diffYear = Math.abs(diffYear)

    yearResult.innerHTML = diffYear
    monthResult.innerHTML = diffMonth
    dayResult.innerHTML = diffDay

})

function displayErrorMessage(inputField,message) {
    let errorMessage = document.createElement('span')
    errorMessage.className = 'error-message'
    errorMessage.innerHTML = message
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling)
}

function isValidDay (day, month, year) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > lastDayOfMonth) {
        displayErrorMessage (
            inputDay,
            `Must be a between 1 and ${lastDayOfMonth}`
        );
        return false;
    } 
    return true;
}

function isValidMonth (month) {
    if (month < 1 || month > 12) {
        displayErrorMessage (inputMonth, 'Must be a valid month');
        return false;
    }
    return true;
}


function isValidYear (year) {
    if (year > currentDate.getFullYear()) {
        displayErrorMessage (inputYear, 'Must be a year in the past');
        return false;
    }
    return true;
}

function isNumeric (value) {
    return /^-?\d+$/.test(value)
}