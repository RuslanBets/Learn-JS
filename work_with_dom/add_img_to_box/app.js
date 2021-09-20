window.onload = function () {
    let images = document.querySelector('.images'),
        btn = document.querySelector('button'),
        img_count,

        users = [
            {
                id:1,
                name:"Name 1"
            },
            {
                id:2,
                name:"Name 2"
            },
            {
                id:3,
                name:"Name 3"
            }
        ]
    // users.find(function (val){
    //     console.log(val)
    //     // if (i.id === 3){
    //     //     console.log(i)
    //     // }
    // })
    //
    // for (let i in users) {
    //     console.log(users[i].name)
    // }

    let numbers = [1,2,3,4,5,6,7]

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === 2){
            continue
            // console.log("I found number = "+numbers[i])
        }
        console.log(numbers[i])
    }

    window.onclick = function (e) {
        console.log(e.target)
    }

    btn.onclick = function () {

        img_count = images.querySelectorAll('img').length

        let new_img = document.createElement('img')

            new_img.src = 'img/1.jpg'
        if (img_count < 6) {
            images.append(new_img)
        }else{
            console.log('Do not have space for img !!')
        }

    }

}