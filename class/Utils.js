function foo(){
    return 'utils::foo()';
}

const data = ['foo', 'bar', 'baz'];
const m = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export {foo, data, m as month};

//création d'une petite biblio de fonctions de raccourcis pour agir sur le DOM
// le DOM est chargée
export function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

export function s(selector){
    return document.querySelector(selector);
}

export function sAll(selector){
    return document.querySelectorAll(selector);
}

//raccourci crateElement
export function cE(element){
    return document.createElement(element);
}

export function loadNav(){
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

export function setCookie(name, value = "", days = -1){
    let dateNow = new Date();
    dateNow.setTime( dateNow.getTime() + (days * 24 * 60 * 60 * 1000) );
    document.cookie = `${name}=${value}; expires=${dateNow.toUTCString()}; SameSite=Strict; Secure`;
}

// récupération d'un cookie dans les cookies du site
export function getCookie(name){
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
export function getXhr(){
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