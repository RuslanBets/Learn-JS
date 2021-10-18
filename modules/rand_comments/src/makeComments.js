import wrapperName from "./fakeNames";
import wrapperIsSignUp from "./isSignUp";

export default function make() {
    let ul = document.querySelector('#fake-comments')
    if (ul.querySelectorAll('li').length  >= 20) {
        return false
    }else {
        let li = document.createElement('li')
        ul.append(li)
        li.append(wrapperName())
        li.append(wrapperIsSignUp())

        make()
    }
}