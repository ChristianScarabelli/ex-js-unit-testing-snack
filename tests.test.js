const { getInitials, createSlug, average } = require('./tests')

/* Snack 1
Creare un test che verifichi la seguente descrizione:
"La funzione getInitials restituisce le iniziali di un nome completo."
*/

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Mario Rossi')).toBe('MR')
    expect(getInitials('chiara poli')).toBe('CP')
})


/* Snack 2
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug restituisce una stringa in lowercase."
*/

test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('Giorgio')).toBe('giorgio')
    expect(createSlug('Hello World')).toBe('hello world')
})


/* Snack 3
Creare un test che verifichi la seguente descrizione:
"La funzione average calcola la media aritmetica di un array di numeri."
*/

test('La funzione average calcola la media aritmetica di un array di numeri', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3)
    expect(average([5, 10, 5, 4, 16])).toBe(8)
})

