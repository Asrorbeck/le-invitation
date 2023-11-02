const targetDate = new Date("2023-12-31T00:00:00").getTime();

    const countdown = setInterval(function () {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(countdown);
        console.log("Bugun to'y");
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
      }
    }, 1000);

    function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target); 
      console.log("Form Data:", Object.fromEntries(formData)); 
      event.target.reset();
      alert("Sizning xabaringiz muvvaffaqiyatli yetkazildi!")
    }

// ////////////////////////////////////////////////////

document.getElementById("openMaps").addEventListener("click", function () {
  // Replace this with the address you want to open in the mapping app
  const address = "Asia Palace";

  // Check if the user is on a mobile device
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    // If on a mobile device, open the default mapping app
    window.location.href = `geo:0,0?q=${encodeURIComponent(address)}`;
  } else {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(address)}`);
  }
});

// ////////////////////////////////////////////////////////

const musicControl = document.getElementById("navbar__btn");
const audio = document.getElementById("background-music");
const musicIcon = document.getElementById("music-icon");

let isPlaying = true;

musicControl.addEventListener("click", function () {
  if (isPlaying) {
    audio.play();
    // musicControl.textContent = "Turn On Music";
    musicIcon.src = "./img/unmute.svg"; // Update to the mute icon
  } else {
    audio.pause();
    // musicControl.textContent = "Turn Off Music";
    musicIcon.src = "./img/mute.svg"; // Update to the unmute icon
  }

  isPlaying = !isPlaying;
});


