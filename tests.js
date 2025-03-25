// Snack 01
function getInitials(fullName) {
    const words = fullName.split(' ').filter(string => string !== '')  // Divido il nome in un array con 2 elementi (elementi prima e dopo lo spazio); filtro le stringhe vuote e poi prendo il primo carattere di ciascuno
    return words.map(word => word[0].toUpperCase()).join('')
}

// Snack 02 ,  Snack 04
function createSlug(string) {
    return string.toLowerCase().replaceAll(' ', '-')
}

// Snack 03
function average(array) {
    if (array.length === 0) {
        throw new Error('Array vuoto')
    }

    array.forEach(number => {
        if (isNaN(number)) {
            throw new Error('Array contiene un elemento non numerico')
        }
    })
    return array.reduce((acc, num) => acc + num, 0) / array.length
}


module.exports = {
    getInitials,
    createSlug,
    average
}