// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = ['Pas de panique !', 'Je suis la', 'Tu vas bien ?']

let score = 0

let choix = prompt("Choississez : Mots ou Phrases")
while (choix !== "Mots" && choix !== "Phrases"){
    choix = prompt("Choississez : Mots ou Phrases")
}

if (choix === "Mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
        console.log("Votre score est de " + score + " sur " + listeMots.length)
    }
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
