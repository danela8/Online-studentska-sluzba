window.onload = () => {
    let username = document.location.href.split('?')[1].split('=')[1];
    if (username[username.length - 1] == '#')
        username = username.replace('#', '');
    let user = JSON.parse(window.localStorage.getItem(username));
    console.log(user);
    if (user.status == "Redovan") {
        if (user.samofinansiranje == "true")
            document.getElementById("skolarina").value = 900;
        else
            document.getElementById("skolarina").value = 100;
        document.getElementById("nepolozeni").disabled = true;
        document.getElementById('nepolozeniLabel').style.opacity = 0.6;
    }
    else if (user.status == "Ponovac") {
        document.getElementById("skolarina").value = 200;
    }
    else if (user.status == "Apsolvent")
        document.getElementById("skolarina").value = 100;

    if (user.ciklus == "Bachelor") {
        document.getElementById("komispit").disabled = true;
        document.getElementById('komispitLabel').style.opacity = 0.6;
    }

    if (user.godina == "Prva") {
        document.getElementById('diploma').disabled = true;
        document.getElementById('diplomaLabel').style.opacity = 0.6;
        document.getElementById("nepolozeni").disabled = true;
        document.getElementById('nepolozeniLabel').style.opacity = 0.6;
    }

    if ((user.ciklus == "Master" && user.godina != "Druga") || (user.ciklus == "Bachelor" && user.godina != "Treća")) {
        document.getElementById('zavrsni').disabled = true;
        document.getElementById('zavrsniLabel').style.opacity = 0.6;
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
function next() {
    if ((document.getElementById("card").checked || document.getElementById("paypal").checked) && document.getElementById("result").value != 0) {
        let url = "checkout.html?sum=" + document.getElementById('result').value + "&username=" + document.location.href.split('=')[1];
        location.href = url;
    }
    else {
        alert("Molimo prvo odaberite način i svrhu plaćanja!");
    }
}
function myfun() {
    document.getElementById('result').value = localStorage['test'];
    document.getElementById('result').innerHTML = localStorage['test'];
}

