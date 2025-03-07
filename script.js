let audios = [];
let images = [];
let btns = [];
let bars = [];
let cTime = [];

for (let i = 1; i < 5; i++) {
  audios.push(document.getElementById("audio" + i));
  images.push(document.getElementById("image" + i));
  btns.push(document.getElementById("p" + i));
  bars.push(document.getElementById("b" + i));
  cTime.push(document.getElementById("c" + i))
}

for (let btn of btns){
  let n = btns.indexOf(btn);
  btn.addEventListener("click", () => {
    if (audios[n].paused){
      audios[n].play();
      images[n].classList.add("spinning");
      btn.innerHTML = "⏸";
    } else {
      btn.innerHTML = "▶";
      audios[n].pause();
      images[k].classList.remove("spinning");
    }
  });
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

for (let bar of bars){
  let k = bars.indexOf(bar);
  audios[k].addEventListener("timeupdate", () => {
    bar.value = (audios[k].currentTime / audios[k].duration) * 100;
    cTime[k].innerHTML = formatTime(audios[k].currentTime);
  });
  bar.addEventListener("input", () => {
    audios[k].currentTime = (bar.value / 100) * audios[k].duration;
    // audios[k].play(); // does not rotate image or change button
  });
}
