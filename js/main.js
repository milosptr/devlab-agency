document.addEventListener('DOMContentLoaded', documentReady, false)

function documentReady() {
  if(window.innerWidth > 450) {
    const scroller = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
  }
  document.addEventListener('scroll', (e) => {
    changeBodyBg(window.scrollY)
  })
}

function changeBodyBg(scroll) {
  if(scroll > 30) {
    document.body.classList.remove('dark-theme')
  }
  else {
   document.body.classList.add('dark-theme')
  }
}
