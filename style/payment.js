function showConfirmation() {
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
}

function hideConfirmation() {
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "none";
}

function showConfirmationAddress() {
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var zipcodeInput = document.getElementById("zipcode");
    var confirmationMessage = document.getElementById("address-message");

    if (addressInput.value !== "" && cityInput.value !== "" && zipcodeInput.value !== "") {
        confirmationMessage.style.display = "block";
    }
}

function hideConfirmationAddress() {
    var confirmationMessage = document.getElementById("address-message");
    confirmationMessage.style.display = "none";
}