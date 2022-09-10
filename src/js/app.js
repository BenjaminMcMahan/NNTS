import 'bootstrap';
const firstName = document.getElementById("first_name");
const contactText = document.getElementById("contactName");
firstName.addEventListener("blur", function() {
    if (firstName.value !== '') {
        contactText.textContent = `${firstName.value}!`
    } else {
        contactText.textContent = '...?'
    }
});