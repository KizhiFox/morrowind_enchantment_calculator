function changeType(button) {
    if (button.value == 'once') {
        button.value = 'constant';
        button.innerHTML = lang.constant;
    } else {
        button.value = 'once';
        button.innerHTML = lang.once;
    }
}