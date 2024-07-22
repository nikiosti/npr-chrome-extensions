function addIcon(article) {
  const icon = document.createElement('img')
  icon.src =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFzdGVyaXNrIj48cGF0aCBkPSJNMTIgNnYxMiIvPjxwYXRoIGQ9Ik0xNy4xOTYgOSA2LjgwNCAxNSIvPjxwYXRoIGQ9Im02LjgwNCA5IDEwLjM5MiA2Ii8+PC9zdmc+'
  icon.addEventListener('click', function (event) {
    const menu = document.createElement('div')
    menu.style.position = 'fixed'
    menu.style.top = event.clientY + 'px'
    menu.style.left = event.clientX + 'px'
    menu.style.background = 'white'
    menu.style.border = '1px solid black'
    menu.style.padding = '10px'
    menu.style.zIndex = 1000

    const loading = document.createElement('p')
    loading.textContent = 'Loading...'
    menu.appendChild(loading)

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        const weatherItem = document.createElement('p')
        weatherItem.textContent = `response title: ${data.title}`
        menu.appendChild(weatherItem)

        menu.removeChild(loading)
      })
      .catch((error) => {
        console.error(error)
        const errorItem = document.createElement('p')
        errorItem.textContent = 'Error loading weather data'
        menu.appendChild(errorItem)
      })

    document.body.appendChild(menu)
    window.addEventListener('scroll', function () {
      menu.style.top = event.clientY + window.scrollY + 'px'
    })
  })
  article.appendChild(icon)
}

console.log(document.querySelectorAll('.promocard'))

document.querySelectorAll('.promocard').forEach(addIcon)
