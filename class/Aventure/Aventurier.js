import Arme from './Arme.js';

export default class Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.arme = [];
        this.arme.push(new Arme());
    }

    ajoutArme(nomArme = 'Mains Nues', NiveauDegats = 1){
        this.arme.push(new Arme(nomArme, NiveauDegats));
    }

    attaquer(personnage){
        return `${this.prenom} ${this.nom} attaque ${personnage.prenom} ${personnage.nom}`;
    }

    multi(personnage){
        return `${this.prenom} ${this.nom} attaque ${personnage.prenom} ${personnage.nom} avec dégât doublés`;
    }
}