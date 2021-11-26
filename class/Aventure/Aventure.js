import {s, sAll, cE, setCookie, getCookie, getXhr} from '../Utils.js';
import Aventurier from './Aventurier.js';

// test création aventurier

let monPremierPerso = new Aventurier('De Zootaumaxime', 'Herbert');

console.log(monPremierPerso);
console.log(monPremierPerso.arme);
monPremierPerso.ajoutArme('Épée au fourreau rétif', 4);


let ennemi = new Aventurier('Ferocious', 'Lucius', 'Grandes griffes', 2);
console.log(ennemi);
console.log(ennemi.arme);

console.log(monPremierPerso.attaquer(ennemi));
console.log(ennemi.multi(monPremierPerso));