const { getInitials,
    createSlug,
    average,
    isPalindrome
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