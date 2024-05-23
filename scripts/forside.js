/* ---VIDEO PÅ FORSIDEN SKAL STARTE FORFRA---*/ 
    // Videoelementet findes ved hjælp af dets id:
    const video = document.getElementById('video');

    // Der tilføjes en event listener til "ended":
    video.addEventListener('ended', function() {
    // Sætter videoens afspilningsposition til 0
    // currentTime = indstiller / returnerer den aktuelle position i sekunder for videoen - læst om propert på W3S)
    video.currentTime = 0; 
    //  Videoen starter igen:
    video.play();
    });

    // Sørger for at videoen er klar til at blive spillet:
    video.addEventListener('canplay', function() {
    video.play();
    });

/* ---ANMELDELSER SLIDER ---*/ 
    // Sætter slideIndex til 1, så man starter med at vise den første anmeldelse
    let slideIndex = 1;
    showSlides(slideIndex);

    // Funktion til at håndtere næste/forrige anmeldelse
    function plusSlides(n) {
    // Opdaterer slideIndex og viser den givne anmeldelse
    showSlides(slideIndex += n);
    }

    // Funktion til at håndtere direkte valg af en specifik slide
    function currentSlide(n) {
    // Opdaterer slideIndex til den valgte slide og viser den
    showSlides(slideIndex = n);
    }

// Funktion til at vise den aktuelle slide
    function showSlides(n) {
    let i;
    // Henter alle elementer med klassen "forside_anmeldelser"
    let slides = document.getElementsByClassName("forside_anmeldelser");
    // Henter alle elementer med klassen "prik"
    let prik = document.getElementsByClassName("prik");
    
    // Hvis n er større end antallet af slides / anmeldelser, resetter den til første slide / anmeldelse
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Hvis n er mindre end 1, går vi til den sidste slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Skjuler alle slides / anmeldelser
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Fjerner "active" klassen fra alle prikker
    for (i = 0; i < prik.length; i++) {
        prik[i].className = prik[i].className.replace(" active", "");
    }
    
    // Viser den aktuelle slide / anmeldelse
    slides[slideIndex - 1].style.display = "block";
    
    // Beregn den aktuelle prik-indeks og tilføj "active" klassen til den tilsvarende prik
    let currentPrikIndex = (slideIndex - 1) % 3;  // Dette sikrer, at prikkerne starter forfra efter 3 anmeldelser
    prik[currentPrikIndex].className += " active";
}