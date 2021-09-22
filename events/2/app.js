window.onload = function () {
    // let name = document.querySelector('mark'),
    //     btn = document.querySelector('button')

    // btn.onclick = function () {
    //     console.log(btn.innerText)
    // }
    // btn.onclick = function () {
    //     console.log(name.innerText)
    // }

    // btn.addEventListener('click', function (){
    //     console.log(btn.innerText)
    // })
    // btn.addEventListener('click', function (){
    //     console.log(name.innerText)
    // })

    /********************************************************************************************/
    // let name = document.querySelector('p'),
    //         btn = document.querySelector('button')
    //
    // setTimeout(function (){
    //     name.classList += 'bg'
    // }, 2000)
    //
    // name.addEventListener('transitionend', function (){
    //     this.style.position = 'relative'
    //     this.style.left = 100+'px'
    // })
   /***********************************************************************************************/

    let text = document.querySelector('.text'),
        textarea = document.querySelector('textarea')

   textarea.addEventListener('paste', pasteFunction)

    function pasteFunction(e){
        console.log(e)
        this.value = e.detail.text
    }

    const paste = new CustomEvent('paste', {
        detail:{
            text:text.innerHTML
        }
    });

    text.onclick = function (){
        // textarea.dispatchEvent(new CustomEvent('paste', {
        //     detail:{
        //         text:this.innerText
        //     }
        // }))
        textarea.dispatchEvent(paste)
    }
}