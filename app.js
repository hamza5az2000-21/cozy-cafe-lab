/// part 1 
const mainTitleEl = document.querySelector('#main-title')
    console.log(mainTitleEl.textContent)
    mainTitleEl.textContent = 'Welcome to the Cozy Cafe'


///// part 2 
const highlightTitleEls = document.querySelectorAll('.highlight-title')
console.log(highlightTitleEls)
      highlightTitleEls.forEach((highlightEl) => {
        console.log(highlightEl.textContent)
        highlightEl.style.fontstyle = 'italic'
      })

const quoteEl = document.querySelector('#quote-of-the-day')
quoteEl.textContent = 'A little coffee, a little conversation'
quoteEl.classList.add('featured')
console.log(quoteEl)    

/// part 3

const maianPhotoEl = document.querySelector('#main-photo')
//   console.log(maianPhotoEl,getAttribute('src'))
  mainTitleEl.setAttribute('arc', './assets/berry-cake.jpg')
  maianPhotoEl.attributes('alt', 'A berry cake served at the cafe')
  console.log(maianPhotoEl)


  /// part 4

  const bgColorBtnEl = document.querySelector('#bg-color-btn')
  const bodyEl = document.querySelector('body')

  
  console.log(bodyEl)
  bodyEl.style.backgroundColor = 'lightsteelBlue'

