function brojKarticeValidacija(e) {
    var brojKartice = document.getElementsByClassName("brojKartice")[0];
    if (brojKartice.value.length != 0)
        brojKartice.style.backgroundColor = "white";
    else
        brojKartice.style.backgroundColor = "pink";
}
function vpcValidacija(e) {
    var vpc = document.getElementById("vpc");
    if (vpc.value.length != 0)
        vpc.style.backgroundColor = "white";
    else
        vpc.style.backgroundColor = "pink";
}
function datumValidacija1(e) {
    var datum1 = document.getElementsByClassName("datum")[0];
    if (datum1.value.length != 0)
        datum1.style.backgroundColor = "white";
    else
        datum1.style.backgroundColor = "pink";
}
function datumValidacija2(e) {
    var datum2 = document.getElementsByClassName("datum")[1];
    if (datum2.value.length != 0)
        datum2.style.backgroundColor = "white";
    else
        datum2.style.backgroundColor = "pink";
}
function move() {
    var elem = document.getElementById("progresLjubicasti");
    var width = 50;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function promijeniLokacijuCheckout(lokacija) {
    const un = document.location.href.split('&')[1].split('=')[1];
    document.location.href = lokacija + "?username=" + un;
}

function natrag() {
    location.href = "placanje.html" + "?username=" + document.location.href.split('&')[1].split('=')[1];
}

function placeno() {
    var brojKartice = document.getElementsByClassName("brojKartice")[0];
    var datum2 = document.getElementsByClassName("datum")[1];
    var datum1 = document.getElementsByClassName("datum")[0];
    var vpc = document.getElementById("vpc");
    if (brojKartice.value.length != 16 || vpc.value.length != 3 || datum1.value.length != 2 || datum2.value.length != 2) {
        alert("Molimo ispravno popunite tražene informacije");
        if (brojKartice.value.length != 16) {
            brojKartice.style.backgroundColor = "pink";
            brojKartice.style.opacity = "4";
        }
        if (datum2.value.length != 2) {
            datum2.style.backgroundColor = "pink";
            datum2.style.opacity = "4";
        }
        if (datum1.value.length != 2) {
            datum1.style.backgroundColor = "pink";
            datum1.style.opacity = "4";
        }
        if (vpc.value.length != 3) {
            vpc.style.backgroundColor = "pink";
            vpc.style.opacity = "4";
        }

    } else {
        alert("Plaćanje uspješno");
        location.href = "profil.html" + "?username=" + document.location.href.split('&')[1].split('=')[1];
    }
}

function chkcontrol(j) {
    var checkedValue = null;
    var inputElements = document.getElementsByClassName('aa');
    var suma = 0;
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            suma = suma + parseInt(inputElements[i].value);
        }
    }
    localStorage.test = suma;
    document.getElementById("result").value = suma;

}

window.onload = function () {
    move();
    document.getElementById('result').value = document.location.href.split('?')[1].split('&')[0].split('=')[1];
    document.getElementsByClassName("brojKartice")[0].addEventListener("input", brojKarticeValidacija);
    document.getElementById("vpc").addEventListener("input", vpcValidacija);
    document.getElementsByClassName("datum")[0].addEventListener("input", datumValidacija1);
    document.getElementsByClassName("datum")[1].addEventListener("input", datumValidacija2);
}