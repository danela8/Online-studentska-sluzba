window.onload = function () {
    document.getElementById('predmet').innerHTML = "Predmet:" + " " + document.location.href.split('?')[1].split('=')[1].split('+').join(' ').replace('%C4%8D', 'č').replace('%C4%8D', 'č').replace('%C5%A1', 'š').split('&')[0];
}
function posalji() {
    const username = document.location.href.split('&')[1].split('=')[1];
    alert("Uspješno ste učestvovali u anketi!");
    document.location.href = "profil.html" + "?username=" + username;
}