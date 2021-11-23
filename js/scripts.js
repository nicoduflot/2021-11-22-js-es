
//fonction de crétion de cookie
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