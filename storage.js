
function getUsers() {
    let users = localStorage.getItem('IWOSAN_users');
    if (!users) {
        return [];
    }
    return JSON.parse(users);
}

function saveUsers(userslist) {
    localStorage.setItem('IWOSAN_users', JSON.stringify(userslist));
}

function addUser(utilisateur) {
    let users = getUsers();
    users.push(utilisateur);
    saveUsers(users);
    console.log('Utilisateur ajouté dans le stockage local.');
}

