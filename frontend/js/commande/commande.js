let remerciements = document.getElementById("remerciements");
let commande = JSON.parse(localStorage.getItem("commande"));
let prenom = commande.prenom;
let orderId = commande.orderId;
remerciements.innerHTML = "Merci pour votre commande, <strong>" + prenom + "</strong> !<br/> Votre numéro de commande est le <br/><strong>" + orderId + "</strong>";
localStorage.removeItem("commande");
localStorage.removeItem("peluchesDansLePanier");