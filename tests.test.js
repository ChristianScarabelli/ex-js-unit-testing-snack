const { getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require('./tests')


describe('Funzione getInitials', () => {
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials('Mario Rossi')).toBe('MR')
        expect(getInitials('chiara poli')).toBe('CP')
        expect(getInitials('vincenzo  glionna')).toBe('VG')
    })
})


describe('Funzione createSlug', () => {
    test('La funzione createSlug restituisce una stringa in lowercase', () => {
        expect(createSlug('Giorgio')).toBe('giorgio')
        expect(createSlug('Hello World')).toBe('hello-world')
    })
    test('La funzione createSlug sostituisce gli spazi con -', () => {
        expect(createSlug('Questo è un test')).toBe('questo-è-un-test')
    })
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
        expect(() => createSlug('')).toThrow()
        expect(() => createSlug(123)).toThrow()
        expect(() => createSlug(null)).toThrow()
    })
})


describe('Funzione average', () => {
    test('La funzione average calcola la media aritmetica di un array di numeri', () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3)
        expect(average([-1, 0, 1])).toBe(0)
        expect(() => average([2, 3, 'stringa'])).toThrow()
        expect(() => average([])).toThrow()
    })
})


describe('Funzione isPalindrome', () => {
    test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
        expect(isPalindrome('racecar')).toBeTruthy()
        expect(isPalindrome(' Radar')).toBeTruthy()
        expect(isPalindrome('hello')).toBeFalsy()
    })
})


const posts = [
    { id: 1, title: 'Post 1', slug: 'post-1' },
    { id: 2, title: 'Post 2', slug: 'post-2' },
    { id: 3, title: 'Post 3', slug: 'post-3' },
]

describe('Funzione findPostById', () => {
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Post 1', slug: 'post-1' })
        expect(findPostById(posts, 4)).toBe(null)
        expect(() => findPostById(posts, '2')).toThrow('Invalid ID')
        expect(() => findPostById([1, 2, 3, 4], 3)).toThrow('Post structure is not valid')
    })
})


