const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveway =  document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4')


const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day =date.getDate();

const futureDate = new Date(year,month,day+10,11,40,0);

const futureyear = futureDate.getFullYear();
const futuremonth = futureDate.getMonth();
const futuremonth1 = months[futuremonth];

const weekday = weekdays[futureDate.getDay()];
const futuredates =futureDate.getDate();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();

giveway.textContent = `giveaway ends on ${weekday}, ${futuredates} ${futuremonth1} ${futureyear}, ${hours}am`;


const futureTime = futureDate.getTime();

function getReamindingTime(){
    const today = new Date().getTime();
    // console.log(today);

    const t = futureTime - today;
    // console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds

    const oneDay = 24 * 60 * 60 * 1000;
    // console.log(oneDay);
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values

    let days = t / oneDay;
    // console.log(days);
    days = Math.floor(days);
    let hours =Math.floor((t % oneDay)/oneHour);
    // console.log(hours);
    let min =Math.floor((t % oneHour)/oneMinute);
    let sec = Math.floor((t%oneMinute)/1000);

    const value = [days,hours,min,sec] ;

    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }

    items.forEach(function(item,index){
        item.innerHTML= format(value[index]);
    });

    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
}

let countdown = setInterval(getReamindingTime,1000);
getReamindingTime();