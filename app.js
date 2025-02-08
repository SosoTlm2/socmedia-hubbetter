// Language translation dictionary
const translations = {
  en: {
    pageTitle: "Welcome to the Site",
    navHome: "Home",
    navProfile: "Profile",
    easterEggTitle: "You typed something random.",
    easterEggMessage: "Admit it, you typed something random. (you found an easter egg :p)",
    easterEggButton: "Go back to Home"
  },
  fr: {
    pageTitle: "Bienvenue sur le Site",
    navHome: "Accueil",
    navProfile: "Profil",
    easterEggTitle: "Vous avez tapé quelque chose au hasard.",
    easterEggMessage: "Avouez-le, vous avez tapé quelque chose au hasard. (vous avez trouvé un easter egg :p)",
    easterEggButton: "Retour à l'accueil"
  }
};

// Detect user's language
const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';

// Function to apply translations
function applyTranslations() {
  document.title = translations[userLang].pageTitle;

  const elementsToTranslate = {
    '#navHome': 'navHome',
    '#navProfile': 'navProfile',
    '#easterEggTitle': 'easterEggTitle',
    '#easterEggMessage': 'easterEggMessage',
    '#easterEggButton': 'easterEggButton'
  };

  for (const [selector, translationKey] of Object.entries(elementsToTranslate)) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = translations[userLang][translationKey];
    }
  }
}

// Apply translations on page load
window.addEventListener('DOMContentLoaded', applyTranslations);
