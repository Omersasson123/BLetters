var slider = document.getElementById('myRange');
var output = document.getElementById('days');

slider.oninput = function() {
    if (this.value == 1) {
        output.innerHTML = 'Every Day';
    } else {
        output.innerHTML = 'Every '.concat(this.value, ' Days');
    }
}


function clickMonth() {
    slider.value = 30;
    output.innerHTML = 'Every 30 Days'
}

function clickWeek() {
    slider.value = 7;
    output.innerHTML = 'Every 7 Days'
}

function clickDay() {
    slider.value = 1;
    output.innerHTML = 'Every Day'
}

var monthly = document.getElementById('month');
monthly.addEventListener("click", clickMonth);
var weekly = document.getElementById('week');
weekly.addEventListener("click", clickWeek);
var daily = document.getElementById('day');
daily.addEventListener("click", clickDay);