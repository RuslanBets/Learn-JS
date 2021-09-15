import types from './types'

types.getTypes()

/*-------------------------------------------------------------------------*/
//Menu

// console.log(document.getElementById('nav-menu'))
// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByName('test'))

// console.log(document.getElementsByClassName('burger')[0].getElementsByClassName('line'))

// console.log(document.querySelector('.burger'))
// console.log(document.querySelectorAll('.burger .line'))

let burger = document.querySelector('.burger'),
  menu = document.querySelector('.menu'),
  menu_toggle = false

burger.onclick = function () {
  menu_toggle = !menu_toggle

  if (menu_toggle === true) {
    menu.style.display = 'flex'
  } else {
    menu.style.display = ''
  }
}

window.onload = function () {
  let answer = confirm('Are you adult ?')

  if (answer === true) {
    console.log('Yes !')
  } else {
    console.log('No !')
  }
}