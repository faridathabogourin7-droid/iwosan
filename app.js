
function afficherErreur(message) {
    let errorBox = document.getElementById('error-message');
    errorBox.innerText = message;
    errorBox.style.display = 'block';
}

function cacherErreur() {  
    let errorBox = document.getElementById('error-message');
    errorBox.style.display = 'none';
}

document.forms['register-form'].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation
    // Add your validation logic here
    console.log('En cour de validation...');



let obligatoires = document.getElementsByClassName('obliger');
let formulairevalide = true;
// Vérification des champs obligatoires
for (let i = 0; i < obligatoires.length; i++) {
    let champ = obligatoires[i]
    if (champ.value.trim() === '') {
formulairevalide = false;
        champ.style.border = '2px solid red';
        console.log('Le champ ' + champ.id+ ' est obligatoire.');
    } else {
                champ.style.border = '2px solid green';
    }
}
    if (!formulairevalide) {
        console.log('Veuillez remplir tous les champs obligatoires.');
        return;
        
    } 
    console.log('Tous les champs obligatoires sont remplis.');


// Récupération des données dans un objet utilisateur
let utilisateur = {
    id: Date.now(),
    dateInscription: new Date().toLocaleDateString(),
    nom: document.getElementById('lastname').value.trim(),
    prenom: document.getElementById('firstname').value.trim(),
    dateDeNaissance: document.getElementById('birthdate').value.trim(),
    groupeSanguin: document.getElementById('bloodtype').value,
    allergies: document.getElementById('allergies').value.trim(),
    maladies: document.getElementById('illness').value.trim(),
    medicaments: document.getElementById('medications').value.trim(),
    contactUrgence: document.getElementById('phone').value.trim()

    
};
console.log('Données de l\'utilisateur renseigner :', utilisateur);
cacherErreur();
let users = localStorage.getItem('IWOSAN_users');
    if(users){
        users = JSON.parse(users);
    } else {
        users = [];
    }
    let doublon = users.some(user =>
    user.nom.trim().toLowerCase() === utilisateur.nom.trim().toLowerCase() &&
    user.prenom.trim().toLowerCase() === utilisateur.prenom.trim().toLowerCase() &&
    user.dateDeNaissance === utilisateur.dateDeNaissance
);
if (doublon) {
    console.log('Utilisateur déjà existant.');
   // alert('Un utilisateur avec le même nom, prénom et année de naissance existe déjà.');
    afficherErreur('Un utilisateur avec le même nom, prénom et année de naissance existe déjà.');
    return;
}

// Génération du QR code
let qrContainer = document.getElementById('qrcode')

qrContainer.innerHTML = "";
new QRCode(qrContainer, {
    text: utilisateur.id.toString(),
    width: 256,
    height: 256
});

console.log("QR HTML:", qrContainer.innerHTML);

let canvas = qrContainer.querySelector('canvas');

let qrImage = canvas.toDataURL("image/png");

utilisateur.qrCode = qrImage;


// Sauvegarde de l'utilisateur dans le stockage local

addUser(utilisateur);
console.log('Utilisateur ajouté avec succès :', utilisateur);




});

// Écoute des champs complémentaires
let complement = document.getElementsByClassName('complementaire');
for (let i = 0; i < complement.length; i++) {
    complement[i].addEventListener('input', function() {
        console.log(this.value);
    }  );
}


let deroulante = document.getElementsByClassName('liste');
for(let i = 0; i < deroulante.length; i++){
    deroulante[i].addEventListener('change', function(){
        console.log(this.value);
    });
}


