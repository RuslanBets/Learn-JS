window.onload = function () {
  let pictures = document.querySelectorAll('.slider .item'),
    next = document.querySelector('.slider .next'),
    prev = document.querySelector('.slider .prev'),
    total = pictures.length - 1
  pictures[0].classList += ' active'

  next.onclick = function () {
    console.log('Next btn was clicked ...')

    let target_picture = findActiveFromAllPictures(pictures)

    showNext(target_picture.current, target_picture.next)

  }

  prev.onclick = function () {
    console.log('Prev btn was clicked ...')

    let target_picture = findActiveFromAllPictures(pictures)

    showNext(target_picture.current, target_picture.next)

  }

  function showNext (current, next) {
    console.log('The previous one was hidden and shown next ...')
    current.classList.remove('active')
    next.classList += ' active'
  }

  function findActiveFromAllPictures (elements) {
    console.log('Was fined and returned current and next elements in object ...')
    let result = {
      current: null,
      next: null
    }

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('active')) {
        result.current = elements[i]
        result.next = (i < total) ? elements[i + 1] : elements[0]
      }
    }

    return result
  }
}