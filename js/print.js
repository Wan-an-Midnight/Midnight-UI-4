let isPinned = false
const h2 = document.querySelector('#no-move-h2')

const observer = new IntersectionObserver(([e]) => {
  isPinned = (e.intersectionRatio < 1)
  e.target.classList.toggle('pinned', isPinned)
}, { threshold: [1] })

observer.observe(h2)

document.addEventListener('scroll', (e) => {
  if (isPinned) {
    let html = document.documentElement
    let height = parseInt(getComputedStyle(h2).getPropertyValue('height')) + parseInt(getComputedStyle(h2).getPropertyValue('margin-bottom'))
    let marginTop = parseInt(getComputedStyle(h2).getPropertyValue('margin-top'))
    let scrolled = (html.scrollTop - marginTop) / height
    
    h2.style.setProperty('--scale', (1 - scrolled))
  }
})