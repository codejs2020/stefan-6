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
let broj = 1 // promenljiva broj mora da ima neku pocetnu vrednost da bi mogao da se uporedi sa 1000000 u while petlji u prvom koraku
for (let i = 0; i <= niz.length; i++) {
  while (broj < 1000000) {
    broj = Math.ceil(Math.random() * 10000000)
  }
  niz[i] = broj
}
