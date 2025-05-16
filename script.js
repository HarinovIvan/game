const volumeToggle = document.getElementById('volume-toggle');
const volumeSlider = document.getElementById('volume-slider');
let isMuted = false;
let previousVolume = 50;

updateIcon();

volumeToggle.addEventListener('click', () => {
  if (isMuted) {
    volumeSlider.value = previousVolume;
    isMuted = false;
  } else {
    previousVolume = volumeSlider.value;
    volumeSlider.value = 0;
    isMuted = true;
  }
  updateIcon();
  console.log(`Volume: ${volumeSlider.value}%`);
});


volumeSlider.addEventListener('input', () => {
  if (volumeSlider.value == 0) {
    isMuted = true;
  } else {
    isMuted = false;
    previousVolume = volumeSlider.value;
  }
  updateIcon();
  console.log(`Volume: ${volumeSlider.value}%`);
});


function updateIcon() {
  const volume = parseInt(volumeSlider.value);
  if (isMuted || volume === 0) {
    volumeToggle.textContent = '🔇';
  } else if (volume < 30) {
    volumeToggle.textContent = '🔈';
  } else if (volume < 70) {
    volumeToggle.textContent = '🔉';
  } else {
    volumeToggle.textContent = '🔊';
  }
}

const fern = document.getElementById('exit');
const elem = document.getElementById('aaa');
fern.addEventListener('click', ()=>{
  elem.classList.remove("hidden");
})

const btn = document.querySelector('.no');
btn.addEventListener('click', ()=> {
    elem.classList.add("hidden");
})

const links = document.querySelectorAll('a.btn-home');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location = this.href;
        }, 500); // Длительность должна совпадать с transition
      });
    });