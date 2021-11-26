import Arme from './Arme.js';

export default class Aventurier{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.role = this.constructor.name;
        this.arme = [];
        this.arme.push(new Arme());
        this.armeEquipee = 'Mains Nues';
        this.niveauDegatArmeEquipe = 1;
        this.degatsDeBase = parseInt(this.niveauDegatArmeEquipe) * 5;
    }

    d(nbFaces = 4, nbD = 1, mod = 0){
        let result = 0;
        for(let i = 0; i < nbD; i++){
            result += (Math.floor(Math.random() * parseInt(nbFaces) + 1));
        }
        result += parseInt(mod);
        return result;
    }

    ajoutArme(nomArme = 'Mains Nues', niveauDegats = 1){
        this.arme.push(new Arme(nomArme, niveauDegats));
    }

    changerArme(search){
        for(let arme of this.arme){
            //console.log(armeC.nom, armeC.niveauDegats);
            if(search === arme.nom){
                console.log(`${arme.nom} équipé(e)`);
                this.armeEquipee = arme.nom;
                this.niveauDegatArmeEquipe = parseInt(arme.niveauDegats);
                this.degatsDeBase = parseInt(this.niveauDegatArmeEquipe) * 5;
            }
        }
    }

    attaquer(personnage){
        return `Attaque : ${this.prenom} ${this.nom} attaque ${personnage.prenom} ${personnage.nom} 
avec ${this.armeEquipee} pour ${this.degatsDeBase} dégat(s)`;
    }

    multi(personnage){
        let totalDegats = this.degatsDeBase*2;
        return `Multi : ${this.prenom} ${this.nom} attaque ${personnage.prenom} ${personnage.nom} 
pour ${totalDegats} dégats (doublés)`;
    }
}