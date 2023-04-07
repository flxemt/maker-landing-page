const form = document.getElementById('form')

function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData(form)
  const email = formData.get('email')
  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    form.classList.add('error')
    return
  }

  form.classList.remove('error')
}

form.addEventListener('submit', handleSubmit)
