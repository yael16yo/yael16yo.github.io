// Dark/Light Theme

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
let themeLabel = document.getElementById("themeLabel");

function updateLabel(theme) {
    if (theme === 'dark') {
        themeLabel.innerHTML = 'Dark Theme <i class="fa fa-moon fa-lg theme-icon"></i>';
    } else {
        themeLabel.innerHTML = 'Light Theme <i class="fa fa-sun fa-lg theme-icon"></i>';
    }
}

// Load the user's theme preference on page load
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');

if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
} else {
    body.classList.remove('dark-theme');
    themeToggle.checked = false;
}

updateLabel(currentTheme);

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        updateLabel('dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        updateLabel('light');
    }
});



//Flags EN/FR

const buttonChangeLanguage = document.getElementById("language");
let flagLanguage = document.getElementById("countryFlag");

flagLanguage.innerHTML = '<img src="assets/img/fr.svg" alt="Drapeau Français">';

buttonChangeLanguage.addEventListener('change', () => {
    if(buttonChangeLanguage.value == "fr") {
        flagLanguage.innerHTML = '<img src="assets/img/fr.svg" alt="Drapeau Français">';
    } else {
        flagLanguage.innerHTML = '<img src="assets/img/us.svg" alt="English Flag">';
    }
});


const elementsToTranslate = {
    welcome: document.querySelector('.main__wrapper-nav__link:first-child'),
    brand: document.querySelector('.main__wrapper-nav__link.amsterdam'),
    createPerfume: document.querySelector('.main__wrapper__container__title'),
    uc_title1: document.querySelector('.uc_title1'),
    uc_title2: document.querySelector('.uc_title2')
}

function loadTranslations(language) {
    fetch(`assets/i18n/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            elementsToTranslate.welcome.textContent = translations.welcome;
            elementsToTranslate.brand.textContent = translations.brand;
            elementsToTranslate.createPerfume.textContent = translations.create_perfume;
            elementsToTranslate.uc_title1.textContent = translations.uc_title1;
            elementsToTranslate.uc_title2.textContent = translations.uc_title2;
        })
        .catch(error => console.error('Error loading translations:', error));
}

buttonChangeLanguage.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    loadTranslations(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
});

// Load the default or saved language
const savedLanguage = localStorage.getItem('language') || 'fr';
buttonChangeLanguage.value = savedLanguage;
loadTranslations(savedLanguage);

