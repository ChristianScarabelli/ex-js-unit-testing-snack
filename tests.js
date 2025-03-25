// Snack 01
function getInitials(fullName) {
    const words = fullName.split(' ');  // Divido il nome in un array con 2 elementi (nome e cognome) e poi prendo il primo carattere
    return words.map(word => word[0].toUpperCase()).join('');
}

// Snack 02
function createSlug(string) {
    return string.toLowerCase()
}

module.exports = {
    getInitials,
    createSlug
}