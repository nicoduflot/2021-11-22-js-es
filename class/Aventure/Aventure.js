import {loaded, loadNav, s, sAll, cE, setCookie, getCookie, getXhr} from '../Utils.js';
import Aventurier from './Aventurier.js';
import {Voleur} from './Voleur.js';
import {Mage} from './Mage.js';
import {Guerrier} from './Guerrier.js';
import * as Creation from './MiseEnPlace.js';

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

loaded(function(){
    loadNav();

    s('#createP').addEventListener('click', function(){
        let nom = s('#nomP');
        let prenom = s('#prenomP');
        let classe = s('#classeP');
        let content = '';
        let personnage = Creation.createP(prenom.value, nom.value, classe.value);
        if(!personnage){
            content = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Attention</strong> Votre personnage n'est pas complet
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            `;
        }else{
            content = Creation.fichePerso(personnage);                        
        }
        
        let divResult = s('#fichePerso');
        //console.log(divResult);
        divResult.innerHTML = content;
    });

    //createE
    s('#createE').addEventListener('click', function(){
        let nom = s('#nomE');
        let prenom = s('#prenomE');
        let classe = Creation.randClasse();
        let content = '';
        let personnage = Creation.createP(prenom.value, nom.value, classe);
        if(!personnage){
            content = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Attention</strong> Votre ennemi n'est pas complet
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            `;
        }else{
            content = Creation.fichePerso(personnage);                        
        }
        //console.log(content);
        let divResult = s('#ficheE');
        //console.log(divResult);
        divResult.innerHTML = content;
    });
});