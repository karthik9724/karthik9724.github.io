function disp() {
    str = document.getElementById('ip').value.toLowerCase();
    const filtered = fruits.find((value) => {
        return value.toLowerCase() == str;
    });
    if (filtered) {
        di.innerHTML = `Found: ${filtered}`;
    } else {
        di.innerHTML = `Not found`;
    }
}
