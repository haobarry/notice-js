const cssString = `#top-notice{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;pointer-events:none;width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:9999999;cursor:pointer;transition:0.2s}#top-notice span{pointer-events:auto;width:max-content;animation:fadein 0.4s;animation-delay:0s;border-radius:8px;padding:9px 18px;box-shadow:0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);margin:4px;transition:0.2s;z-index:9999;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;height:max-content}#top-notice span.hide{opacity:0;pointer-events:none;transform:translateY(-10px);height:0;padding:0;margin:0}.top-notice-warn{background-color:#ffffff;color:#e29505}.top-notice-error{background-color:#ffffff;color:#d93025}.top-notice-info{background-color:#ffffff;color:#0e6eb8}.top-notice-success{background-color:#ffffff;color:#1a9e2c}.top-notice-{background-color:#ffffff;color:#333}@keyframes fadein{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}`;
const svgIcons = {
    warn: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875ZM10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 6Zm0 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8.707 7.293a1 1 0 0 0-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L10 8.586z" clip-rule="evenodd"/></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-7-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586L7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"/></svg>`,
    "": "",
};
const notice = {
    open(text, type = "", time = 3000) {
        if (typeof type === "number") {
            time = type;
            type = "";
        }
        let mainEl = getMainEl(cssString);
        let el = document.createElement("span");
        el.className = `top-notice-${type}`;
        el.innerHTML = svgIcons[type] + text;
        mainEl.appendChild(el);
        setTimeout(() => {
            el.classList.add("hide");
        }, time - 500);
        setTimeout(() => {
            mainEl.removeChild(el);
            el = null;
        }, time);
    },
};
function getMainEl(cssString) {
    let mainEl = document.querySelector("#top-notice");
    if (!mainEl) {
        mainEl = document.createElement("div");
        mainEl.id = "top-notice";
        document.body.appendChild(mainEl);
        let style = document.createElement("style");
        style.innerHTML = cssString;
        document.head.insertBefore(style, document.head.firstChild);
    }
    return mainEl;
}



window.addEventListener('DOMContentLoaded', function () {
    window.notice = notice;
});
