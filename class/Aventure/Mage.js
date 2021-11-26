/**
 * 
 * Classe Mage, étendue d'Aventurier
 * 
 * changer le multi
 * afficher que le personnage lance une boule de feu qui fait 10d10 dégâts
 * 
 * 2d6 =  (random de 1 - 6) + (random 1 - 6)
 * 
 */
 import Aventurier from "./Aventurier.js";
 import Arme from './Arme.js';
 export class Mage extends Aventurier {
   constructor(nom, prenom) {
     super(nom, prenom);
   }
 
   bouleDeFeu(nbD = 1, nbFaces = 6) {
     let degats = 0;
     for (let i = 0; i < 10; i++) {
       degats += this.d(nbD, nbFaces);
     }
     return degats;
   }
 
   multi(personnage) {
     let degatSup = this.bouleDeFeu(10, 10);
     return `${this.prenom} ${this.nom} lance une boule de feu sur 
${personnage.prenom} ${personnage.nom} pour ${degatSup} dégat(s)`;
   }
 }