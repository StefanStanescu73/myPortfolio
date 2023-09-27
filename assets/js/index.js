function updateYear() {
    let curentYear = new Date().getFullYear();
    document.getElementById("footerText").innerHTML = `&copy; ${curentYear} Ștefan Cristian Stănescu - All rights reserved`;
}

updateYear();