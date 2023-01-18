"use strict";
const userInput = document.querySelector('#user-name');
const button = document.querySelector("button");
const results = document.querySelector('#results');
button.addEventListener('click', function (event) {
    event.preventDefault();
    results.innerHTML = "";
    getAgeFromName(userInput.value);
});
const getAgeFromName = function (name) {
    fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
        const newInfo = document.createElement('section');
        newInfo.id = "user-response";
        results.append(newInfo);
        newInfo.innerHTML = `
        <p>Hi ${data.name}, based on your name you are <bold>${data.age}</bold> years old.</p>
        `;
    });
};
