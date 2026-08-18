
const themeBtn = document.getElementById("themeBtn");
const rtlBtn = document.getElementById("rtlBtn");

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.innerHTML = moonIcon;
} else {
    document.body.classList.remove("light");
    if (themeBtn) themeBtn.innerHTML = sunIcon;
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = moonIcon;
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = sunIcon;
        }
    });
}

let rtlMode = localStorage.getItem("rtl");

if (rtlMode === "true") {
    document.body.classList.add("rtl");
    document.documentElement.setAttribute("dir", "rtl");
} else {
    document.body.classList.remove("rtl");
    document.documentElement.setAttribute("dir", "ltr");
}

if (rtlBtn) {
    rtlBtn.addEventListener("click", () => {
        document.body.classList.toggle("rtl");

        if (document.body.classList.contains("rtl")) {
            document.documentElement.setAttribute("dir", "rtl");
            localStorage.setItem("rtl", "true");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
            localStorage.setItem("rtl", "false");
        }
    });
}

// Initialize Lucide Icons
function initLucide() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLucide);
} else {
    initLucide();
}