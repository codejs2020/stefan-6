// prvi zadatak
const slova = ['a', 'b', 'c']
// eslint-disable-next-line
console.log(slova)

// drugi zadatak
const brojevi = [1, 2, 3]
// eslint-disable-next-line
console.log(brojevi)

// cetvrti zadatak
const niz = new Array(50)
let broj = 1
// Da ima neku vrednost koju ce u prvom koraku da uporedi u while petlji
for (let i = 0; i <= niz.length; i++) {
  while (broj < 1000000) {
    broj = Math.ceil(Math.random() * 10000000)
  }
  niz[i] = broj
}
