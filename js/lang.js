function setLanguage(language) {
    var lang;
    switch(language) {
        case 'en':
            lang = langEN;
            break;
        case 'ru':
            lang = langRU;
            break;
        default:
            lang = langEN;
    }
    document.getElementById('intelligence').innerHTML = lang.intelligence;
    document.getElementById('skill').innerHTML = lang.enchant;
    document.getElementById('luck').innerHTML = lang.luck;
}

window.onload = function() {
    var userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.substring(0, 2));
    document.getElementById('language-picker-select').value = userLang.substring(0, 2);
}