function aumenta() {
    let x = parseInt (document.forms["contatore"]["numero"].value);
    x = x + 1;
    document.forms["contatore"]["numero"].value = x;
}

function diminuisce() {
    let x = parseInt (document.forms["contatore"]["numero"].value);
    x = x - 1;
    document.forms["contatore"]["numero"].value = x;
    
}