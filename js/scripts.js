//création d'une petite biblio de fonctions de raccourcis pour agir sur le DOM
// le DOM est chargée
function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

function s(selector){
    return document.querySelector(selector);
}

function sAll(selector){
    return document.querySelectorAll(selector);
}

//raccourci crateElement
function cE(element){
    return document.createElement(element);
}

function loadNav(){
    fetch('../includes/navigation.html')
    .then( function(response){
        return response.text();
    } )
    .then(
        function(nav){
            document.querySelector('body > nav').innerHTML = nav;
            // utiliser une fonction qui crée des éléments avec createElement
            // et les ajoute directement dans le DOM
        }
    )
    .catch(function(error){
        console.log(error);
    });
}

//fonction de création de cookie
// par défaut, la fonction détruit le cookie appelé
// la durée de validité du cookie sera exprimée en jours

function setCookie(name, value = "", days = -1){
    let dateNow = new Date();
    dateNow.setTime( dateNow.getTime() + (days * 24 * 60 * 60 * 1000) );
    document.cookie = `${name}=${value}; expires=${dateNow.toUTCString()}; SameSite=Strict; Secure`;
}

// récupération d'un cookie dans les cookies du site
function getCookie(name){
    //unAutreCookie=12; monCookie2=test; monCookie=Nicolas;
    let tabCookie = document.cookie.split('; ');
    for(cookie of tabCookie){
        let tabValue = cookie.split('=');
        if(name === tabValue[0]){
            return tabValue[1];
        }
    }
    return false;
}

// getXhr : connexion pour AJAX
function getXhr(){
    let xhr = null;
    // est-ce que le navigateur supporte AJAX
    if( window.ActiveXObject || window.XMLHttpRequest){ //ou un protocole pour IE ou les autres navigateurs
        if(window.ActiveXObject){ // si IE
            try{ //on essaie un premier des deux protocole XMLHTTP d'IE
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            }catch(e){ // si le premier protocole ne fonctionne pas, on utilise l'autre
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        }else{// autre navigateurs
            xhr = new XMLHttpRequest();
        }
    }else{//le navigateur ne supporte pas ajax
        console.log('Votre navigateur ne supporte pas AJAX');
        xhr = false;
    }
    return xhr; //on renvoie le résultat de la fonction
}

function jsonUsersToTable(data){
    //console.log(data);
    let html = '';
    for(let user of data){
        //console.log(user);
        html += `
        <tr data-id="${user.id}" data-name="${user.name}" data-email="${user.email}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `
    }
    return html;
}

function jsonUsersToTableObject(data){
    console.log(data);
    let tHeadContent = '';
    let tbodyContent = '';
    let isItFirstRound = true;
    tHeadContent += '<tr>';
    // on parcour les éléments du JSON
    for(let user of data){
        //ici, chaque élément est un objet user
        tbodyContent += `<tr data-id="${user.id}" data-name="${user.name}" data-email="${user.email}">`;
        // on parcour les propriétés de l'objet user
        for(key in user){
            //on vérfie que chaque propriété trouvée est une propriété directe
            if(user.hasOwnProperty(key)){
                // si c'est le premier user, on crée la ligne d'entête du tableau,
                // en récupérant les clefs des propriétés 
                if(isItFirstRound){
                    tHeadContent += `<th>${key}</th>`
                }
                // si la propriété ne contient un objet (deuxième niveau),
                // on l'inckus directement dans une cellule
                if('object' !== typeof user[key]){
                    tbodyContent += `<td>${user[key]}</td>`;    
                }else{
                    // si la propriété contient un objet (deuxième niveau)
                    tbodyContent += `<td>`;//${user[key]}</td>
                    for(item in user[key]){
                        if(user[key].hasOwnProperty(item)){
                            // on ajoute les détails de l'objet dans la cellule (nom de la propriété et sa valeur)
                            // si elle ne contient pas d'objet
                            if('object' !== typeof user[key][item]){
                                tbodyContent += `${item} : ${user[key][item]}<br />`;
                            }
                            //si c'est un objet, on ne l'ajoute pas (troisième niveau non affiché)
                        }
                    }
                    tbodyContent += `</td>`;//${user[key]}</td>
                }
            }
        }
        tbodyContent += `</tr>`;
        isItFirstRound = false;
    }
    tHeadContent += '</tr>';
    return [tHeadContent, tbodyContent];
}