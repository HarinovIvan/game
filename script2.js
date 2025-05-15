const fern = document.getElementById('exit');
const elem = document.getElementById('aaa');
fern.addEventListener('click', ()=>{
  elem.classList.remove("hidden");
})

const btn = document.querySelector('.no');
btn.addEventListener('click', ()=> {
    elem.classList.add("hidden");
})