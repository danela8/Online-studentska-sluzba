window.onload = () => {
    let username = document.location.href.split('?')[1].split('=')[1];
    if (username[username.length - 1] == '#')
        username = username.replace('#', '');
    let user = JSON.parse(window.localStorage.getItem(username));
    console.log(username);
    document.getElementById("imeCelija").innerHTML = user.ime;
    document.getElementById("prezimeCelija").innerHTML = user.prezime;
    document.getElementById("gradCelija").innerHTML = user.grad;
    document.getElementById("adresaCelija").innerHTML = user.adresa;
    document.getElementById("telefonCelija").innerHTML = user.telefon;
    document.getElementById("emailCelija").innerHTML = user.email;
    document.getElementById("sifraCelija").innerHTML = user.sifra;
    document.getElementById("smjerCelija").innerHTML = user.smjer;
    document.getElementById("ciklusCelija").innerHTML = user.ciklus;
    document.getElementById("godinaCelija").innerHTML = user.godina;
    document.getElementById("statusCelija").innerHTML = user.status;
    document.getElementById("profilna").src = user.slika;
}
function uredi(id, idE) {
    if (id != 'sifraCelija')
        if (document.getElementById(id).getAttribute('contenteditable') == 'false') {
            document.getElementById(id).setAttribute('contenteditable', 'true');
        }
        else {
            document.getElementById(id).setAttribute('contenteditable', 'false');
        }
    else
        if (document.getElementById(id).getAttribute('disabled') != null) {
            document.getElementById(id).removeAttribute('disabled');
        }
        else {
            document.getElementById(id).setAttribute('disabled', '');
        }
    if (document.getElementById(idE).classList.contains('fa-edit')) {
        document.getElementById(idE).classList.remove('fa-edit');
        document.getElementById(idE).classList.add('fa-check');
    }
    else if (document.getElementById(idE).classList.contains('fa-check')) {
        document.getElementById(idE).classList.remove('fa-check');
        document.getElementById(idE).classList.add('fa-edit');
    }
}