var lang;

function setLanguage(language) {
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
    document.getElementById('item-volume').innerHTML = lang.itemVolume;
    document.getElementById('chance').innerHTML = lang.chance;
    document.getElementById('buy-enchant').innerHTML = lang.buyEnchant;
    document.getElementById('cast-cost').innerHTML = lang.castCost;
    document.getElementById('charge').innerHTML = lang.charge;
    if (document.getElementById('enchantment-type').value == 'once') {
        document.getElementById('enchantment-type').innerHTML = lang.once;
    } else {
        document.getElementById('enchantment-type').innerHTML = lang.constant;
    }
    document.getElementById('spells').innerHTML = lang.spells;
    document.getElementById('effects').innerHTML = lang.effects;
    document.getElementById('item').innerHTML = lang.item;
    document.getElementById('soul').innerHTML = lang.soul;
}

window.onload = function() {
    var userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.substring(0, 2));
    document.getElementById('language-picker-select').value = userLang.substring(0, 2);
}