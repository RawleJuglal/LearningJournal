import './style.css'

const barsEl = document.getElementById('collapsed-nav');
const blogFour = document.getElementById('blog-four');
const blogFive = document.getElementById('blog-five');
const blogSix = document.getElementById('blog-six');
const moreEl = document.getElementById('article-listings-more');
const lessEl = document.getElementById('article-listings-less')
let windowWidth = window.innerWidth
let desktopSize = windowWidth >= 1085 ? true : false
let isCollapsed = true;

function setWindowSize(){
  windowWidth = window.innerWidth;
}

function setElemToBlock(elem){
  elem.style.display = 'block';
}

function setElemToNone(elem){
  elem.style.display = 'none';
}

function setElemToGrid(elem){
  elem.style.display = "grid"
}

function checkForScreenFlip(){
  if(windowWidth < 1085 && desktopSize){
    setMobileVariables()
    desktopSize = false;
  } else if(windowWidth > 1084 && !desktopSize){
    setDesktopVariables()
    desktopSize = true;
  } else {
    //breakpoint has not changed
  }
}

function setMobileVariables(){
  if(blogFour){
    displayLessBlogs()
    setElemToNone(lessEl);
    setElemToBlock(moreEl);
  }
}

function setDesktopVariables(){
  setElemToNone(document.getElementById('collapsed-nav'))
  if(blogFour){
    setElemToGrid(blogFour);
    setElemToGrid(blogFive);
    setElemToGrid(blogSix);
    setElemToNone(lessEl);
    setElemToNone(moreEl);
  } 
}

function displayMoreBlogs(){
  setElemToBlock(blogFour)
  setElemToBlock(blogFive)
  setElemToBlock(blogSix)
}

function displayLessBlogs(){
  setElemToNone(blogFour);
  setElemToNone(blogFive);
  setElemToNone(blogSix);
}

document.addEventListener('click', (e)=>{
  if(e.target.dataset.bars){
   if(isCollapsed){
    setElemToBlock(barsEl)
    isCollapsed = !isCollapsed;
   } else {
    setElemToNone(barsEl)
    isCollapsed = !isCollapsed;
   }
  } else if (e.target.dataset.hero){
    window.location.href = '/LearningJournal/post.html'
  } else if (e.target.dataset.more){
    displayMoreBlogs()
    setElemToNone(moreEl);
    setElemToBlock(lessEl);
  } else if (e.target.dataset.less){
    displayLessBlogs();
    setElemToNone(lessEl);
    setElemToBlock(moreEl);
  }
})

window.addEventListener("resize", (e)=>{
  setWindowSize()
  checkForScreenFlip()
});