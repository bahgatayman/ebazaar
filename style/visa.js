function validateFields() {
    // Get references to the input fields
    var cardholderInput = document.getElementById('cardholder');
    var cardnumberInput = document.getElementById('cardnumber');
    var expiryInput = document.getElementById('expiry');
    var cvvInput = document.getElementById('cvv');

    // Check if any of the fields are empty
    if (
        cardholderInput.value.trim() === '' ||
        cardnumberInput.value.trim() === '' ||
        expiryInput.value.trim() === '' ||
        cvvInput.value.trim() === ''
    ) {
        alert('Please fill in all the required fields.');
    } else {
        // If all fields are filled, navigate to the "Check/check.html" page
        window.location.href = 'check/check.html';
    }
}