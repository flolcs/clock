// LOADER
function timeloader() {
  const loader = document.querySelector(".preloader");
  loader.style.display = "none";
}
setTimeout(timeloader, 1500);

// TIME
setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_dot = document.getElementById("hr_dot");
  let min_dot = document.getElementById("min_dot");
  let sec_dot = document.getElementById("sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // add zero before single number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";

  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 15}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});

// CHRONO
let tps_chrono = document.getElementById("tps_chrono");
let resetbtn = document.getElementById("reset");
let stopbtn = document.getElementById("stop");
let startbtn = document.getElementById("start");

let heures_chrono = 0;
let minutes_chrono = 0;
let secondes_chrono = 0;

let timeOut;

let estArrete = true;

const demarre = () => {
  if (estArrete) {
    estArrete = false;
    chrono_defile();
  }
};

const arrete = () => {
  if (!estArrete) {
    estArrete = true;
    clearTimeout(timeOut);
  }
};

const chrono_defile = () => {
  if (estArrete) return;

  secondes_chrono = parseInt(secondes_chrono);
  minutes_chrono = parseInt(minutes_chrono);
  heures_chrono = parseInt(heures_chrono);

  secondes_chrono++;

  if (secondes_chrono == 60) {
    minutes_chrono++;
    secondes_chrono = 0;
  }
  if (minutes_chrono == 60) {
    heures_chrono++;
    minutes_chrono = 0;
  }

  if (secondes_chrono < 10) {
    secondes_chrono = "0" + secondes_chrono;
  }
  if (minutes_chrono < 10) {
    minutes_chrono = "0" + minutes_chrono;
  }
  if (heures_chrono < 10) {
    heures_chrono = "0" + heures_chrono;
  }

  tps_chrono.textContent = `${heures_chrono}:${minutes_chrono}:${secondes_chrono}`;

  timeOut = setTimeout(chrono_defile, 1000);
};

const reset_chrono = () => {
  tps_chrono.textContent = "00:00:00";
  estArrete = true;
  heures_chrono = 0;
  minutes_chrono = 0;
  secondes_chrono = 0;
  clearTimeout(timeOut);
};

startbtn.addEventListener("click", demarre);
stopbtn.addEventListener("click", arrete);
resetbtn.addEventListener("click", reset_chrono);

// MINUTEUR
const text_minuteur = document.querySelector(".text_minuteur");

function getMinuteur() {
  const now = new Date().getTime();
  const countdownDate = new Date("January 1, 2025").getTime();

  const distanceBase = countdownDate - now;

  const days_minuteur = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
  const hours_minuteur = Math.floor(
    (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes_minuteur = Math.floor(
    (distanceBase % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds_minuteur = Math.floor((distanceBase % (1000 * 60)) / 1000);

  text_minuteur.innerText = `${days_minuteur}j ${hours_minuteur}h ${minutes_minuteur}m ${seconds_minuteur}s`;
}
const countdownInterval = setInterval(() => {
  getMinuteur();
}, 1000);
