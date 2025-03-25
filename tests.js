// Snack 01
function getInitials(fullName) {
    const words = fullName.split(' ').filter(string => string !== '')  // Divido il nome in un array con 2 elementi (elementi prima e dopo lo spazio); filtro le stringhe vuote e poi prendo il primo carattere di ciascuno
    return words.map(word => word[0].toUpperCase()).join('')
}

// Snack 02 ,  Snack 04 , Snack 06
function createSlug(string) {
    if (!string || typeof string !== 'string') {
        throw new Error('Titolo non valido')
    }
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

// Snack 05
function isPalindrome(str) {
    return str.toLowerCase().trim() === str.toLowerCase().trim().split('').reverse().join('')
}

// Snack 07
function findPostById(posts, id) {
    if (!Array.isArray(posts)) {
        throw new Error('Invalid Posts array')
    }

    if (typeof id !== 'number') {
        throw new Error('Invalid ID')
    }

    posts.forEach(post => {
        if (typeof post !== 'object' ||
            post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined) {
            throw new Error('Post structure is not valid')
        }
    })

    return posts.find(post => post.id === id) || null
}

// Snack 08 Bonus

function addPost(array, newPost) {

    if (array.some(post => post.slug === newPost.slug)) {
        throw new Error('Slug già esistente')
    }

    if (array.some(post => post.id === newPost.id)) {
        throw new Error('Id già esistente')
    }

    array.push(newPost)
}

function deletePost(array, postId) {
    const index = array.findIndex(post => post.id === postId)
    if (index !== -1) {
        array.splice(index, 1)
    }
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    deletePost
}