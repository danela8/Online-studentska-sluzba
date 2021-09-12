function odjava() {
    if (confirm('Da li ste sigurni da želite da se odjavite?')) {
        location.href = "index.html";
    }
}
function potvrdi() {
    const un = document.location.href.split('=')[1];
    alert("Uspješno je kreiran ugovor o učenju.");
    document.location.href = "profil.html" + "?username=" + un;
}

function promijeniLokaciju(lokacija) {
    const un = document.location.href.split('=')[1];
    document.location.href = lokacija + '?username=' + un;
}
function promijeniLokacijuZaAnketu(lokacija) {
    const un = document.location.href.split('=')[1];
    document.location.href = lokacija + '&username=' + un;
}