const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



function changeTheme(e) {
    if (e.target.checked) {
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', 'dark')
    } else {
        body.classList.add(Theme.LIGHT)
        body.classList.remove(Theme.DARK)
        localStorage.setItem('theme', 'light')
}
}

themeSwitch.addEventListener('change', changeTheme)


function changeSaveTheme(e) {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add(Theme.DARK)
        themeSwitch.checked = true
    } else {
        body.classList.add(Theme.LIGHT)
        themeSwitch.checked = false
    }
}

document.addEventListener('DOMContentLoaded', changeSaveTheme)