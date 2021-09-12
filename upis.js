function myfun() {

    document.getElementById('studij').value = toString(localStorage['test']);
    document.getElementById('studij').innerHTML = localStorage['test'];

    document.getElementById('godinaStudija').value = localStorage['testa'];
    document.getElementById('godinaStudija').innerHTML = localStorage['testa'];

    document.getElementById('semestar').value = localStorage['testb'];
    document.getElementById('semestar').innerHTML = localStorage['testb'];
}
function abc() {
    var odsj = document.getElementById('smjer');
    var sem = document.getElementById('semm');
    var god = document.getElementById('godd');
    localStorage.test = odsj;
    localStorage.testb = sem;
    localStorage.testa = god;

    location.href = "ugovor.html" + "?username=" + document.location.href.split('=')[1];
}
function uvezi() {
    let username = document.location.href.split('?')[1].split('=')[1];
    if (username[username.length - 1] == '#')
        username = username.replace('#', '');
    let user = JSON.parse(window.localStorage.getItem(username));
    console.log(user);
    if (user.ciklus == "Master") {
        document.getElementsByName('sem')[4].disabled = true;
        document.getElementsByName('sem')[5].disabled = true;
        document.getElementById('l4').style.opacity = 0.6;
        document.getElementById('l5').style.opacity = 0.6;
    }
    if (user.status == "Redovan")
        document.getElementsByName('up')[0].checked = true;
    else if (user.status == "Ponovac")
        document.getElementsByName('up')[0].checked = true;
    document.getElementById('ime').value = user.ime;
    document.getElementById('prezime').value = user.prezime;
    document.getElementById('jmbg').value = user.jmbg;
    [day, month, year] = user.datumRodj.split('/');
    datum = year + "-" + month + "-" + day;
    console.log(datum);
    document.getElementById('datumrodj').value = datum;
    document.getElementById('mjestorodj').value = user.gradRodj;
    document.getElementById('mjestopreb').value = user.grad;
    document.getElementById('adresa').value = user.adresa;
    document.getElementById('drzav').value = user.drzava;

    if (user.semestar == "1")
        document.getElementsByName("sem")[0].checked = true;
    else if (user.semestar == "2")
        document.getElementsByName("sem")[1].checked = true;
    else if (user.semestar == "3")
        document.getElementsByName("sem")[2].checked = true;
    else if (user.semestar == "4")
        document.getElementsByName("sem")[3].checked = true;
    else if (user.semestar == "5")
        document.getElementsByName("sem")[4].checked = true;
    else if (user.semestar == "6")
        document.getElementsByName("sem")[5].checked = true;

    if (user.smjer == "Računarstvo i Informatika (RI)")
        document.getElementById('ri').selected = true;
    else if (user.smjer == "Automatika i Elektronika (AiE)")
        document.getElementById('aie').selected = true;
    else if (user.smjer == "Elektroenergetika (EE)")
        document.getElementById('ee').selected = true;
    else if (user.smjer == "Telefomunikacije (TK)")
        document.getElementById('tk').selected = true;

    if (user.samofinansiranje == "false")
        document.getElementById('red').checked = true;
    else
        document.getElementById('samof').checked = true;

    if (user.ciklus == "Master")
        if (user.godina == "Prva")
            document.getElementsByName('god')[3].checked = true;
        else
            document.getElementsByName('god')[4].checked = true;
    else
        if (user.godina == "Prva")
            document.getElementsByName('god')[0].checked = true;
        else if (user.godina == "Druga")
            document.getElementsByName('god')[1].checked = true;
        else if (user.godina == "Treća")
            document.getElementsByName('god')[2].checked = true;

    return;
}

function uredi(id, idE) {
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