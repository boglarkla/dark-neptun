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
// @version        0.0.8
// @author         bglrk
// @description    Dark mode for neptun.
// @downloadURL    https://raw.githubusercontent.com/boglarkla/dark-neptun/main/darkneptun.user.js
// ==/UserScript==

(function () {
    'use strict';

    // Add custom CSS directly to the page
    const customCSS = `
        :root {
            --link-color: #81689D;
            --main-color: #FFD0EC;
            --background-color: #191E36;
            --main-fontcolor: #AA85D4;
            --secondary-background-color: #070F2B;
            --secondary-fontcolor: #E240E2;
            --dark-font-color: var(--background-color);
            --ovarlay-color: #222;
        }
        body * {
            /* background-image: none !important; */
            background-color: var(--background-color) !important;
            color: var(--main-fontcolor) !important;
            font-family: Tahoma, Verdana, sans-serif; !important;
        }    
        
        a { color: var(--link-color) !important; }

        #mb1 li.menu-parent {
            color: var(--secondary-fontcolor) !important;
        }

        .top_menu_left {
            background-image: none; !important;
        }

        .top_menu_right {
            background-image: none; !important;
        }

    `;

    // Inject custom CSS into the page
    const styleElement = document.createElement('style');
    styleElement.textContent = customCSS;
    document.head.appendChild(styleElement);

    // Get the element with the id "upBoxes_upRSS"
    var elementToRemove = document.getElementById("upBoxes_upRSS");

    // Check if the element exists
    if (elementToRemove) {
        // Remove the element from its parent node
        elementToRemove.parentNode.removeChild(elementToRemove);
    } else {
        console.log("Element with id 'upBoxes_upRSS' not found.");
    }

    // Get the element with the id "span_changeproject"
    elementToRemove = document.getElementById("span_changeproject");

    // Check if the element exists
    if (elementToRemove) {
        // Remove the element from its parent node
        elementToRemove.parentNode.removeChild(elementToRemove);
    } else {
        console.log("Element with id 'span_changeproject' not found.");
    }


    // Get all elements with the class leftbuttons_td
    var leftButtonsTds = document.querySelectorAll('td.leftbuttons_td');

    // Iterate over the list of elements and remove each one
    leftButtonsTds.forEach(function (td) {
        td.parentNode.removeChild(td);
    });

    // Get all elements with the class leftbuttons_td
    var headerpanelbutton = document.querySelectorAll('td.GadgetHeaderPanelButtonLeftMenu');

    // Iterate over the list of elements and remove each one
    headerpanelbutton.forEach(function (td) {
        td.parentNode.removeChild(td);
    });
})();
