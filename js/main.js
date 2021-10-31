document.addEventListener('DOMContentLoaded', documentReady, false)

function documentReady() {
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  })
  scroller.on('scroll', (args) => {
    changeBodyBg(args.scroll.y)
  })
}

function changeBodyBg(scroll) {
  if(scroll > 30)
    document.body.classList.remove('dark-theme')
  else
   document.body.classList.add('dark-theme')
}
