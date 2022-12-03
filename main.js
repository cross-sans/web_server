form = document.getElementById("form")
form.addEventListener('submit', function(e) {
	e.preventDefault()

	const input = document.getElementById('file').files[0]
	const comment = document.getElementById('comments').value

	const data = new FormData()
	data.append('inputed-file', input)
	data.append('comment', comment)

	fetch('https://github.com/cross-sans/web_server', {
		method: "POST",
		body: data,
	})
	.then(res => res.json())
	.then(data2 => console.log(data2))
	.catch(err => console.log(err);alert(er))
})


