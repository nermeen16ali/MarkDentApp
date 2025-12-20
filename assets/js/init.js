document.addEventListener("DOMContentLoaded", function () {
    // Initialize Intl Tel Input
    const inputOptions = {
        initialCountry: "eg",
        preferredCountries: ["sa", "eg", "ae", "kw", "qa", "bh", "om"],
        separateDialCode: true,
        utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
    };

    const phone = document.querySelector("#phone");
    if (phone) {
        window.intlTelInput(phone, inputOptions);
    }
});