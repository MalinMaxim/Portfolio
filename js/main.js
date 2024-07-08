const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка на уровне сис настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage 
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove("dark-mode-btn--active");
	document.body.classList.remove("dark");
}

// Если меняются сис настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
	const newColorScheme = event.matches ? "dark" : 'light';

	if (newColorScheme === 'dark') {
		btnDarkMode.classList.add("dark-mode-btn--active");
		document.body.classList.add("dark");
		localStorage.setItem("darkMode", "light");
	} else {
		btnDarkMode.classList.remove("dark-mode-btn--active");
		document.body.classList.remove("dark");
	}
})

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle("dark-mode-btn--active");
	const isDark = document.body.classList.toggle('dark');

	if(isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem("darkMode", "light");
	}


}