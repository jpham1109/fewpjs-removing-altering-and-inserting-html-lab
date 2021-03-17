const main = document.querySelector('main#main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Jamie is the champion"
body = document.querySelector('body')
body.appendChild(newHeader)