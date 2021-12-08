var passord = "123";
var mulighet = 4;
while (mulighet>0) {
    var mesaj = prompt ("Skriv ditt passord");
    mulighet--;
    if (mulighet == 0) break;
    if (mesaj == passord) {
        document.write("Velkommen");
        break;

    }
    else {
        alert("Du har " + mulighet + " igjen");
    }
    
}
if (mulighet == 0) {
    document.write("DU KAN IKKE INNGÅ UTEN TILLATELSE");

}


// Koden til Serdar
