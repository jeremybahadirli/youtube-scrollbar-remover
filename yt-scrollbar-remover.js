// ==UserScript==
// @name        YouTube Scrollbar Remover
// @match       *://*.youtube.com/*
// @version     1.1
// @updateURL   https://raw.githubusercontent.com/jeremybahadirli/youtube-scrollbar-remover/main/yt-scrollbar-remover.js
// ==/UserScript==

function removeWebkitScrollbarRule() {
    for (const sheet of document.styleSheets) {
        try {
            for (let i = 0; i < sheet.cssRules.length; i++) {
                if (sheet.cssRules[i].selectorText === 'body::-webkit-scrollbar') {
                    sheet.deleteRule(i);
                    resetBodyDisplay();
                    return;
                }
            }
        } catch (e) {
            if (!(e instanceof DOMException && e.name === 'SecurityError')) {
                console.error("YouTube Scrollbar Remover", e.name, e.message);
            }
        }
    }
}

function resetBodyDisplay() {
    document.body.style.overflowY = 'hidden';
    setTimeout(() => document.body.style.overflowY = '', 0);
}

removeWebkitScrollbarRule();
