window.onload = function (){
    const goods = [
        {
            id:1,
            price:100,
            title:"Product 1"
        },
        {
            id:2,
            price:110,
            title:"Product 2"
        },
        {
            id:3,
            price:140,
            title:"Product 3"
        }
    ];

    let products_box = document.querySelector('.products')

    populateView(goods)
    //Task # 1 How to set products to html ?
    function populateView(data){
        for (let product of data){
            products_box.append(makeLi(product))
        }
    }

    function makeLi(data){
        let li = document.createElement('li')
        li.classList += 'item'
        li.innerText = data.title
        li.append(makeSpan(data.price))
        li.append(makeBuyBtn(data.id))
        return li
    }

    function makeSpan(price){
        let span = document.createElement('span')
        span.innerText = price
        span.classList += 'span'
        return span
    }
    function makeBuyBtn(id){
        let btn = document.createElement('button')
        btn.classList += 'to_basket'
        btn.innerText = "Buy"
        btn.setAttribute('good-id', id)
        return btn
    }
}