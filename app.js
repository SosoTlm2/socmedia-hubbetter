// Automatically redirect invalid routes
if (!["/", "/profile", "/settings"].includes(window.location.pathname)) {
    window.location.href = "/404.html";
}
