import {User} from './User.js';

/*
Le mot-clef précise durant l'import 
l'élément que l'on souhaitera récupérer par défaut
*/
export default class Company{
    constructor(name){
        this.name = name;
    }
}

export class Employee extends User{
    constructor(name, job){
        super(name);
        this.job = job
    }
}