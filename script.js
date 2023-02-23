
// Date à laquelle le décompte doit se terminer
var countDownDate = new Date("March 7, 2023 14:00:00").getTime();

// Mise à jour du décompte toutes les 1 secondes
const x = setInterval(function() {

// Obtenez la date et l'heure actuelles
const now = new Date().getTime();

// Trouvez la distance entre maintenant et la date de fin
const distance = countDownDate - now;

// Calcul des jours, heures, minutes et secondes
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Affichage du résultat dans l'élément avec l'ID "countdown"
document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
+ minutes + "m " ;

// Si le compte à rebours se termine, affichez "Expiré"
if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "Expiré";
}
}, 1000);
