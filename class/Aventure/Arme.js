export default class Arme{
    constructor(nom = 'Mains Nues', niveauDegats = 1){
        this.nom = nom;
        this.niveauDegats = niveauDegats;
        this.enchantement = null;
    }

    setEnchantement(nom, effet){
        let enchantement = {
            nom: nom,
            effet: effet
        }
        this.enchantement = enchantement;
    }
}