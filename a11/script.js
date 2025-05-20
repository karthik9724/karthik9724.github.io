// Array of fruits
var fruits = ["apple", "banana", "orange", "melon"];

// Display the fruit list in <ul>
fruits.map((value) => {
    document.getElementById('list').innerHTML += `<li>${value}</li>`;
});

// Function to check if input matches a fruit
function disp() {
    let str = document.getElementById('ip').value.toLowerCase();
    const filtered = fruits.find((value) => {
        return value.toLowerCase() === str;
    });

    if (filtered) {
        document.getElementById('di').innerHTML = `Found: ${filtered}`;
    } else {
        document.getElementById('di').innerHTML = `Not found`;
    }
}
