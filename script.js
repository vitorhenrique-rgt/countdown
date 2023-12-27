const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");


const getDate = prompt(
  "Digite a data do contador no formato 'aaaa-mm-dd hh:mm:ss'"
);
const countDate = new Date(getDate)
if (isNaN(countDate.getTime())) { 
}
else {
  setInterval(() => {
    let dateNow = new Date();
    let count = new Date(countDate) - dateNow;
  
    let countDays = Math.trunc(count / 1000 / 60 / 60 / 24);
    let countHours = Math.trunc((count / 1000 / 60 / 60) % 24);
    let countMinutes = Math.trunc((((count / 1000 / 60 / 60) % 24) * 60) % 60);
    let countSeconds = Math.trunc(
      (((((count / 1000 / 60 / 60) % 24) * 60) % 60) * 60) % 60
    );
  
    if (countDays < 10) countDays = "0" + Math.trunc(countDays);
    if (countHours < 10) countHours = "0" + Math.trunc(countHours);
    if (countMinutes < 10) countMinutes = "0" + Math.trunc(countMinutes);
    if (countSeconds < 10) countSeconds = "0" + Math.trunc(countSeconds);
  
    day.textContent = countDays;
    hour.textContent = countHours;
    minute.textContent = countMinutes;
    second.textContent = countSeconds;
  }, 1000);
}


