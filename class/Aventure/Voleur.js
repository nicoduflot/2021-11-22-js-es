/**
 *
 * Classe Voleur, étendue d'Aventurier
 *
 * changer le multi
 * afficher que le personnage attaque sournoisement en causant 2d6 dégâts en plus
 *
 * 2d6 =  (random de 1 - 6) + (random 1 - 6)
 *
 *
 */
import Aventurier from "./Aventurier.js";
import Arme from './Arme.js';
export class Voleur extends Aventurier {
  constructor(nom, prenom) {
    super(nom, prenom);
  }

  sneakAttack(nbD6 = 1) {
    let degats = 0;
    for (let i = 0; i < nbD6; i++) {
      degats += this.d(6);
    }
    return degats;
  }

  multi(personnage) {
    let degatSup = this.sneakAttack(2);
    return `${this.prenom} ${this.nom} attaque sournoisement 
${personnage.prenom} ${personnage.nom} pour ${this.degatsDeBase} + ${degatSup} dégat(s) supplémentaire(s)`;
  }
}
