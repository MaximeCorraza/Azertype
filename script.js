const motApplication = "Bonjour"
let motUtilisateur = prompt("Entrez le mot : " + motApplication)

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !")
        break;
    case "Putain":
        console.log("Surveillez vos paroles !")
    default:
        console.log("Vous avez fait une erreur !")
}