/************************/
       /*VARIABLES*/
/************************/

var achatVoitureMessage;
var option; 

/*variables options*/
var optionAjout;
var optionSupp;
var packSport = true;
var packMuzik = true;
var moteur;

/*variables prix*/
var optionPrix = 4000;
var couleurPrix = 1000;
var packPrix = 10000;
var voiturePrix = 40000;
var prixTotal;


/************************/
       /*FUNCTIONS*/
/************************/

function actionsFonctions (achatVoiture, optionAjout, option, optionSupp, prixTotal, voiturePrix, optionPrix){
	var achatVoitureMessage = prompt("Bonjour ! Voulez-vous acheter une voiture ? oui => 'true', non => 'false'");
	if(achatVoitureMessage = true);
		alert("Bienvenue chez Tesla!" + "Cette voiture est au prix de" + voiturePrix);
		var optionAjout = prompt("Voulez-vous ajouter ou supprimer une option ? oui => 'oui', non => 'non'");{

	
		if(optionAjout == 'oui'){
			alert("Vous allez pouvoir choisir une option.")
			var option = prompt("Choisissez une option: couleur =>'couleur',packSport => 'pack sport', packMuzik => 'pack muzik', moteur =>'moteur'");
			prixTotal = voiturePrix + optionPrix;
		}
		
		else if(optionAjout == 'non'){
			alert("Vous allez supprimez une option.");
			prixTotal = voiturePrix - optionPrix;

		}
		
		else{
			alert('Vous ne voulez pas d\'options.');
		}
	}

	
	else {
		alert("A bientôt");
		break;
	}
	return prixTotal;
}


/************************/
       /*FUNCTIONS*/
/************************/

function options (optionAjout, option, moteur, prixTotal, voiturePrix, couleurPrix){
	if (optionAjout == 'oui'){
		if(option == 'couleur')
			alert("Nous avons 3 couleurs possibles");
			var choixCouleur = prompt("quelle couleur voulez-vous?");
			if(choixCouleur == "blue"){
				alert("Voici votre voiture bleue");
				prixTotal = voiturePrix + couleurPrix;

			}
			else if(choixCouleur == "red"){
				alert("Voici votre voiture rouge");
				prixTotal = voiturePrix + couleurPrix;
			}
			else if(choixCouleur == "black"){
				alert("Voici votre voiture noire");
				prixTotal = voiturePrix + couleurPrix;
			}
			else{
				alert("Nous n'avons pas de voiture de cette couleur, désolés");
			}
		}
		else if(option == 'packSport'){
			alert("Très bon choix!");
			prixTotal = voiturePrix + packPrix;
		} 
		else if(option == 'moteur'){
			alert("Vous allez choisir votre moteur");
			var moteur = prompt("Quel moteur voulez-vous : '120ch'/ '140ch', '220ch'?");

			if(moteur == '120ch'){
				alert("Votre voiture sera puissante");
				prixTotal = voiturePrix + packPrix;
			}
			else if(moteur == '140ch'){
				alert("Votre voiture sera très puissante");
				prixTotal = voiturePrix + packPrix;
			}
			else if(moteur == '220ch'){
				alert("Votre voiture sera méga puissante");
				prixTotal = voiturePrix + packPrix;
			}
			else {
				alert("Nous recherchons les disponibilités.");
			}
		}
	

	return prixTotal;
}

/************************/
       /*ACTIONS*/
/************************/

do{
	choixAction = prompt('voulez-vous: Acheter => "acheter", Ajouter une option => "ajouter", Supprimer une option => "supprimer", Sortir => "sortir"?');
	switch(choixAction){
		/*Choix "acheter voiture"*/
		case 'acheter':
			solde = actionsFonctions(achatVoiture, optionAjout, option, optionSupp, prixTotal, voiturePrix, optionPrix);
			break;

		/*Choix "ajout option"*/
		case 'ajouter':
			solde = options(optionAjout, option, moteur, prixTotal, voiturePrix, couleurPrix);
			break;
		/*Choix "supprimer option"*/
		case 'supprimer':
			solde = options(optionAjout, option, moteur, prixTotal, voiturePrix, couleurPrix)

		/*Choix sortir*/
		case 'sortir':
			alert('Merci de votre visite et à bientôt !');
			break;

		default:
			alert('Seuls choix possibles: => Acheter => "acheter", Ajouter une option => "ajouter", Supprimer une option => "supprimer", Sortir => "sortir"');
			break;
	}
} while ((optionSupp != false) && (choixAction !='sortir'));