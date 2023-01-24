const USER = 'user01'
const PASSWORD = '123123'
const successMessage = 'Los datos son correctos, puedes entrar :)'
const errorMessage = 'Los datos son incorrectos, vuelve a intentarlo :('

function enterData() {
  const newUser = prompt('Ingrese su usuario')
  const newPassword = prompt('Ingrese su contraseña')

  if (newUser === USER && newPassword === PASSWORD) return showPage()
  else {
    alert(errorMessage)
    enterData()
  }
}

function showPage() {
  alert(successMessage)
}

enterData()
