

  for (const [selector, translationKey] of Object.entries(elementsToTranslate)) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = translations[userLang][translationKey];
    }
  }
}

// Apply translations on page load
window.addEventListener('DOMContentLoaded', applyTranslations);
