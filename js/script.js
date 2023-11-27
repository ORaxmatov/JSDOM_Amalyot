'use strict'

const adv = document.querySelectorAll('.promo__adv img')
const     wrapper = document.querySelector('.promo__bg')
const    genre = document.querySelector('.promo__genre')
const    serialLists = document.querySelector('.promo__interactive-list')


   const seriasDb = {
    serias:[
      'Omar',
      'THE FINAL LEGACY',
      'ERTUGRUL',
      'MAGNIFICENT CENTURY',
      'GREAT SELJUKS: GUARDIANS...',
    ]

   }

adv.forEach(item =>{
  item.remove()
})
genre.textContent  = "Comedy"

wrapper.style.backgroundImage = 'url("img/1.jpg")'

serialLists.innerHTML = ''

seriasDb.serias.forEach((item, index)=>{
  serialLists.innerHTML += `<li class="promo__interactive-item">${index+1} ${item}
<div class="delete"></div>
    </li>
    ` 
})