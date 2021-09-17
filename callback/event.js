window.onload = function () {
    const user = {}
    let userText = document.querySelector('#user-text')
    let form = document.querySelector('form')

    form.onsubmit = function (e) {
        e.preventDefault()
        console.group()
        console.log(e.path)
        console.log(e.submitter)
        console.groupEnd()
    }

}