// ===============================
// 1. Récupération des utilisateurs
// ===============================
function getUsers() {
    return JSON.parse(localStorage.getItem("IWOSAN_users")) || [];
}

let users = getUsers();
let usersList = document.getElementById("users-list");

// Si aucun utilisateur n'est enregistré
if (users.length === 0) {
    usersList.innerHTML = "<p>Aucun utilisateur enregistré pour le moment.</p>";
}



// ===============================
// 2. Affichage des cartes utilisateurs
// ===============================
users.forEach(user => {

    // Création de la carte
    let card = document.createElement("div");
    card.classList.add("user-card");

    // Contenu HTML de la carte
    card.innerHTML = `
        <h3>${user.nom} ${user.prenom}</h3>
        <p><strong>Groupe sanguin :</strong> ${user.groupeSanguin}</p>
        <p><strong>Date d'inscription :</strong> ${user.dateInscription}</p>

        <div class="qr-container">
            <img src="${user.qrCode}" alt="QR Code de ${user.nom}">
        </div>

        <button class="view-btn" data-id="${user.id}">Voir fiche</button>
        <button class="delete-btn" data-id="${user.id}">Supprimer</button>
    `;

    // Ajout de la carte dans la page
    usersList.appendChild(card);
});



// ===============================
// 3. Bouton "Voir fiche"
// ===============================
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("view-btn")) {

        let id = event.target.getAttribute("data-id");


        // Redirection vers la fiche utilisateur
        window.location.href = `user.html?id=${id}`;
    }
});




// 4. Bouton "Supprimer"

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {

        let id = event.target.getAttribute("data-id");

        // Filtrer les utilisateurs
        let updatedUsers = users.filter(u => u.id != id);

        // Sauvegarder la nouvelle liste
        localStorage.setItem("IWOSAN_users", JSON.stringify(updatedUsers));

        // Recharger la page
        location.reload();
    }
});

