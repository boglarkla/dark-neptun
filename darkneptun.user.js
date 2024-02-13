// ==UserScript==
// @name           Dark Neptun
// @namespace      http://tampermonkey.net/
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*neptun*/*oktato*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://*oktato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato/*
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @include        https://host.sdakft.hu/*
// @include        https://neptun.ejf.hu/ejfhw/*
// @grant          none
// @version        0.0.7
// @author         bglrk
// @description    Dark mode for neptun.
// @downloadURL    https://raw.githubusercontent.com/boglarkla/dark-neptun/main/darkneptun.user.js
// ==/UserScript==

(function () {
    'use strict';

    // Add custom CSS directly to the page
    const customCSS = `
        :root {
            --link-color: #d6bdff;
            --main-color: #4c396b;
            --background-color: #1c1828;
            --main-fontcolor: whitesmoke;
            --secondary-background-color: #4c2a6a;
            --secondary-fontcolor: #eee;
            --dark-font-color: var(--background-color);
            --ovarlay-color: #222;
        }
        body * {
            /* background-image: none !important; */
            background-color: var(--background-color) !important;
            color: var(--main-fontcolor) !important;

        }        
    `;

    // Inject custom CSS into the page
    const styleElement = document.createElement('style');
    styleElement.textContent = customCSS;
    document.head.appendChild(styleElement);
})();
