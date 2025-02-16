// Tableau des produits //
let produits = [];

// Fonction pour ajouter un produit
function ajouterProduit(id, nom, prix, quantite) {
    if (produits.some(p => p.id === id)) {
        console.log("L'ID existe déjà !");
        return;
    }
    produits.push({ id, nom, prix, quantite });
}

// Fonction pour supprimer un produit //
function supprimerProduit(id) {
    produits = produits.filter(p => p.id !== id);
}

// Fonction pour mettre à jour la quantité //
function mettreAJourQuantite(id, nouvelleQuantite) {
    let produit = produits.find(p => p.id === id);
    if (produit) {
        if (nouvelleQuantite === 0) {
            supprimerProduit(id);
        } else {
            produit.quantite = nouvelleQuantite;
        }
    }
}

// Fonction pour calculer la valeur totale du stock //
function calculerTotal() {
    return produits.reduce((total, p) => total + p.prix * p.quantite, 0);
}

// Fonction pour trier les produits par prix  //
function TrieProduitsParPrix() {
    return [...produits].sort((a, b) => a.prix - b.prix);
}

// Fonction pour trouver un produit par son nom
function trouverProduit(nom) {
    return produits.find(p => p.nom.toLowerCase() === nom.toLowerCase()) || "Produit non trouvé";
}

// Fonction pour obtenir les produits en rupture de stock    //
function produitsEnRuptureDeStock() {
    return produits.filter(p => p.quantite <= 3);
}

// Fonction pour appliquer une remise sur tous les produits    //
function appliquerRemise(pourcentage) {
    produits.forEach(p => p.prix -= p.prix * (pourcentage / 100));
}

// Fonction pour générer un rapport du stock     //
function genererRapport() {
    console.log("Résumé du stock :");
    console.table(produits);
    console.log("Valeur totale du stock :", calculerTotal());
    console.log("Produits en rupture de stock :", produitsEnRuptureDeStock());
}

// Ajout de produits   //
ajouterProduit(1, "Pomme", 2, 10);
ajouterProduit(2, "Banane", 1.5, 5);
ajouterProduit(3, "Orange", 3, 2);

// Exécution  et affichage des résultats    //
console.log("Total du stock :", calculerTotal());
console.log("Produits triés par prix :", TrieProduitsParPrix());
console.log("Recherche de 'Pomme' :", trouverProduit("Pomme"));
console.log("Produits en rupture de stock :", produitsEnRuptureDeStock());
appliquerRemise(10);
genererRapport();
