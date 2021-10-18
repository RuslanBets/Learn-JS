const names = [
    'F. James',
    'G. Koner',
    'T. Tesla',
    'M. Tayson',
    'L. Lewis',
    'V. Klichko'
]

function getName() {
    return names[rand()]
}

function wrapperName() {
    let span = document.createElement('span')
    span.innerText = getName()

    return span
}

let rand = () => Math.floor(Math.random() * names.length);

export default wrapperName