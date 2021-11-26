import Aventurier from "./Aventurier.js";
import {Voleur} from "./Voleur.js";
import {Mage} from "./Mage.js";
import {Guerrier} from "./Guerrier.js";

export let tabClasse = ['Aventurier', 'Mage', 'Guerrier', 'Voleur'];

export function randClasse(){
    let nbClasse = tabClasse.length - 1;
    let randClasse = Math.floor(Math.random() * nbClasse)
    //console.log('randClasse', randClasse, tabClasse[randClasse]);
    return tabClasse[randClasse];
}

export function createP(prenom, nom, classe){
    if('' !== prenom && '' !== nom && '' !== classe){
        let personnage = null;
        switch(classe){
            case('Voleur'):
                personnage = new Voleur(nom, prenom);
            break;
            case('Mage'):
                personnage = new Mage(nom, prenom);
            break;
            case('Guerrier'):
                personnage = new Guerrier(nom, prenom);
            break;
            case('Aventurier'):
            default: 
                personnage = new Aventurier(nom, prenom);
            break;
        }
        return personnage;
    }else{
        return false;
    }
}

export function fichePerso(personnage){
    let html = '';
    html += `
<table class="table table-dark">
    <tr>
        <th>Nom : </th>
        <td>${personnage.nom}</td>
        <th>Prénom : </th>
        <td>${personnage.prenom}</td>
        <th>Classe : </th>
        <td>${personnage.role}</td>
    </tr>
</table>
    `;
    return html;
}