let parametre = new URLSearchParams(window.location.search);
let userId = parametre.get("id");

let users = JSON.parse(localStorage.getItem("IWOSAN_users")) || [];
let utilisateur = users.find(user => user.id === Number(userId));
let personnalDiv = document.getElementById("personnal");

personnalDiv.innerHTML = `
    <h3>${utilisateur.nom} ${utilisateur.prenom}</h3>
    <p><strong>Date de naissance :</strong> ${utilisateur.dateDeNaissance}</p>
    <p><strong>Groupe sanguin :</strong> ${utilisateur.groupeSanguin}</p>
    <p><strong>Allergies :</strong> ${utilisateur.allergies}</p>
    <p><strong>Maladies :</strong> ${utilisateur.maladies}</p>
    <p><strong>Médicaments :</strong> ${utilisateur.medicaments}</p>
    <p><strong>Contact d'urgence :</strong> ${utilisateur.contactUrgence}</p>
    <p><strong>Date d'inscription :</strong> ${utilisateur.dateInscription}</p>
`;

document.getElementById("qrcode").innerHTML = `
    
        <img src="${utilisateur.qrCode}" alt="QR Code de ${utilisateur.nom}">

`;
function retourdashboard() {
    window.location.href = "dashboard.html";
}
