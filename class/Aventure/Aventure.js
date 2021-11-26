import {s, sAll, cE, setCookie, getCookie, getXhr} from '../Utils.js';
import Aventurier from './Aventurier.js';
import {Voleur} from './Voleur.js';
import {Mage} from './Mage.js';
import {Guerrier} from './Guerrier.js';

// test création aventurier

let monPremierPerso = new Aventurier('De Zootaumaxime', 'Herbert');

console.log(monPremierPerso);
console.log(monPremierPerso.arme);
monPremierPerso.ajoutArme('Épée au fourreau rétif', 4);


let ennemi = new Aventurier('Ferocious', 'Lucius');
ennemi.ajoutArme('Grandes griffes', 2);
console.log(ennemi);
console.log(ennemi.arme);

console.log(monPremierPerso.attaquer(ennemi));
console.log(ennemi.multi(monPremierPerso));

let monVoleur = new Voleur('Bastard', 'Sneaky');
monVoleur.ajoutArme('Dague', 2);
console.log(monVoleur);
console.log(monVoleur.arme);
monVoleur.changerArme('Dague');
console.log(monVoleur);

console.log(ennemi.attaquer(monVoleur))
console.log(monVoleur.multi(ennemi));

let monMage = new Mage('Prompteur', 'Henry');
monMage.ajoutArme('Baguette Magique', 3);
console.log(monMage);
console.log(monMage.arme);

console.log(ennemi.attaquer(monMage))
console.log(monMage.multi(ennemi));

let monGuerrier = new Guerrier('Amann', 'kouign');
monGuerrier.ajoutArme('Hache de guerre', 4);
console.log(monGuerrier);
console.log(monGuerrier.arme);
monGuerrier.changerArme('Hache de guerre');

console.log(ennemi.attaquer(monGuerrier))
console.log(monGuerrier.multi(ennemi));