const { getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require('./tests')

/* Snack 1
Creare un test che verifichi la seguente descrizione:
"La funzione getInitials restituisce le iniziali di un nome completo."
*/

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Mario Rossi')).toBe('MR')
    expect(getInitials('chiara poli')).toBe('CP')
    expect(getInitials('vincenzo  glionna')).toBe('VG')
})


/* Snack 2
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug restituisce una stringa in lowercase."
*/

test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('Giorgio')).toBe('giorgio')
    expect(createSlug('Hello World')).toBe('hello-world')
})


/* Snack 3
Creare un test che verifichi la seguente descrizione:
"La funzione average calcola la media aritmetica di un array di numeri."
*/

test('La funzione average calcola la media aritmetica di un array di numeri', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3)
    expect(average([-1, 0, 1])).toBe(0)
    expect(() => average([2, 3, 'stringa'])).toThrow()
    expect(() => average([])).toThrow()
})


/* Snack 4
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug sostituisce gli spazi con -."
*/

test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(createSlug('Questo è un test')).toBe('questo-è-un-test')
})


/* Snack 5
Creare un test che verifichi la seguente descrizione:
"La funzione isPalindrome verifica se una stringa è un palindromo."
*/

test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('racecar')).toBeTruthy()
    expect(isPalindrome(' Radar')).toBeTruthy()
    expect(isPalindrome('hello')).toBeFalsy()
})


/* Snack 6
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
*/

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug('')).toThrow()
    expect(() => createSlug(123)).toThrow()
    expect(() => createSlug(null)).toThrow()
})

/* Snack 7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
Creare un test che verifichi le seguenti descrizioni:
"La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
*/

const posts = [
    { id: 1, title: 'Post 1', slug: 'post-1' },
    { id: 2, title: 'Post 2', slug: 'post-2' },
    { id: 3, title: 'Post 3', slug: 'post-3' },
]

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Post 1', slug: 'post-1' })
    expect(findPostById(posts, 4)).toBe(null)
    expect(() => findPostById(posts, '2')).toThrow('Invalid ID')
    expect(() => findPostById([1, 2, 3, 4], 3)).toThrow('Post structure is not valid')
})


