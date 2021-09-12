function azurirajTabeluPotvrda(e) {
    e.preventDefault();
    const tip = document.getElementById("selectTip").value;
    const svrha = document.getElementById("selectSvrha").value;
    let dat = new Date();
    let cijeliDat = dat.getDate().toString() + "." + dat.getMonth() + "." + dat.getFullYear().toString() + ".";
    var polja = [
        tip, svrha, cijeliDat, "u obradi"
    ];
    alert("Uspješno ste podnijeli zahtjev za vašu potvrdu.");
    let tabela = document.getElementById("tabelaPotvrda");
    var red = document.createElement("tr");
    red.classList.add('redFlex');
    red.style.borderBottom = "1px solid #4158d0";
    for (let i = 0; i < 4; i++) {
        let celija = document.createElement("td");
        celija.innerHTML = polja[i];
        red.appendChild(celija);
    }
    tabela.appendChild(red);
}