function isSighUp() {
    let is = Math.floor(Math.random() * 10);

    if (is > 2) {
        return true
    }

    return false
}

export default function wrapperIsSignUp() {
    let mark = document.createElement('mark')
    mark.innerText = isSighUp()
    return mark
}