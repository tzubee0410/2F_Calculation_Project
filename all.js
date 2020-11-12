

//得到指針
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

//得到數字時間區塊
const h1 = document.querySelector('h1');

//目前時間狀態 AM or PM 判斷
let status = 'AM';

//拆解時間並給指針轉動
function showSeconds(){
    //得到時間
    const mainTime = new Date();
    let hours = mainTime.getHours() * 30 + mainTime.getMinutes() * (30 / 60);
    let seconds = mainTime.getSeconds()* 6;
    let minute =mainTime.getMinutes() * 6 + mainTime.getSeconds() * (6 / 60);
    console.log(hours,seconds,minute);

    hourHand.style.transform = `rotate(${hours}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    secondHand.style.transform = `rotate(${seconds}deg)`;




}


showSeconds()
setInterval(showSeconds,1000);