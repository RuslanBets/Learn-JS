window.onload = function () {
    let prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slider = document.querySelector('.slider'),
        items = slider.querySelectorAll('.item img')

    next.addEventListener('click', function (){
        showNext(items)
    })
    prev.addEventListener('click', function (){
        showPrev(items)
    })

    showDefaultFirst()

    function showNext(slides) {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].className === 'active') {
                slides[i].classList.remove('active')
                if (i === slides.length - 1){
                    i = 0
                    slides[i].classList += 'active'
                }else{
                    slides[i + 1].classList += 'active'
                }
                break
            }
        }
    }

    function showPrev(slides) {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].className === 'active') {
                slides[i].classList.remove('active')
                if (i === 0){
                    i = slides.length - 1
                    slides[i].classList += 'active'
                }else{
                    slides[i - 1].classList += 'active'
                }
                break
            }
        }
    }

    function showDefaultFirst() {
        slider.querySelector('div > img').classList += 'active'
    }
}