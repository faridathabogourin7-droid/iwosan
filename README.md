# IWOSAN

Application web permettant de gérer les informations médicales des patients et d’accéder rapidement à leurs données via un QR Code.

---

## I.  Description

IWOSAN est une application Web médicale qui permet :

- d’enregistrer les informations d’un patient  
- de générer un QR Code unique lié à son dossier  
- de scanner ce QR Code afin d’accéder rapidement à ses informations vitales en cas d’urgence  

---

## II. Fonctionnalités

- Inscription et gestion des patients  
- Génération automatique d’un QR Code  
- Scanner intégré (Html5Qrcode)  
- Affichage des informations vitales  
- Tableau de bord des utilisateurs  
- Stockage local via LocalStorage  

---

## III. Technologies utilisées

- HTML5 / CSS3 / JavaScript  
- LocalStorage  
- Html5Qrcode (scanner QR)  
- GitHub Pages pour l’hébergement  

---

## IV.  Installation

1. Cloner le projet :

```bash
git clone https://github.com/faridathabogourin7-droid/iwosan.git
```

2. Ouvrir le fichier index.html dans un navigateur.

---
## V.  Structure du projet
Code

iwosan/
│
├── README.md
├── assets/
│   ├── img/   → images et QR Codes
│   ├── css/   → styles
│   └── js/    → scripts JavaScript
│
├── index.html          → page d’accueil
├── register.html    → ajout d’un patient
├── dashboard.html      → liste des patients
├── urgence.html        → scanner QR
└── user.html           → fiche patient

---
## VI.  Auteur
Projet développé par Faridath ABOGOURIN.



