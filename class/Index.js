import {foo, data, month, loaded, loadNav, s, sAll, cE, setCookie, getCookie, getXhr} from './Utils.js';
//import * from './Utils.js'; // pareil que la ligne précédente
import * as other from './Others.js';
import {Admin, User} from './User.js';
//import Company from './Company.js'; // par défaut, la classe Company sera importé
import Toto, {Employee} from './Company.js';    // Toto est en fait la classe Company exportée par défaut
                                                // On lui réserve un espace de nom : Toto
console.log(foo());
console.log(data);
console.log(month);

console.log(other);
console.log(other.foo());
console.log(other.data);
for(let value of other.data){
    console.log(value);
}

let user = new User('Jon Sno');
console.log(`Hello ${user.name}`);

let admin = new Admin('Aria Starck');
console.log(`Hello ${admin.name}, ${admin.role}`);

let company = new Toto('Agence tous risques');
let agent = new User('Mr. T');

console.log(`Company.name : ${company.name}, agent : ${agent.name}`);
let soldat = new Employee('Striker', 'Général');

console.log(`Company.name : ${company.name}, agent : ${soldat.name}, job : ${soldat.job}`);

loaded( function(){
    loadNav();
});