import './style.css'


function toggleHidden(elem){
  elem.classList.toggle('hidden')
}

document.addEventListener('click', (e)=>{
  if(e.target.dataset.bars){
    toggleHidden(document.getElementById(e.target.dataset.bars))
  }
})