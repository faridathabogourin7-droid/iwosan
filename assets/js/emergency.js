function getUsers(){
    return JSON.parse(localStorage.getItem("IWOSAN_users")) || [];
}

let users = getUsers();
let urgenceDiv = document.getElementById("urgence-info");


function startScanner() {
    const html5QrCode = new Html5Qrcode("preview");
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
            console.log("Code QR détecté:", decodedText);

            let userId = Number(decodedText);

            let patient = users.find(user => user.id === userId);
            if (!patient) {
                urgenceDiv.innerHTML = "<p style='color:red;'>patient non trouvé.</p>";
                return;
            }

            afficherInfosVitale(patient);
            html5QrCode.stop();
        },
        (errorMessage) => {
         }
          );
          }

function afficherInfosVitale(patient) {
    urgenceDiv.innerHTML = `
        <h3>${patient.lastname} ${patient.firstname}</h3>
        
        <p><strong>Groupe sanguin:</strong> ${patient.bloodType}</p>
        <p><strong>Allergies:</strong> ${patient.allergies}</p>
        <p><strong>Médicaments:</strong> ${patient.medications}</p>
                <p><strong>Contact d'urgence:</strong> ${patient.phone}</p>

    `;
}
window.onload = startScanner;




