const listeMots = ['Bonjour', 'Salut', 'Hello']
const listePhrases = ['Je suis le boss', 'Je joue à la pétanque', 'Bien joué']


function afficherResultat(score, nbMotsProposes) {
    console.log('Votre score est de ' + score + ' sur ' + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    let choix = prompt('Voulez-vous jouer avec les mots (entrez "mots") ou les phrases (entrez "phrases"?')
    while (choix !== 'mots' && choix !== 'phrases') {
        choix = prompt('Vous devez choisir entre "mots" et "phrasess"')
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots
    let score = 0
    let nbMotsProposes = 0

    if (choix === 'mots') {
        lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}

lancerJeu()