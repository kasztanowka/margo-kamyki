// ==UserScript==
// @name         [NI] Kamyki
// @version      1.1
// @description  Dodatek pozwala dodać napis do prawego górengo rogu kamienia czerwonego smoka.
// @author       Kasztanowka
// @updateURL    https://raw.githubusercontent.com/kasztanowka/margo-kamyki/refs/heads/main/kamyki.user.js
// @match        http*://**.margonem.pl/
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// @icon         https://micc.garmory-cdn.cloud/obrazki/itemy/neu/kamien3.gif
// @grant        none
// ==/UserScript==

(function () {
    const Storage = {
        getValue: (key) => JSON.parse(localStorage.getItem(key)),
        setValue: (key, value) => localStorage.setItem(key, JSON.stringify(value))
    };

    let cacheToken = Storage.getValue('kamykiToken') || Date.now();
    Storage.setValue('kamykiToken', cacheToken);

    const getResourceUrl = () => `https://kasztan566.smallhost.pl/kamyki.js?c=${cacheToken}`;

    const scriptElement = document.createElement('script');
    scriptElement.src = getResourceUrl();
    scriptElement.type = 'module';
    document.head.appendChild(scriptElement);
})();
