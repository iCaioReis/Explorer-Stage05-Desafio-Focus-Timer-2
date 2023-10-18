let lightMode = true

const buttonTogleThemeMode = document.getElementById('toogleThemeMode')
buttonTogleThemeMode.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    const mode = lightMode ? "light" : "dark"

    event.currentTarget.querySelector('span').textContent = `Ativar ${mode} mode!`

    lightMode = !lightMode
})