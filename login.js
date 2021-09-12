var objPeople = [
	{
		username: "aid",
		password: "braco",
		status: "Redovan",
		samofinansiranje: "false",
		ime: "Aid",
		prezime: "Tabak",
		drzava: "Bosna & Hercegovina",
		grad: "Sarajevo",
		gradRodj: "Sarajevo",
		adresa: "Adresa123",
		telefon: "061123456",
		email: "atabak1@etf.unsa.ba	",
		smjer: "Automatika i Elektronika (AiE)",
		ciklus: "Master",
		godina: "Druga",
		slika: "../userPictures/AidBracaProfilna.jpeg",
		jmbg: "0710967117899",
		datumRodj: "07/10/1996",
		semestar: "4"

	},
	{
		username: "dinesh",
		password: "12345",
		status: "Ponovac",
		samofinansiranje: "false",
		ime: "Dinesh",
		prezime: "Chugtai",
		grad: "Sillicon Valley",
		drzava: "Pakistan",
		gradRodj: "Islamabad",
		adresa: "Erlich’s Hacker Hostel",
		telefon: "063444555",
		email: "dchugtai@etf.unsa.ba",
		smjer: "Računarstvo i Informatika (RI)",
		ciklus: "Bachelor",
		godina: "Treća",
		slika: "../userPictures/dinesh.jpeg",
		jmbg: "0108901117899",
		datumRodj: "01/08/1990",
		semestar: "6"
	},
	{
		username: "gilfoyle",
		password: "12345",
		status: "Redovan",
		samofinansiranje: "true",
		ime: "Bertram",
		prezime: "Gilfoyle",
		drzava: "Canada",
		grad: "Sillicon Valley",
		gradRodj: "Ottawa",
		adresa: "Erlich’s Hacker Hostel",
		telefon: "060111111222",
		email: "gbertram@etf.unsa.ba	",
		smjer: "Računarstvo i Informatika (RI)",
		ciklus: "Master",
		godina: "Prva",
		slika: "../userPictures/gilfoyle.jpg",
		jmbg: "0811952227899",
		datumRodj: "08/11/1995",
		semestar: "2"
	}

]

window.onload = () => {
	for (var i = 0; i < objPeople.length; i++) {
		window.localStorage.setItem(objPeople[i].username, JSON.stringify(objPeople[i]));
	}
}

function getInfo() {
	var un = document.getElementById('username').value
	var pass = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		if (un == objPeople[i].username && pass == objPeople[i].password) {
			location.href = "profil.html?username=" + objPeople[i].username;
			return;
		}
	}
	document.getElementById('error').innerHTML = 'Neispravno korisničko ime ili lozinka';
}
