const form = document.getElementById('form')
const input = document.getElementById('input-search')
let searchText = ''

input.addEventListener('change', (event) => {
	searchText = event.target.value
})

form.addEventListener('submit', (event) => {
	event.preventDefault()
	form.reset()
	if (searchText) {
		window.location.href = `https://www.google.com/search?q=${searchText}`
	}
})
