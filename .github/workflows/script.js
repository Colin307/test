let panier = [];

function ajouterAuPanier(nom, prix) {
    panier.push({ nom, prix });
    afficherPanier();
}

function afficherPanier() {
    const panierItems = document.getElementById('panier-items');
    const panierTotal = document.getElementById('panier-total');
    const panierCount = document.getElementById('panier-count');

    panierItems.innerHTML = '';
    let total = 0;

    panier.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nom} - ${item.prix}€`;
        panierItems.appendChild(li);
        total += item.prix;
    });

    panierTotal.textContent = total.toFixed(2);
    panierCount.textContent = panier.length;
}