
// DESKTOP HEADER //


// MOBILE HEADER //
    // Navngiver vores variable, ved at henvise til deres id 
    const burgermenu = document.getElementById("burgermenu");
    const menuMobile = document.getElementById("menu_mobile");

    // Sætter en onlcik på burgermenuen, så der sker noget når man klikker på den
    burgermenu.onclick = visMenu;
    let menuSynlig = true; // En Boolean variabel, sand eller falsk.

    // Tilhørende funktion, menuen vises når man klikker på burgermenuen
    function visMenu(){
    if(menuSynlig == true){
        menuMobile.style.display = "block"; // ændrer på stylingen så menuen bliver tydelig
        menuSynlig = false; // ændrer til "falsk" så menuen forbliver fremme
    }else {
        menuMobile.style.display = "none"; // ændrer på stylingen igen, så menuen forsvinder
        menuSynlig = true; // ændrer til "true" så menuen igen forbliver skjult
    }
}