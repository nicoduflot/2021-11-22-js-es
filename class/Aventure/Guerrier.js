/**
 * 
 * Classe Guerrier, étendue d'Aventurier
 * 
 * changer le multi
 * afficher que le personnage utilise attaquer 2 fois
 * 
 * 2d6 =  (random de 1 - 6) + (random 1 - 6)
 * 
 */
 import Aventurier from "./Aventurier.js";
 import Arme from './Arme.js';
 export class Guerrier extends Aventurier {
   constructor(nom, prenom) {
     super(nom, prenom);
   }
 
   multiAttaque(personnage, nbAttaque){
       let resultMulti = '';
       for(let i = 0; i < nbAttaque; i++){
        resultMulti += this.attaquer(personnage) + `
`;
       }
       return resultMulti;
   }
 
   multi(personnage) {
     let resultatMulti = this.multiAttaque(personnage, 2);
     return `${this.prenom} ${this.nom} devient féroce : 
`+resultatMulti;
   }
 }