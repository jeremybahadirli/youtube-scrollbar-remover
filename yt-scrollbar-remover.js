// ==UserScript==
// @name        YouTube Scrollbar Remover
// @match       *://*.youtube.com/*
// @version     1.0
// @updateURL   https://raw.githubusercontent.com/jeremybahadirli/youtube-scrollbar-remover/main/yt-scrollbar-remover.js
// ==/UserScript==

outside:
for (const sheet of document.styleSheets) {
    try {
        for (let i = 0; i < sheet.cssRules.length; i++) {
            if (/body::-webkit-scrollbar/.exec(sheet.cssRules[i].selectorText)) {
                sheet.deleteRule(i);
                document.body.style.display = 'none';
                setTimeout(() => document.body.style.display = '', 0);
                break outside;
            }
        }
    } catch (e) {
    }
}
