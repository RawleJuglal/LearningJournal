import './style.css'

const lessEl = document.getElementById('article-listings-less')
const moreEl = document.getElementById('article-listings-more');

function toggleHidden(elem){
  console.log(elem)
  elem.classList.toggle('hidden')
}

function toggleBlogs(){
  toggleHidden(document.getElementById('blog-four'))
  toggleHidden(document.getElementById('blog-five'))
  toggleHidden(document.getElementById('blog-six'))
}

document.addEventListener('click', (e)=>{
  if(e.target.dataset.bars){
    toggleHidden(document.getElementById(e.target.dataset.bars))
  } else if(e.target.dataset.hero){
    window.location.href = '/post.html'
  } else if(e.target.dataset.more){
    toggleBlogs()
    
    lessEl.classList.add('block')
    lessEl.classList.remove('hidden')
    moreEl.classList.remove('block')
    toggleHidden(moreEl)
  } else if (e.target.dataset.less){
    toggleBlogs()

    moreEl.classList.add('block')
    moreEl.classList.remove('hidden')
    lessEl.classList.remove('block')
    toggleHidden(lessEl)
  }
})