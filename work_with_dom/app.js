window.onload = function (){
    let addBtn = document.querySelector('button')

    addBtn.onclick = function (e){
        let input = document.createElement('input');

        e.target.parentElement.append(input)
    }
}