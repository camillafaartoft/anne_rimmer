/* ---BOOKING---*/  
    // Navngiver vores variable, ved at henvise til deres id 
    const form = document.querySelector("form");
    const fuldenavn = document.getElementById("fuldenavn");
    const email = document.getElementById("email");
    const mobilnummer = document.getElementById("mobilnummer");
    const emne = document.getElementById("emne");
    const foresporgsel = document.getElementById("foresporgsel");
    const popupBooking = document.getElementById("popup_booking");

    // Booking formular 
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = [];

    if (fuldenavn.value.trim() === "") {
        errors.push("Fulde navn er påkrævet");
        document.getElementById("error-fuldenavn").textContent = "Fulde navn er påkrævet"; // Advarsel om manglende udfyldt felt
    } else {
        document.getElementById("error-fuldenavn").textContent = ""; // Viser ikke noget, ved korrekt udfyldt
    }

    if (email.value.trim() === "") {
        errors.push("E-mail er påkrævet");
        document.getElementById("error-email").textContent = "E-mail er påkrævet"; // Advarsel om manglende udfyldt felt
    } else {
        document.getElementById("error-email").textContent = ""; // Viser ikke noget, ved korrekt udfyldt
    }

    if (mobilnummer.value.trim() === "") {
        errors.push("Mobilnummer er påkrævet");
        document.getElementById("error-mobilnummer").textContent = "Mobilnummer er påkrævet"; // Advarsel om manglende udfyldt felt
    } else {
        document.getElementById("error-mobilnummer").textContent = ""; // Viser ikke noget, ved korrekt udfyldt
    }

    if (emne.value.trim() === "") {
        errors.push("Emne er påkrævet");
        document.getElementById("error-emne").textContent = "Emne er påkrævet"; // Advarsel om manglende udfyldt felt
    } else {
        document.getElementById("error-emne").textContent = ""; // Viser ikke noget, ved korrekt udfyldt
    }

    if (foresporgsel.value.trim() === "") {
        errors.push("Forespørgsel er påkrævet");
        document.getElementById("error-foresporgsel").textContent = "Forespørgsel er påkrævet"; // Advarsel om manglende udfyldt felt
    } else {
        document.getElementById("error-foresporgsel").textContent = ""; // Viser ikke noget, ved korrekt udfyldt
    }

    if (errors.length === 0) {
        popupBooking.style.display = "block"; // Viser pop-up bekræftelsen
        form.style.opacity = "0"; // Skjuler formularen så man kun ser bekræftelsen
    
    } else {
        document.getElementById("errorMessage").removeAttribute("hidden"); 
        document.getElementById("errorMessage").textContent = "Mangler at udfylde felter."; // Tilføjer guidende tekst om at man mangler at udfylde felter 
    }
});


