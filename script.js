const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");


function startCounter(){

  const countDate = new Date(document.querySelector("#initial-date").value)
  const date = new Date()

  if (isNaN(countDate.getTime()) ||(countDate - date) <=0  ) { 
    const textAlert = document.querySelector("#add-date-text")
    textAlert.style.color = "red"
    textAlert.innerHTML = "Insira uma data válida ou maior que a data atual!"
  }
  else {
    const containerAddDate = document.querySelector("#add-date")
    containerAddDate.style.visibility = "hidden"
    const counter = setInterval(() => {
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

      if (count < 0) clearInterval(counter);

    }, 1000);
  }
}