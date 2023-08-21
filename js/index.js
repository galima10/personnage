// Texte selon les classes

var Slider1 = 0
var ClickDroite = 0
var ChoisirClasseAvatarC1 = 0
var ChoisirClasseAvatarC2 = 0
var ClickDroite2 = 0
var ClickDroite3 = 0
var ClickDroite4 = 0

function random(nb1, nb2){
    return Math.floor(Math.random() * (nb2 - nb1 + 1)) + nb1
}

// classePerso = {
//     guerrier: {
//         compAct1: "texte de description",
//         compPass1: "texte de description", 
//     },
//     voleur: {
//         compAct1: "texte de description",
//         compPass1: "texte de description", 
//     },
// };


classePerso = [
    [
        "guerrier",//nom de la classe
        ["texte de", "fsjfhdsjdifhzij"], // comp. act. 1
        "texte de description", 
        ["armure de feu", "sharpness", "fire aspect", "silk touch", "solidité"] // nom compétence passive 2
    ],
    [
        "mage",//nom de la classe
        ["AAAAAA", "BBBBBBBB"], // comp. act. 1
        "coucou",
        ["NULL", "MAUVAIS", "A CHIER", "BOF", "HEHHEEHA"], 
    ]
];


classActuel = 0
compPass2 = 0

function updateText(type) {
    if (type == "classe") {
        document.querySelector(".DescC4").textContent = classePerso[classActuel][1][0];
        i = 0;
        document.querySelectorAll("#comp-pass-2-slider > .slider > div > div").forEach(element => {
            element.textContent = classePerso[classActuel][3][i];
            i++;
        })
    }
    else if (type == "compPass2") {
        document.querySelector(".DescC4").textContent = classePerso[classActuel][1][compPass2]
    }


    else if (type == "random") {

    }
    
}

updateText("classe");

document.querySelectorAll(".slider-container").forEach(element => {
    //slide suivante
    element.querySelector(".slider").style.transform = "translateX(-0px)";
    element.querySelector(".fleche-droite").addEventListener("click", () => {
        if (element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p")) > -1 * element.querySelector(".slider").getBoundingClientRect().width + element.querySelector(".slider > div").getBoundingClientRect().width)  {

            
            element.querySelector(".slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p"))) - parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width)) + "px)"

            if (element.id == "classe-slider") {
                classActuel++;
                updateText("classe");
                compPass2 = 0
            }

            if (element.id == "comp-pass-2-slider") {
                compPass2++;
                updateText("compPass2");
            }
            
        }
    });

    element.querySelector(".fleche-gauche").addEventListener("click", () => {
        if (element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p")) < 0) {

            

            element.querySelector(".slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p"))) + parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width)) + "px)";

            if (element.id == "classe-slider") {
                classActuel--;
                updateText("classe");
                compPass2 = 0
            }

            if (element.id == "comp-pass-2-slider") {
                compPass2--;
                updateText("compPass2");
            }

            
        }
    })
    
    element.querySelector(".random-slider").addEventListener("click", () => {
        var randomNb = random(0, element.querySelector(".slider").childElementCount -1);
        element.querySelector(".slider").style.transform = "translateX(" + parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width * -randomNb) + "px)";

        if (element.id == "classe-slider") {
            classActuel = randomNb;
            updateText("classe");
        }

        if (element.id == "comp-pass-2-slider") {
            compPass2 = randomNb;
            updateText("compPass2");
        }

    })
})





// function ChoisirClasse(){
//     if (Slider1==0){
//         document.querySelector(".TexteSlide1").innerHTML="None";
//     }
// }
// ChoisirClasse();

// // Noms des capacités

// function classe(){
//     if (Slider1==1){
//         document.querySelector(".CA1").innerHTML="Frappe puissante";
//         document.querySelector(".CA2").innerHTML="Coup tournoyant";
//         document.querySelector(".CA3").innerHTML="Cri de guerre";
//         document.querySelector(".CA4").innerHTML="Parry";
//         document.querySelector(".CA5").innerHTML="Charge féroce";
//         document.querySelector(".CA6").innerHTML="Saut d'écrasement";
//         document.querySelector(".CA7").innerHTML="Taunt";
//         document.querySelector(".CA8").innerHTML="Tourbillon de lame";
//         document.querySelector(".CA9").innerHTML="Brise-armure";
//         document.querySelector(".CA10").innerHTML="Cri de colère";

//         document.querySelector(".CP1").innerHTML="Endurance renforcée";
//         document.querySelector(".CP2").innerHTML="Maîtrise des armes";
//         document.querySelector(".CP3").innerHTML="Résistance aux étourdissements";
//         document.querySelector(".CP4").innerHTML="Réflexes aiguisés";
//         document.querySelector(".CP5").innerHTML="Détermination";
//         document.querySelector(".CP6").innerHTML="Colosse";
//         document.querySelector(".CP7").innerHTML="Ferveur de combat";
//         document.querySelector(".CP8").innerHTML="Coup critique";
//         document.querySelector(".CP9").innerHTML="Instinct de survie";
//         document.querySelector(".CP10").innerHTML="Aura inspirante"; 

//         document.querySelector(".E1").innerHTML="Écrasement de la horde gobeline";
//         document.querySelector(".E2").innerHTML="Triomphe contre le géant des montagnes";
//         document.querySelector(".E3").innerHTML="Défense héroïque de la cité assiégée";
//         document.querySelector(".E4").innerHTML="Champion du tournoi des rois";
//         document.querySelector(".E5").innerHTML="Sauvetage du prince captif";
        
//     } else if (Slider1==2){
//         document.querySelector(".CA1").innerHTML="Boule de feu";
//         document.querySelector(".CA2").innerHTML="Éclair de foudre";
//         document.querySelector(".CA3").innerHTML="Rayon glacial";
//         document.querySelector(".CA4").innerHTML="Téléportation";
//         document.querySelector(".CA5").innerHTML="Barrière d'énergie";
//         document.querySelector(".CA6").innerHTML="Nova arcanique";
//         document.querySelector(".CA7").innerHTML="Illusion duperie";
//         document.querySelector(".CA8").innerHTML="Métamorphose";
//         document.querySelector(".CA9").innerHTML="Soins spirituels";
//         document.querySelector(".CA10").innerHTML="Contrôle mental";

//         document.querySelector(".CP1").innerHTML="Affinité élémentaire";
//         document.querySelector(".CP2").innerHTML="Étude arcanique";
//         document.querySelector(".CP3").innerHTML="Résistance magique";
//         document.querySelector(".CP4").innerHTML="Maîtrise des runes";
//         document.querySelector(".CP5").innerHTML="Concentration profonde";
//         document.querySelector(".CP6").innerHTML="Vision astrale";
//         document.querySelector(".CP7").innerHTML="Canalisation stable";
//         document.querySelector(".CP8").innerHTML="Clairvoyance";
//         document.querySelector(".CP9").innerHTML="Résonance magique";
//         document.querySelector(".CP10").innerHTML="Essence volatile";

//         document.querySelector(".E1").innerHTML="Dompteur des éléments";
//         document.querySelector(".E2").innerHTML="Défaite du sorcier noir";
//         document.querySelector(".E3").innerHTML="Libérateur de la relique ancienne";
//         document.querySelector(".E4").innerHTML="Érudit de la connaissance interdite";
//         document.querySelector(".E5").innerHTML="Voyageur des dimensions";

//     } else if (Slider1==3){
//         document.querySelector(".CA1").innerHTML="Attaque sournoise";
//         document.querySelector(".CA2").innerHTML="Furtivité";
//         document.querySelector(".CA3").innerHTML="Vol à la tire";
//         document.querySelector(".CA4").innerHTML="Piège dissimulé";
//         document.querySelector(".CA5").innerHTML="Disparition rapide";
//         document.querySelector(".CA6").innerHTML="Poison mortel";
//         document.querySelector(".CA7").innerHTML="Crochetage";
//         document.querySelector(".CA8").innerHTML="Esquive acrobatique";
//         document.querySelector(".CA9").innerHTML="Assassinat silencieux";
//         document.querySelector(".CA10").innerHTML="Distraction rusée";

//         document.querySelector(".CP1").innerHTML="Agilité innée";
//         document.querySelector(".CP2").innerHTML="Maître du camouflage";
//         document.querySelector(".CP3").innerHTML="Chance du voleur";
//         document.querySelector(".CP4").innerHTML="Détecteur de pièges";
//         document.querySelector(".CP5").innerHTML="Volonté inébranlable";
//         document.querySelector(".CP6").innerHTML="Contre-attaque";
//         document.querySelector(".CP7").innerHTML="Agilité destructrice";
//         document.querySelector(".CP8").innerHTML="Synchronisation des sens";
//         document.querySelector(".CP9").innerHTML="Mouvements fluides";
//         document.querySelector(".CP10").innerHTML="Aura d'opportunisme";

//         document.querySelector(".E1").innerHTML="Maître de l'ombre";
//         document.querySelector(".E2").innerHTML="Le cambrioleur légendaire";
//         document.querySelector(".E3").innerHTML="Artisan des poisons";
//         document.querySelector(".E4").innerHTML="Le maître des serrures";
//         document.querySelector(".E5").innerHTML="Ombre de la nuit";

//     } else if (Slider1==4){
//         document.querySelector(".CA1").innerHTML="Tir précis";
//         document.querySelector(".CA2").innerHTML="Flèche perforante";
//         document.querySelector(".CA3").innerHTML="Salve rapide";
//         document.querySelector(".CA4").innerHTML="Flèche enflammée";
//         document.querySelector(".CA5").innerHTML="Tir à l'aveugle";
//         document.querySelector(".CA6").innerHTML="Flèche empoisonnée";
//         document.querySelector(".CA7").innerHTML="Tir de dispersion";
//         document.querySelector(".CA8").innerHTML="Précision meurtrière";
//         document.querySelector(".CA9").innerHTML="Tir d'étourdissement";
//         document.querySelector(".CA10").innerHTML="Tir à longue portée";

//         document.querySelector(".CP1").innerHTML="Œil d'aigle";
//         document.querySelector(".CP2").innerHTML="Flèches variées";
//         document.querySelector(".CP3").innerHTML="Concentration du tireur";
//         document.querySelector(".CP4").innerHTML="Vitesse de rechargement";
//         document.querySelector(".CP5").innerHTML="Flèches acérées";
//         document.querySelector(".CP6").innerHTML="Observation constante";
//         document.querySelector(".CP7").innerHTML="Instinct de visée";
//         document.querySelector(".CP8").innerHTML="Enchaînement rapide";
//         document.querySelector(".CP9").innerHTML="Flexibilité du tir";
//         document.querySelector(".CP10").innerHTML="Finesse du tireur";

//         document.querySelector(".E1").innerHTML="Tireur d'élite";
//         document.querySelector(".E2").innerHTML="Le dernier tir parfait";
//         document.querySelector(".E3").innerHTML="Chasseur de monstres";
//         document.querySelector(".E4").innerHTML="Tireur en mouvement";
//         document.querySelector(".E5").innerHTML="Survivant des embuscades";
        
        
//     } else if (Slider1==5){
//         document.querySelector(".CA1").innerHTML="Appel des morts";
//         document.querySelector(".CA2").innerHTML="Main de l'ombre";
//         document.querySelector(".CA3").innerHTML="Malédiction funeste";
//         document.querySelector(".CA4").innerHTML="Siphon de vie";
//         document.querySelector(".CA5").innerHTML="Éruption morbide";
//         document.querySelector(".CA6").innerHTML="Invocation spectrale";
//         document.querySelector(".CA7").innerHTML="Marque de la mort";
//         document.querySelector(".CA8").innerHTML="Contrôle des âmes";
//         document.querySelector(".CA9").innerHTML="Tempête de corruption";
//         document.querySelector(".CA10").innerHTML="Transfusion macabre";

//         document.querySelector(".CP1").innerHTML="Maître des morts-vivants";
//         document.querySelector(".CP2").innerHTML="Aura nécrotique";
//         document.querySelector(".CP3").innerHTML="Affinité pour la mort";
//         document.querySelector(".CP4").innerHTML="Résistance à la corruption";
//         document.querySelector(".CP5").innerHTML="Transmutation vitale";
//         document.querySelector(".CP6").innerHTML="Aura effrayante";
//         document.querySelector(".CP7").innerHTML="Envoûtement persistant";
//         document.querySelector(".CP8").innerHTML="Drain de vitalité";
//         document.querySelector(".CP9").innerHTML="Subjugation des âmes";
//         document.querySelector(".CP10").innerHTML="Appel des ténèbres";

//         document.querySelector(".E1").innerHTML="Dominateur des morts-vivants";
//         document.querySelector(".E2").innerHTML="Triomphe contre le chevalier déchu";
//         document.querySelector(".E3").innerHTML="Récupération de l'artefact maudit";
//         document.querySelector(".E4").innerHTML="Explorateur des tombes anciennes";
//         document.querySelector(".E5").innerHTML="Conquérant des barrières de la vie et de la mort ";
        
        
//     } else if (Slider1==6){
//         document.querySelector(".CA1").innerHTML="Soin curatif";
//         document.querySelector(".CA2").innerHTML="Lumière purificatrice";
//         document.querySelector(".CA3").innerHTML="Bénédiction de protection";
//         document.querySelector(".CA4").innerHTML="Exorcisme";
//         document.querySelector(".CA5").innerHTML="Résurrection";
//         document.querySelector(".CA6").innerHTML="Prière d'inspiration";
//         document.querySelector(".CA7").innerHTML="Canalisation de l'énergie";
//         document.querySelector(".CA8").innerHTML="Soin de groupe";
//         document.querySelector(".CA9").innerHTML="Aura divine";
//         document.querySelector(".CA10").innerHTML="Absolution";

//         document.querySelector(".CP1").innerHTML="Ferveur spirituelle";
//         document.querySelector(".CP2").innerHTML="Aura sacrée";
//         document.querySelector(".CP3").innerHTML="Dévotion absolue";
//         document.querySelector(".CP4").innerHTML="Résistance divine";
//         document.querySelector(".CP5").innerHTML="Foi inébranlable";
//         document.querySelector(".CP6").innerHTML="Puissance bénie";
//         document.querySelector(".CP7").innerHTML="Lien spirituel";
//         document.querySelector(".CP8").innerHTML="Charité divine";
//         document.querySelector(".CP9").innerHTML="Clarté spirituelle";
//         document.querySelector(".CP10").innerHTML="Bénédiction de résistance";

//         document.querySelector(".E1").innerHTML="Guérisseur de bataille";
//         document.querySelector(".E2").innerHTML="Exorcisme de la créature maléfique";
//         document.querySelector(".E3").innerHTML="Bénédictions des éléments sacrés";
//         document.querySelector(".E4").innerHTML="Guide spirituel des réfugiés";
//         document.querySelector(".E5").innerHTML="Rétablissement de la source divine";
        
        
//     } else if (Slider1==7){
//         document.querySelector(".CA1").innerHTML="Tir rapide";
//         document.querySelector(".CA2").innerHTML="Lancer de lasso";
//         document.querySelector(".CA3").innerHTML="Duel à l'ancienne";
//         document.querySelector(".CA4").innerHTML="Tir à longue portée";
//         document.querySelector(".CA5").innerHTML="Coup de pied du cheval";
//         document.querySelector(".CA6").innerHTML="Coup de poing du colt";
//         document.querySelector(".CA7").innerHTML="Dynamitage";
//         document.querySelector(".CA8").innerHTML="Flair pour le danger";
//         document.querySelector(".CA9").innerHTML="Rechargement rapide";
//         document.querySelector(".CA10").innerHTML="Salve de tirs";

//         document.querySelector(".CP1").innerHTML="Visée précise";
//         document.querySelector(".CP2").innerHTML="Rapidité du tireur";
//         document.querySelector(".CP3").innerHTML="Résistance à la pression";
//         document.querySelector(".CP4").innerHTML="Instinct du désert";
//         document.querySelector(".CP5").innerHTML="Coordination homme-cheval";
//         document.querySelector(".CP6").innerHTML="Dur à cuire";
//         document.querySelector(".CP7").innerHTML="Coup critique du pistolet";
//         document.querySelector(".CP8").innerHTML="Sens des pièges";
//         document.querySelector(".CP9").innerHTML="Évasion acrobatique";
//         document.querySelector(".CP10").innerHTML="Inspiration cow-boy";

//         document.querySelector(".E1").innerHTML="Dompteur de bêtes sauvages";
//         document.querySelector(".E2").innerHTML="Triomphe contre les hors-la-loi";
//         document.querySelector(".E3").innerHTML="Sauveur de la ville en péril";
//         document.querySelector(".E4").innerHTML="Champion du rodéo";
//         document.querySelector(".E5").innerHTML="Évasion audacieuse";
        
        
//     } else if (Slider1==8){
//         document.querySelector(".CA1").innerHTML="Projectile magique";
//         document.querySelector(".CA2").innerHTML="Bouclier arcanique";
//         document.querySelector(".CA3").innerHTML="Invocation élémentaire";
//         document.querySelector(".CA4").innerHTML="Rayon de glace";
//         document.querySelector(".CA5").innerHTML="Métamorphose";
//         document.querySelector(".CA6").innerHTML="Téléportation";
//         document.querySelector(".CA7").innerHTML="Flamme infernale";
//         document.querySelector(".CA8").innerHTML="Maléfice";
//         document.querySelector(".CA9").innerHTML="Éclair déchaîné";
//         document.querySelector(".CA10").innerHTML="Nova astrale";

//         document.querySelector(".CP1").innerHTML="Affinité élémentaire";
//         document.querySelector(".CP2").innerHTML="Canalisation stable";
//         document.querySelector(".CP3").innerHTML="Énergie magique renforcée";
//         document.querySelector(".CP4").innerHTML="Focalisation mentale";
//         document.querySelector(".CP5").innerHTML="Maîtrise des runes";
//         document.querySelector(".CP6").innerHTML="Résonance mystique";
//         document.querySelector(".CP7").innerHTML="Vision arcanique";
//         document.querySelector(".CP8").innerHTML="Essence éthérée";
//         document.querySelector(".CP9").innerHTML="Instinct magique";
//         document.querySelector(".CP10").innerHTML="Aura enchantée";

//         document.querySelector(".E1").innerHTML="Domination des éclats élémentaires";
//         document.querySelector(".E2").innerHTML="Victoire contre le seigneur des ombres";
//         document.querySelector(".E3").innerHTML="Connaissance des archives arcaniques";
//         document.querySelector(".E4").innerHTML="Sculpteur de réalités";
//         document.querySelector(".E5").innerHTML="Explorateur des dimensions interdites";
        
        
//     }
// }
// classe();


// // Description des capacités

// var Slider2 = 1

// function Desc1(){
//     if (Slider1==1 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Frappe puissante : Inflige des dégâts accrus à un ennemi ciblé.";
//     } else if (Slider1==1 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Coup tournoyant : Effectue une attaque circulaire, touchant plusieurs ennemis à la fois.";

//     } else if (Slider1==1 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Cri de guerre : Augmente temporairement la force et la vitesse d'attaque de l'utilisateur et de ses alliés proches.";
        
//     } else if (Slider1==1 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Parry : Bloque et contre-attaque automatiquement une attaque ennemie.";
        
//     } else if (Slider1==1 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Charge féroce : Se précipite vers un ennemi pour lui infliger des dégâts et le désorienter.";
        
//     }


//     else if (Slider1==2 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Boule de feu : Lance un projectile de feu sur un ennemi, infligeant des dégâts de feu.";
        
//     } else if (Slider1==2 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Éclair de foudre : Lance un éclair électrique sur un ennemi, infligeant des dégâts de foudre et potentiellement paralysant.";

//     } else if (Slider1==2 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Rayon glacial : Tire un rayon de froid intense sur un ennemi, infligeant des dégâts de glace et ralentissant les mouvements.";
        
//     } else if (Slider1==2 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Téléportation : Se déplace instantanément vers un emplacement ciblé.";
        
//     } else if (Slider1==2 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Barrière d'énergie : Crée un bouclier magique pour absorber les dégâts pendant un certain temps.";
        
//     }


//     else if (Slider1==3 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Attaque sournoise : Inflige des dégâts accrus à un ennemi en profitant de ses points faibles.";
        
//     } else if (Slider1==3 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Furtivité : Devient invisible aux yeux des ennemis, permettant de se déplacer sans être détecté pendant un certain temps.";

//     } else if (Slider1==3 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Vol à la tire : Dérobe un objet ou de l'argent à un ennemi ou à un PNJ sans être remarqué.";
        
//     } else if (Slider1==3 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Piège dissimulé : Place un piège invisible qui se déclenche lorsque les ennemis passent à proximité, les immobilisant ou leur infligeant des dégâts.";
        
//     } else if (Slider1==3 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Disparition rapide : Se déplace instantanément sur une courte distance pour échapper aux dangers ou se positionner stratégiquement.";
        
//     }


//     else if (Slider1==4 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Tir précis : Tire une flèche avec une grande précision, infligeant des dégâts accrus à un ennemi ciblé.";
        
//     } else if (Slider1==4 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Flèche perforante : Tire une flèche qui traverse plusieurs ennemis en ligne droite, infligeant des dégâts à chacun.";

//     } else if (Slider1==4 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Salve rapide : Tire plusieurs flèches en succession rapide sur un groupe d'ennemis.";
        
//     } else if (Slider1==4 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Flèche enflammée : Enflamme une flèche avant de la tirer, infligeant des dégâts de feu à l'ennemi touché.";
        
//     } else if (Slider1==4 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Tir à l'aveugle : Tire une flèche en direction d'un ennemi hors de vue, basé sur une estimation.";
        
//     }


//     else if (Slider1==5 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Appel des morts : Fait surgir des squelettes ou des zombies pour combattre aux côtés du nécromancien.";
        
//     } else if (Slider1==5 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Main de l'ombre : Projette une main spectral qui inflige des dégâts à distance et peut drainer la vie de l'ennemi touché.";

//     } else if (Slider1==5 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Malédiction funeste : Jette une malédiction sur un ennemi, lui infligeant des dégâts sur la durée et affaiblissant ses capacités.";
        
//     } else if (Slider1==5 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Siphon de vie : Absorbe la vie des ennemis proches pour restaurer la santé du nécromancien.";
        
//     } else if (Slider1==5 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Éruption morbide : Crée une explosion d'énergie nécrotique qui inflige des dégâts aux ennemis autour du nécromancien.";
        
//     }


//     else if (Slider1==6 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Soin curatif : Restaure les points de vie d'un allié blessé.";
        
//     } else if (Slider1==6 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Lumière purificatrice : Invoque une lumière sacrée qui soigne tous les alliés dans la zone.";

//     } else if (Slider1==6 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Bénédiction de protection : Protège un allié en réduisant les dégâts qu'il subit pendant un temps limité.";
        
//     } else if (Slider1==6 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Exorcisme : Inflige des dégâts à un ennemi des forces obscures ou non-mortes.";
        
//     } else if (Slider1==6 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Résurrection : Ramène un allié mort à la vie avec une partie de ses points de vie.";
        
//     }


//     else if (Slider1==7 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Tir rapide : Effectue une série de tirs rapides sur un ennemi.";
        
//     } else if (Slider1==7 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Lancer de lasso : Lance un lasso pour attraper et immobiliser un ennemi à distance.";

//     } else if (Slider1==7 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Duel à l'ancienne : Défie un ennemi en un duel, où la précision et la vitesse du cowboy sont mises à l'épreuve.";
        
//     } else if (Slider1==7 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Tir à longue portée : Prend le temps de viser et de tirer avec précision sur un ennemi éloigné.";
        
//     } else if (Slider1==7 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Coup de pied du cheval : Fait charger son cheval pour infliger des dégâts et étourdir les ennemis touchés.";
        
//     }


//     else if (Slider1==8 && Slider2==1){
//         document.querySelector(".DescC1").innerHTML="Projectile magique : Tire un projectile énergétique sur un ennemi.";
        
//     } else if (Slider1==8 && Slider2==2){
//         document.querySelector(".DescC1").innerHTML="Bouclier arcanique : Crée un bouclier magique pour se protéger contre les attaques ennemies.";

//     } else if (Slider1==8 && Slider2==3){
//         document.querySelector(".DescC1").innerHTML="Invocation élémentaire : Invoque une créature élémentaire (feu, eau, air, terre) pour combattre aux côtés du sorcier.";
        
//     } else if (Slider1==8 && Slider2==4){
//         document.querySelector(".DescC1").innerHTML="Rayon de glace : Tire un rayon de glace sur un ennemi, infligeant des dégâts et ralentissant ses mouvements.";
        
//     } else if (Slider1==8 && Slider2==5){
//         document.querySelector(".DescC1").innerHTML="Métamorphose : Transforme temporairement un ennemi en une créature inoffensive.";
        
//     }
// }
// Desc1();



// var Slider4 = 1

// function Desc2(){
//     if (Slider1==1 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Saut d'écrasement : Saute en l'air pour atterrir violemment, infligeant des dégâts et étourdissant les ennemis touchés.";
//     } else if (Slider1==1 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Taunt : Attire l'attention des ennemis pour les forcer à attaquer le guerrier plutôt que ses alliés.";

//     } else if (Slider1==1 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Tourbillon de lame : Tournoie avec une grande vitesse, infligeant des dégâts aux ennemis autour du guerrier.";
        
//     } else if (Slider1==1 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Brise-armure : Effectue une attaque précise visant à réduire la résistance à la défense de l'ennemi.";
        
//     } else if (Slider1==1 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Cri de colère : Entraîne une augmentation temporaire des dégâts infligés par le guerrier et une réduction de la défense de l'ennemi.";
        
//     }


//     else if (Slider1==2 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Nova arcanique : Libère une explosion d'énergie magique autour du mage, infligeant des dégâts aux ennemis à proximité.";
        
//     } else if (Slider1==2 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Illusion duperie : Crée une illusion pour détourner l'attention des ennemis et se rendre temporairement invisible.";

//     } else if (Slider1==2 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Métamorphose : Transforme un ennemi en une créature inoffensive pendant un court laps de temps.";
        
//     } else if (Slider1==2 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Soins spirituels : Utilise la magie pour guérir les blessures et restaurer les points de vie du mage ou d'un allié.";
        
//     } else if (Slider1==2 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Contrôle mental : Prend brièvement le contrôle d'un ennemi pour qu'il agisse en faveur du mage.";
        
//     }


//     else if (Slider1==3 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Poison mortel : Enduit ses armes de poison, infligeant des dégâts supplémentaires et causant un affaiblissement à l'ennemi touché.";
        
//     } else if (Slider1==3 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Crochetage : Ouvre des serrures pour accéder à des portes verrouillées ou des coffres au trésor.";

//     } else if (Slider1==3 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Esquive acrobatique : Effectue une série de mouvements agiles pour éviter les attaques ennemies.";
        
//     } else if (Slider1==3 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Assassinat silencieux : Élimine silencieusement un ennemi en un coup mortel lorsque celui-ci est inconscient ou distrait.";
        
//     } else if (Slider1==3 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Distraction rusée : Crée une diversion pour détourner l'attention des ennemis et faciliter le passage en furtivité.";
        
//     }


//     else if (Slider1==4 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Flèche empoisonnée : Enduit une flèche de poison pour infliger des dégâts sur la durée à l'ennemi touché.";
        
//     } else if (Slider1==4 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Tir de dispersion : Tire une flèche qui se divise en plusieurs projectiles, touchant plusieurs cibles à la fois.";

//     } else if (Slider1==4 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Précision meurtrière : Prend un moment pour viser soigneusement, infligeant des dégâts massifs à un ennemi.";
        
//     } else if (Slider1==4 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Tir d'étourdissement : Tire une flèche qui assomme temporairement l'ennemi touché.";
        
//     } else if (Slider1==4 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Tir à longue portée : Tire une flèche à une distance extrême avec une précision étonnante.";
        
//     }


//     else if (Slider1==5 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Invocation spectrale : Invoque un esprit spectral pour combattre aux côtés du nécromancien et lui conférer des avantages temporaires.";
        
//     } else if (Slider1==5 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Marque de la mort : Marque un ennemi, augmentant les dégâts qu'il subit et permettant au nécromancien de drainer sa vie.";

//     } else if (Slider1==5 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Contrôle des âmes : Prend brièvement le contrôle d'un ennemi mort-vivant pour qu'il agisse en faveur du nécromancien.";
        
//     } else if (Slider1==5 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Tempête de corruption : Libère une tempête d'énergie sombre qui inflige des dégâts aux ennemis dans la zone.";
        
//     } else if (Slider1==5 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Transfusion macabre : Échange une partie de la santé du nécromancien contre des dégâts directs infligés à l'ennemi.";
        
//     }


//     else if (Slider1==6 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Prière d'inspiration : Augmente les statistiques des alliés proches pendant un certain temps.";
        
//     } else if (Slider1==6 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Canalisation de l'énergie : Concentre l'énergie divine pour infliger des dégâts aux ennemis et restaurer la santé des alliés.";

//     } else if (Slider1==6 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Soin de groupe : Soigne tous les alliés dans un rayon donné, répartissant le total de guérison entre eux.";
        
//     } else if (Slider1==6 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Aura divine : Crée une aura autour du prêtre qui guérit progressivement tous les alliés dans la zone.";
        
//     } else if (Slider1==6 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Absolution : Supprime les effets néfastes d'un allié et le protège contre de nouveaux effets pendant un court moment.";
        
//     }


//     else if (Slider1==7 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Coup de poing du colt : Assène un coup puissant avec la crosse de son arme pour étourdir l'ennemi.";
        
//     } else if (Slider1==7 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Dynamitage : Lance un bâton de dynamite pour infliger des dégâts massifs dans une zone.";

//     } else if (Slider1==7 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Flair pour le danger : Identifie les ennemis cachés dans une zone donnée.";
        
//     } else if (Slider1==7 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Rechargement rapide : Réduit le temps nécessaire pour recharger les armes à feu.";
        
//     } else if (Slider1==7 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Salve de tirs : Tire plusieurs coups de feu sur une zone ciblée pour toucher plusieurs ennemis.";
        
//     }


//     else if (Slider1==8 && Slider4==1){
//         document.querySelector(".DescC2").innerHTML="Téléportation : Se téléporte instantanément vers un endroit spécifié.";
        
//     } else if (Slider1==8 && Slider4==2){
//         document.querySelector(".DescC2").innerHTML="Flamme infernale : Crée une sphère de feu qui explose en infligeant des dégâts aux ennemis dans la zone.";

//     } else if (Slider1==8 && Slider4==3){
//         document.querySelector(".DescC2").innerHTML="Maléfice : Lance une malédiction sur un ennemi, l'affaiblissant ou l'empêchant d'utiliser certaines capacités.";
        
//     } else if (Slider1==8 && Slider4==4){
//         document.querySelector(".DescC2").innerHTML="Éclair déchaîné : Libère un puissant éclair sur un ennemi, infligeant des dégâts de foudre.";
        
//     } else if (Slider1==8 && Slider4==5){
//         document.querySelector(".DescC2").innerHTML="Nova astrale : Crée une explosion d'énergie magique qui blesse les ennemis dans la zone.";
        
//     }
// }
// Desc2();






// var Slider3 = 1

// function Desc3(){
//     if (Slider1==1 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Endurance renforcée : Augmente les points de vie maximum du guerrier.";
//     } else if (Slider1==1 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Maîtrise des armes : Améliore l'efficacité du guerrier dans l'utilisation de différentes armes.";

//     } else if (Slider1==1 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Résistance aux étourdissements : Diminue la durée des effets d'étourdissement subis par le guerrier.";
        
//     } else if (Slider1==1 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Réflexes aiguisés : Augmente la probabilité d'esquiver les attaques ennemies.";
        
//     } else if (Slider1==1 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Détermination : Réduit les délais de récupération entre les capacités actives du guerrier.";
        
//     }


//     else if (Slider1==2 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Affinité élémentaire : Augmente les dégâts infligés par les sorts du mage dans un élément spécifique (feu, glace, foudre, etc.).";
        
//     } else if (Slider1==2 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Étude arcanique : Augmente la vitesse d'apprentissage des sorts et réduit les coûts en ressources magiques.";

//     } else if (Slider1==2 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Résistance magique : Diminue les dégâts subis par les attaques magiques.";
        
//     } else if (Slider1==2 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Maîtrise des runes : Améliore l'efficacité des glyphes et des enchantements utilisés par le mage.";
        
//     } else if (Slider1==2 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Concentration profonde : Réduit les chances que les sorts du mage soient interrompus par des attaques ennemies.";
        
//     }


//     else if (Slider1==3 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Agilité innée : Augmente la vitesse de déplacement du voleur.";
        
//     } else if (Slider1==3 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Maître du camouflage : Diminue la distance à laquelle les ennemis peuvent repérer le voleur en furtivité.";

//     } else if (Slider1==3 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Chance du voleur : Augmente les chances de trouver des objets rares ou de grande valeur lors du vol à la tire ou de la fouille.";
        
//     } else if (Slider1==3 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Détecteur de pièges : Augmente la capacité du voleur à repérer les pièges dissimulés.";
        
//     } else if (Slider1==3 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Volonté inébranlable : Réduit la durée des effets de contrôle comme l'étourdissement ou l'immobilisation.";
        
//     }


//     else if (Slider1==4 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Œil d'aigle : Augmente la portée de tir de l'archer.";
        
//     } else if (Slider1==4 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Flèches variées : Augmente les dégâts infligés par des types spécifiques de flèches (enflammées, empoisonnées, etc.).";

//     } else if (Slider1==4 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Concentration du tireur : Réduit les perturbations causées par le mouvement lors du tir.";
        
//     } else if (Slider1==4 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Vitesse de rechargement : Accélère le temps nécessaire pour recharger un arc.";
        
//     } else if (Slider1==4 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Flèches acérées : Augmente les chances de réaliser des coups critiques avec les flèches.";
        
//     }


//     else if (Slider1==5 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Maître des morts-vivants : Améliore les compétences et la puissance des serviteurs invoqués par le nécromancien.";
        
//     } else if (Slider1==5 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Aura nécrotique : Les alliés proches du nécromancien bénéficient d'un léger regain de santé grâce à son aura nécrotique.";

//     } else if (Slider1==5 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Affinité pour la mort : Augmente les dégâts nécrotiques infligés par le nécromancien.";
        
//     } else if (Slider1==5 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Résistance à la corruption : Diminue les dégâts nécrotiques subis par le nécromancien.";
        
//     } else if (Slider1==5 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Transmutation vitale : Les sorts de soin du nécromancien sont plus efficaces sur les morts-vivants.";
        
//     }


//     else if (Slider1==6 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Ferveur spirituelle : Augmente l'efficacité des sorts de guérison du prêtre.";
        
//     } else if (Slider1==6 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Aura sacrée : Les alliés proches du prêtre bénéficient d'une régénération continue de santé.";

//     } else if (Slider1==6 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Dévotion absolue : Réduit le temps de recharge des capacités de guérison du prêtre.";
        
//     } else if (Slider1==6 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Résistance divine : Diminue les dégâts infligés par les sorts obscurs ou maléfiques au prêtre.";
        
//     } else if (Slider1==6 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Foi inébranlable : Réduit la durée des effets de contrôle (étourdissement, silence, etc.) subis par le prêtre.";
        
//     }


//     else if (Slider1==7 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Visée précise : Augmente la précision des tirs du cowboy.";
        
//     } else if (Slider1==7 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Rapidité du tireur : Améliore la vitesse de rechargement des armes à feu.";

//     } else if (Slider1==7 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Résistance à la pression : Réduit les effets de contrôle (étourdissement, immobilisation, etc.) subis par le cowboy.";
        
//     } else if (Slider1==7 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Instinct du désert : Augmente la vitesse de déplacement du cowboy dans des environnements extérieurs.";
        
//     } else if (Slider1==7 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Coordination homme-cheval : Améliore la maniabilité et la vitesse du cheval du cowboy.";
        
//     }


//     else if (Slider1==8 && Slider3==1){
//         document.querySelector(".DescC3").innerHTML="Affinité élémentaire : Améliore l'efficacité des sorts du sorcier dans un élément spécifique.";
        
//     } else if (Slider1==8 && Slider3==2){
//         document.querySelector(".DescC3").innerHTML="Canalisation stable : Réduit le temps de récupération entre les sorts du sorcier.";

//     } else if (Slider1==8 && Slider3==3){
//         document.querySelector(".DescC3").innerHTML="Énergie magique renforcée : Augmente la quantité de ressources magiques disponibles pour le sorcier.";
        
//     } else if (Slider1==8 && Slider3==4){
//         document.querySelector(".DescC3").innerHTML="Focalisation mentale : Diminue les chances que les sorts du sorcier soient interrompus par des attaques ennemies.";
        
//     } else if (Slider1==8 && Slider3==5){
//         document.querySelector(".DescC3").innerHTML="Maîtrise des runes : Améliore l'efficacité des glyphes et des enchantements utilisés par le sorcier.";
        
//     }
// }
// Desc3();




// var Slider5 = 1

// function Desc4(){
//     if (Slider1==1 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Colosse : Augmente la taille et la résistance du guerrier, le rendant plus difficile à abattre.";
//     } else if (Slider1==1 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Ferveur de combat : À chaque ennemi vaincu, le guerrier gagne temporairement des bonus de force et de vitesse d'attaque.";

//     } else if (Slider1==1 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Coup critique : Augmente les chances du guerrier d'infliger des coups critiques, infligeant des dégâts accrus.";
        
//     } else if (Slider1==1 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Instinct de survie : Lorsque les points de vie du guerrier sont bas, il gagne temporairement une résistance accrue aux dégâts.";
        
//     } else if (Slider1==1 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Aura inspirante : Les alliés proches du guerrier bénéficient d'un petit bonus de statistiques grâce à sa présence inspirante sur le champ de bataille.";
        
//     }


//     else if (Slider1==2 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Vision astrale : Permet au mage de détecter des éléments cachés ou des faiblesses magiques dans son environnement.";
        
//     } else if (Slider1==2 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Canalisation stable : Réduit le temps de récupération entre les sorts du mage.";

//     } else if (Slider1==2 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Clairvoyance : Augmente la portée et la précision des sorts à distance du mage.";
        
//     } else if (Slider1==2 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Résonance magique : Si le mage utilise le même sort plusieurs fois, son efficacité augmente progressivement.";
        
//     } else if (Slider1==2 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Essence volatile : À la mort du mage, il explose en libérant une onde d'énergie magique qui inflige des dégâts aux ennemis à proximité.";
        
//     }


//     else if (Slider1==3 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Contre-attaque : Si le voleur esquive une attaque ennemie, il a une chance de riposter automatiquement.";
        
//     } else if (Slider1==3 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Agilité destructrice : Augmente les dégâts infligés lors d'une attaque sournoise ou d'une esquive.";

//     } else if (Slider1==3 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Synchronisation des sens : Améliore les réflexes du voleur en furtivité, réduisant les chances d'être surpris.";
        
//     } else if (Slider1==3 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Mouvements fluides : Réduit le coût en énergie des capacités d'évasion et de déplacement du voleur.";
        
//     } else if (Slider1==3 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Aura d'opportunisme : Les alliés proches du voleur bénéficient d'un petit bonus de statistiques lorsque celui-ci est en furtivité ou lorsqu'il exécute des attaques sournoises.";
        
//     }


//     else if (Slider1==4 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Observation constante : Augmente la distance à laquelle l'archer peut repérer les ennemis.";
        
//     } else if (Slider1==4 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Instinct de visée : Améliore la précision des tirs en mouvement.";

//     } else if (Slider1==4 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Enchaînement rapide : Si l'archer réussit un coup critique, il a une chance d'enchainer automatiquement avec un tir supplémentaire.";
        
//     } else if (Slider1==4 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Flexibilité du tir : Augmente les chances de tirer dans des positions difficiles (tir à l'envers, en sautant, etc.).";
        
//     } else if (Slider1==4 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Finesse du tireur : Permet à l'archer de se déplacer plus rapidement tout en maintenant son arc bandé, facilitant les tirs en mouvement.";
        
//     }


//     else if (Slider1==5 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Aura effrayante : Réduit les chances que les ennemis ciblent le nécromancien en premier dans un combat.";
        
//     } else if (Slider1==5 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Envoûtement persistant : Augmente la durée des malédictions et des dégâts sur la durée infligés par le nécromancien.";

//     } else if (Slider1==5 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Drain de vitalité : Lorsque le nécromancien inflige des dégâts nécrotiques, il a une chance de restaurer sa propre santé.";
        
//     } else if (Slider1==5 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Subjugation des âmes : Les sorts de contrôle des morts-vivants du nécromancien sont plus difficiles à briser.";
        
//     } else if (Slider1==5 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Appel des ténèbres : Augmente les dégâts des sorts nécrotiques du nécromancien lorsque la luminosité ambiante est faible.";
        
//     }


//     else if (Slider1==6 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Puissance bénie : Augmente les dégâts infligés par les sorts offensifs du prêtre.";
        
//     } else if (Slider1==6 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Lien spirituel : Le prêtre peut sacrifier une partie de sa propre santé pour restaurer celle d'un allié blessé.";

//     } else if (Slider1==6 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Charité divine : Le prêtre a une chance de réduire les coûts en ressources magiques de ses sorts de guérison.";
        
//     } else if (Slider1==6 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Clarté spirituelle : Réduit la probabilité que les sorts du prêtre soient résistés ou annulés par des effets adverses.";
        
//     } else if (Slider1==6 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Bénédiction de résistance : Les alliés proches du prêtre obtiennent une légère résistance aux dégâts des éléments et aux effets négatifs.";
        
//     }


//     else if (Slider1==7 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Dur à cuire : Augmente les points de vie maximum du cowboy.";
        
//     } else if (Slider1==7 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Coup critique du pistolet : Augmente les chances du cowboy d'infliger des coups critiques avec ses armes à feu.";

//     } else if (Slider1==7 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Sens des pièges : Le cowboy a une meilleure chance de détecter les pièges et les embuscades.";
        
//     } else if (Slider1==7 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Évasion acrobatique : Le cowboy est plus apte à éviter les attaques en effectuant des mouvements agiles.";
        
//     } else if (Slider1==7 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Inspiration cow-boy : Les alliés proches du cowboy bénéficient d'un petit bonus de statistiques grâce à sa présence encourageante sur le champ de bataille.";
        
//     }


//     else if (Slider1==8 && Slider5==1){
//         document.querySelector(".DescC4").innerHTML="Résonance mystique : Si le sorcier utilise le même sort plusieurs fois, son efficacité augmente progressivement.";
        
//     } else if (Slider1==8 && Slider5==2){
//         document.querySelector(".DescC4").innerHTML="Vision arcanique : Permet au sorcier de voir des éléments cachés ou des faiblesses magiques dans son environnement.";

//     } else if (Slider1==8 && Slider5==3){
//         document.querySelector(".DescC4").innerHTML="Essence éthérée : À la mort du sorcier, il libère une onde d'énergie magique qui inflige des dégâts aux ennemis à proximité.";
        
//     } else if (Slider1==8 && Slider5==4){
//         document.querySelector(".DescC4").innerHTML="Instinct magique : Lorsque les points de vie du sorcier sont bas, il gagne temporairement une résistance accrue aux dégâts.";
        
//     } else if (Slider1==8 && Slider5==5){
//         document.querySelector(".DescC4").innerHTML="Aura enchantée : Les alliés proches du sorcier bénéficient d'un petit bonus de statistiques grâce à sa présence magiquement renforcée sur le champ de bataille.";
        
//     }
// }
// Desc4();






// var Slider8 = 1

// function Desc5(){
//     if (Slider1==1 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Écrasement de la horde gobeline : Le guerrier a mené une bataille contre une horde de gobelins, montrant sa supériorité en combat rapproché.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux dégâts physiques.";
//     } else if (Slider1==1 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Triomphe contre le géant des montagnes : Le guerrier a vaincu un géant des montagnes dans un duel épique, démontrant sa force exceptionnelle.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la force physique.";

//     } else if (Slider1==1 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Défense héroïque de la cité assiégée : Le guerrier a joué un rôle crucial dans la défense d'une cité attaquée par des forces ennemies, repoussant les assaillants.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux dégâts magiques.";
        
//     } else if (Slider1==1 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Champion du tournoi des rois : Le guerrier a remporté un prestigieux tournoi de combat, prouvant sa maîtrise des techniques martiales.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse d'attaque.";
        
//     } else if (Slider1==1 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Sauvetage du prince captif : Le guerrier a mené une mission audacieuse pour sauver un prince capturé par des brigands, gagnant la gratitude de la royauté.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la régénération de santé en combat.";
        
//     }


//     else if (Slider1==2 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Dompteur des éléments : Le mage a réussi à maîtriser les quatre éléments (feu, eau, air, terre) et à les manipuler avec habileté.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des dégâts infligés par les sorts élémentaires.";
        
//     } else if (Slider1==2 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Défaite du sorcier noir : Le mage a triomphé d'un sorcier noir puissant qui menaçait d'engloutir le royaume dans les ténèbres.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux dégâts magiques.";

//     } else if (Slider1==2 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Libérateur de la relique ancienne : Le mage a récupéré une relique ancienne enfermée dans un sanctuaire protégé par des sortilèges complexes.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la régénération de ressources magiques.";
        
//     } else if (Slider1==2 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Érudit de la connaissance interdite : Le mage a étudié et maîtrisé des sorts issus de textes ésotériques, gagnant un savoir magique rare.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Réduction du temps de récupération entre les sorts.";
        
//     } else if (Slider1==2 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Voyageur des dimensions : Le mage a exploré des dimensions alternatives et en est revenu avec une compréhension profonde des flux temporels.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse de lancement des sorts.";
        
//     }


//     else if (Slider1==3 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Maître de l'ombre : Le voleur a réussi à infiltrer une forteresse bien gardée sans jamais être détecté, faisant preuve d'une furtivité exceptionnelle.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse de déplacement en furtivité.";
        
//     } else if (Slider1==3 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Le cambrioleur légendaire : Le voleur est renommé pour avoir volé des trésors inestimables sans laisser de trace, montrant une expertise en vol à la tire.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des chances de réussite lors du vol à la tire.";

//     } else if (Slider1==3 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Artisan des poisons : Le voleur a appris à créer des poisons mortels et des onguents pour enduire ses armes, infligeant des dégâts supplémentaires à ses ennemis.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des dégâts infligés par les attaques empoisonnées.";
        
//     } else if (Slider1==3 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Le maître des serrures : Le voleur est reconnu pour sa capacité à ouvrir toutes sortes de serrures, même les plus complexes, en un rien de temps.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Réduction du temps nécessaire pour crocheter les serrures.";
        
//     } else if (Slider1==3 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Ombre de la nuit : Le voleur a réussi à échapper à la capture en se fondant dans l'obscurité et en échappant à ses poursuivants.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux effets de contrôle lors de l'utilisation de compétences d'évasion.";
        
//     }


//     else if (Slider1==4 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Tireur d'élite : L'archer est renommé pour ses tirs précis et dévastateurs à longue portée, ayant abattu des cibles difficiles à atteindre.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des dégâts infligés par les tirs à longue portée.";
        
//     } else if (Slider1==4 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Le dernier tir parfait : L'archer a éliminé un ennemi important d'un seul tir, changeant le cours d'une bataille décisive.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des chances de réaliser des coups critiques avec les tirs.";

//     } else if (Slider1==4 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Chasseur de monstres : L'archer a traqué et abattu des créatures dangereuses, prouvant sa maîtrise des combats contre des ennemis sauvages.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des dégâts infligés aux ennemis non-humanoïdes.";
        
//     } else if (Slider1==4 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Tireur en mouvement : L'archer est capable de maintenir une précision remarquable même en mouvement, touchant ses ennemis tout en évitant les attaques.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la précision des tirs en mouvement.";
        
//     } else if (Slider1==4 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Survivant des embuscades : L'archer a réussi à sortir indemne de plusieurs embuscades et à éliminer ses assaillants avec rapidité et précision.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse de déplacement en combat.";
        
//     }


//     else if (Slider1==5 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Dominateur des morts-vivants : Le nécromancien a réussi à contrôler une armée de morts-vivants, démontrant sa maîtrise sur les forces de l'au-delà.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la durée de vie et des dégâts infligés par les serviteurs invoqués.";
        
//     } else if (Slider1==5 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Triomphe contre le chevalier déchu : Le nécromancien a défait un chevalier autrefois valeureux, désormais un mort-vivant corrompu, en utilisant sa propre magie noire contre lui.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la puissance des sorts nécrotiques.";

//     } else if (Slider1==5 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Récupération de l'artefact maudit : Le nécromancien a récupéré un artefact maudit aux pouvoirs obscurs, gagnant une compréhension profonde des énergies nécrotiques.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la régénération de ressources magiques liées à la nécromancie.";
        
//     } else if (Slider1==5 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Explorateur des tombes anciennes : Le nécromancien a exploré des tombes oubliées et en est revenu avec des connaissances sur les rituels de résurrection et les secrets des morts.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Réduction du temps de recharge des sorts de résurrection et d'invocation.";
        
//     } else if (Slider1==5 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Conquérant des barrières de la vie et de la mort : Le nécromancien a ouvert des portails entre les mondes, permettant aux morts de traverser temporairement pour combattre à ses côtés.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse de lancement des sorts de nécromancie.";
        
//     }


//     else if (Slider1==6 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Guérisseur de bataille : Le prêtre a soigné de nombreux soldats blessés sur le champ de bataille, sauvant des vies lors de conflits acharnés.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de l'efficacité des sorts de guérison.";
        
//     } else if (Slider1==6 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Exorcisme de la créature maléfique : Le prêtre a exorcisé une créature possédée par des forces obscures, utilisant sa foi pour renvoyer les esprits malfaisants.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux dégâts magiques.";

//     } else if (Slider1==6 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Bénédictions des éléments sacrés : Le prêtre a béni des objets ou des lieux avec des pouvoirs sacrés, apportant la protection divine aux gens et aux endroits touchés.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des résistances élémentaires.";
        
//     } else if (Slider1==6 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Guide spirituel des réfugiés : Le prêtre a guidé un groupe de réfugiés à travers des terres dangereuses, les protégeant des dangers et de l'épuisement.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la régénération de santé hors combat.";
        
//     } else if (Slider1==6 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Rétablissement de la source divine : Le prêtre a purifié une source d'eau contaminée par des énergies sombres, rendant son eau à nouveau pure et nourrissante.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la régénération de ressources magiques.";
        
//     }


//     else if (Slider1==7 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Dompteur de bêtes sauvages : Le cowboy a réussi à apprivoiser et à maîtriser des créatures sauvages redoutables, montrant son expertise dans le dressage animal.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des dégâts infligés par les attaques montées.";
        
//     } else if (Slider1==7 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Triomphe contre les hors-la-loi : Le cowboy a mis fin à une bande de hors-la-loi qui terrorisait les terres frontalières, démontrant sa détermination à faire régner la justice.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux dégâts physiques.";

//     } else if (Slider1==7 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Sauveur de la ville en péril : Le cowboy a défendu une ville isolée contre une attaque de bandits, prouvant sa loyauté envers sa communauté.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la régénération de santé en combat.";
        
//     } else if (Slider1==7 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Champion du rodéo : Le cowboy a remporté de nombreux tournois de rodéo en démontrant son agilité et sa maîtrise de la monte de taureaux sauvages.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Réduction du temps de recharge des compétences de monte et d'équitation.";
        
//     } else if (Slider1==7 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Évasion audacieuse : Le cowboy a réussi à s'échapper d'une embuscade tendue par des ennemis supérieurs en nombre en utilisant sa ruse et ses compétences en survie.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse de déplacement en combat.";
        
//     }


//     else if (Slider1==8 && Slider8==1){
//         document.querySelector(".DescC5").innerHTML="Domination des éclats élémentaires : Le sorcier a maîtrisé la fusion de plusieurs éléments pour créer des éclats magiques puissants, témoignant de sa maîtrise des forces naturelles.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation des dégâts infligés par les sorts élémentaires combinés.";
        
//     } else if (Slider1==8 && Slider8==2){
//         document.querySelector(".DescC5").innerHTML="Victoire contre le seigneur des ombres : Le sorcier a triomphé d'un seigneur des ombres redoutable en utilisant ses propres énergies magiques pour repousser les ténèbres.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux dégâts magiques.";

//     } else if (Slider1==8 && Slider8==3){
//         document.querySelector(".DescC5").innerHTML="Connaissance des archives arcaniques : Le sorcier a exploré d'anciennes archives magiques et en est revenu avec des sorts anciens perdus depuis longtemps.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Réduction du temps de recharge des sorts anciens.";
        
//     } else if (Slider1==8 && Slider8==4){
//         document.querySelector(".DescC5").innerHTML="Sculpteur de réalités : Le sorcier a altéré la réalité autour de lui pour détourner une catastrophe imminente, prouvant sa maîtrise des lois magiques fondamentales.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la résistance aux effets magiques de contrôle.";
        
//     } else if (Slider1==8 && Slider8==5){
//         document.querySelector(".DescC5").innerHTML="Explorateur des dimensions interdites : Le sorcier a voyagé dans des dimensions interdites, gagnant une compréhension profonde des énergies magiques et de la manipulation des dimensions.";
//         document.querySelector(".DescC6").innerHTML="Bonus : Augmentation de la vitesse de lancement des sorts de portail et de dimension.";
        
//     }
// }
// Desc5();









// function slider1D(){
//     if (Slider1==1){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         Slider1 = 2;
//     } else if (Slider1==2){
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
//         Slider1 = 3;

//     } else if (Slider1==3){
//         document.querySelector(".Slider1").classList.add("Slider1_pos4");
//         Slider1 = 4;
        
//     } else if (Slider1==4){
//         document.querySelector(".Slider1").classList.add("Slider1_pos5");
//         Slider1 = 5;
        
//     } else if (Slider1==5){
//         document.querySelector(".Slider1").classList.add("Slider1_pos6");
//         Slider1 = 6;
        
//     } else if (Slider1==6){
//         document.querySelector(".Slider1").classList.add("Slider1_pos7");
//         Slider1 = 7;
        
//     } else if (Slider1==7){
//         document.querySelector(".Slider1").classList.add("Slider1_pos8");
//         Slider1 = 8;
        
//     } else if (Slider1==8){
        
//     }
// }
// function slider1G(){
//     if (Slider1==8){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");
//         Slider1 = 7;
        
//     } else if (Slider1==7){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         Slider1 = 6;

//     } else if (Slider1==6){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos6");
//         Slider1 = 5;
        
//     } else if (Slider1==5){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos5");
//         Slider1 = 4;
        
//     } else if (Slider1==4){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos4");
//         Slider1 = 3;
        
//     } else if (Slider1==3){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos3");
//         Slider1 = 2;
        
//     } else if (Slider1==2){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos2");
//         Slider1 = 1;
//     } else if (Slider1==1){
        
//     }
// }

// document.querySelector(".D1").addEventListener("click", ()=>{
//     if (ChoisirClasseAvatarC1==0){
//         ChoisirClasseAvatarC1=1
//     }
//     if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     }
    
//     if (ClickDroite==0){
//         ClickDroite = 1;
//         document.querySelector(".TexteSlide1").innerHTML="Guerrier";
//         Slider1 = 1;
//         classe();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//         document.querySelector(".CompChoisirClasse").classList.add("none");
//     } else if (ClickDroite==1){
//         slider1D();
//         classe();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//     }
    
// })
// document.querySelector(".G1").addEventListener("click", ()=>{
//     slider1G();
//     classe();
//     Desc1();
//     Desc2();
//     Desc3();
//     Desc4();
//     Desc5();
// })










// function slider2D(){
//     if (Slider2==1){
//         document.querySelector(".Slider2").classList.add("Slider2_pos2");
//         Slider2 = 2;
//     } else if (Slider2==2){
//         document.querySelector(".Slider2").classList.add("Slider2_pos3");
//         Slider2 = 3;

//     } else if (Slider2==3){
//         document.querySelector(".Slider2").classList.add("Slider2_pos4");
//         Slider2 = 4;
        
//     } else if (Slider2==4){
//         document.querySelector(".Slider2").classList.add("Slider2_pos5");
//         Slider2 = 5;
        
//     } else if (Slider2==5){

//     }
// }
// function slider2G(){
//     if (Slider2==5){
//         document.querySelector(".Slider2").classList.remove("Slider2_pos5");
//         Slider2 = 4;
        
//     } else if (Slider2==4){
//         document.querySelector(".Slider2").classList.remove("Slider2_pos4");
//         Slider2 = 3;

//     } else if (Slider2==3){
//         document.querySelector(".Slider2").classList.remove("Slider2_pos3");
//         Slider2 = 2;
        
//     } else if (Slider2==2){
//         document.querySelector(".Slider2").classList.remove("Slider2_pos2");
//         Slider2 = 1;
        
//     } else if (Slider2==1){
        
//     }
// }

// document.querySelector(".D2").addEventListener("click", ()=>{
//     slider2D();
//     Desc1();
// })
// document.querySelector(".G2").addEventListener("click", ()=>{
//     slider2G();
//     Desc1();
// })







// function slider3D(){
//     if (Slider3==1){
//         document.querySelector(".Slider3").classList.add("Slider3_pos2");
//         Slider3 = 2;
//     } else if (Slider3==2){
//         document.querySelector(".Slider3").classList.add("Slider3_pos3");
//         Slider3 = 3;

//     } else if (Slider3==3){
//         document.querySelector(".Slider3").classList.add("Slider3_pos4");
//         Slider3 = 4;
        
//     } else if (Slider3==4){
//         document.querySelector(".Slider3").classList.add("Slider3_pos5");
//         Slider3 = 5;
        
//     } else if (Slider3==5){
        
//     }
// }
// function slider3G(){
//     if (Slider3==5){
//         document.querySelector(".Slider3").classList.remove("Slider3_pos5");
//         Slider3 = 4;
        
//     } else if (Slider3==4){
//         document.querySelector(".Slider3").classList.remove("Slider3_pos4");
//         Slider3 = 3;

//     } else if (Slider3==3){
//         document.querySelector(".Slider3").classList.remove("Slider3_pos3");
//         Slider3 = 2;
        
//     } else if (Slider3==2){
//         document.querySelector(".Slider3").classList.remove("Slider3_pos2");
//         Slider3 = 1;
        
//     } else if (Slider3==1){
        
//     }
// }

// document.querySelector(".D3").addEventListener("click", ()=>{
//     slider3D();
//     Desc3();
// })
// document.querySelector(".G3").addEventListener("click", ()=>{
//     slider3G();
//     Desc3();
// })


// function slider4D(){
//     if (Slider4==1){
//         document.querySelector(".Slider4").classList.add("Slider4_pos2");
//         Slider4 = 2;
//     } else if (Slider4==2){
//         document.querySelector(".Slider4").classList.add("Slider4_pos3");
//         Slider4 = 3;

//     } else if (Slider4==3){
//         document.querySelector(".Slider4").classList.add("Slider4_pos4");
//         Slider4 = 4;
        
//     } else if (Slider4==4){
//         document.querySelector(".Slider4").classList.add("Slider4_pos5");
//         Slider4 = 5;
        
//     } else if (Slider4==5){
        
//     }
// }
// function slider4G(){
//     if (Slider4==5){
//         document.querySelector(".Slider4").classList.remove("Slider4_pos5");
//         Slider4 = 4;
        
//     } else if (Slider4==4){
//         document.querySelector(".Slider4").classList.remove("Slider4_pos4");
//         Slider4 = 3;

//     } else if (Slider4==3){
//         document.querySelector(".Slider4").classList.remove("Slider4_pos3");
//         Slider4 = 2;
        
//     } else if (Slider4==2){
//         document.querySelector(".Slider4").classList.remove("Slider4_pos2");
//         Slider4 = 1;
        
//     } else if (Slider4==1){
        
//     }
// }

// document.querySelector(".D4").addEventListener("click", ()=>{
//     slider4D();
//     Desc2();
// })
// document.querySelector(".G4").addEventListener("click", ()=>{
//     slider4G();
//     Desc2();
// })





// function slider5D(){
//     if (Slider5==1){
//         document.querySelector(".Slider5").classList.add("Slider5_pos2");
//         Slider5 = 2;
//     } else if (Slider5==2){
//         document.querySelector(".Slider5").classList.add("Slider5_pos3");
//         Slider5 = 3;

//     } else if (Slider5==3){
//         document.querySelector(".Slider5").classList.add("Slider5_pos4");
//         Slider5 = 4;
        
//     } else if (Slider5==4){
//         document.querySelector(".Slider5").classList.add("Slider5_pos5");
//         Slider5 = 5;
        
//     } else if (Slider5==5){
        
//     }
// }
// function slider5G(){
//     if (Slider5==5){
//         document.querySelector(".Slider5").classList.remove("Slider5_pos5");
//         Slider5 = 4;
        
//     } else if (Slider5==4){
//         document.querySelector(".Slider5").classList.remove("Slider5_pos4");
//         Slider5 = 3;

//     } else if (Slider5==3){
//         document.querySelector(".Slider5").classList.remove("Slider5_pos3");
//         Slider5 = 2;
        
//     } else if (Slider5==2){
//         document.querySelector(".Slider5").classList.remove("Slider5_pos2");
//         Slider5 = 1;
        
//     } else if (Slider5==1){
        
//     }
// }

// document.querySelector(".D5").addEventListener("click", ()=>{
//     slider5D();
//     Desc4();
// })
// document.querySelector(".G5").addEventListener("click", ()=>{
//     slider5G();
//     Desc4();
// })




// var Slider6 = 1

// function slider6D(){
//     if (Slider6==1){
//         document.querySelector(".Slider6").classList.add("Slider6_pos2");
//         Slider6 = 2;
//     } else if (Slider6==2){
//         document.querySelector(".Slider6").classList.add("Slider6_pos3");
//         Slider6 = 3;

//     } else if (Slider6==3){
//         document.querySelector(".Slider6").classList.add("Slider6_pos4");
//         Slider6 = 4;
        
//     } else if (Slider6==4){
//         document.querySelector(".Slider6").classList.add("Slider6_pos5");
//         Slider6 = 5;
        
//     } else if (Slider6==5){
//         document.querySelector(".Slider6").classList.add("Slider6_pos6");
//         Slider6 = 6;
        
//     } else if (Slider6==5){
        
//     }
// }
// function slider6G(){
//     if (Slider6==6){
//         document.querySelector(".Slider6").classList.remove("Slider6_pos6");
//         Slider6 = 5;
        
//     } else if (Slider6==5){
//         document.querySelector(".Slider6").classList.remove("Slider6_pos5");
//         Slider6 = 4;

//     } else if (Slider6==4){
//         document.querySelector(".Slider6").classList.remove("Slider6_pos4");
//         Slider6 = 3;
        
//     } else if (Slider6==3){
//         document.querySelector(".Slider6").classList.remove("Slider6_pos3");
//         Slider6 = 2;
        
//     } else if (Slider6==2){
//         document.querySelector(".Slider6").classList.remove("Slider6_pos2");
//         Slider6 = 1;
        
//     } else if (Slider6==1){
        
//     }
// }

// document.querySelector(".TexteSlide5").innerHTML="None";

// document.querySelector(".D6").addEventListener("click", ()=>{
    
//     if (ClickDroite3==0){
//         ClickDroite3 = 1;
//         Slider6 = 1;
//         document.querySelector(".TexteSlide5").innerHTML="Charismatique";
//     } else {
//         slider6D()
//     }
    
// })
// document.querySelector(".G6").addEventListener("click", ()=>{
//     slider6G()
// })

// var Slider7 = 1

// function slider7D(){
//     if (Slider7==1){
//         document.querySelector(".Slider7").classList.add("Slider7_pos2");
//         Slider7 = 2;
//     } else if (Slider7==2){
//         document.querySelector(".Slider7").classList.add("Slider7_pos3");
//         Slider7 = 3;

//     } else if (Slider7==3){
//         document.querySelector(".Slider7").classList.add("Slider7_pos4");
//         Slider7 = 4;
        
//     } else if (Slider7==4){
//         document.querySelector(".Slider7").classList.add("Slider7_pos5");
//         Slider7 = 5;
        
//     } else if (Slider7==5){
//         document.querySelector(".Slider7").classList.add("Slider7_pos6");
//         Slider7 = 6;
        
//     } else if (Slider7==5){
        
//     }
// }
// function slider7G(){
//     if (Slider7==6){
//         document.querySelector(".Slider7").classList.remove("Slider7_pos6");
//         Slider7 = 5;
        
//     } else if (Slider7==5){
//         document.querySelector(".Slider7").classList.remove("Slider7_pos5");
//         Slider7 = 4;

//     } else if (Slider7==4){
//         document.querySelector(".Slider7").classList.remove("Slider7_pos4");
//         Slider7 = 3;
        
//     } else if (Slider7==3){
//         document.querySelector(".Slider7").classList.remove("Slider7_pos3");
//         Slider7 = 2;
        
//     } else if (Slider7==2){
//         document.querySelector(".Slider7").classList.remove("Slider7_pos2");
//         Slider7 = 1;
        
//     } else if (Slider7==1){
        
//     }
// }

// document.querySelector(".TexteSlide6").innerHTML="None";

// document.querySelector(".D7").addEventListener("click", ()=>{
    
//     if (ClickDroite4==0){
//         ClickDroite4 = 1;
//         Slider7 = 1;
//         document.querySelector(".TexteSlide6").innerHTML="Impulsif";
//     } else {
//         slider7D()
//     }
// })
// document.querySelector(".G7").addEventListener("click", ()=>{
//     slider7G()
// })








// function slider8D(){
//     if (Slider8==1){
//         document.querySelector(".Slider8").classList.add("Slider8_pos2");
//         Slider8 = 2;
//     } else if (Slider8==2){
//         document.querySelector(".Slider8").classList.add("Slider8_pos3");
//         Slider8 = 3;

//     } else if (Slider8==3){
//         document.querySelector(".Slider8").classList.add("Slider8_pos4");
//         Slider8 = 4;
        
//     } else if (Slider8==4){
//         document.querySelector(".Slider8").classList.add("Slider8_pos5");
//         Slider8 = 5;
        
//     } else if (Slider8==5){
        
//     }
// }
// function slider8G(){
//     if (Slider8==5){
//         document.querySelector(".Slider8").classList.remove("Slider8_pos5");
//         Slider8 = 4;
        
//     } else if (Slider8==4){
//         document.querySelector(".Slider8").classList.remove("Slider8_pos4");
//         Slider8 = 3;

//     } else if (Slider8==3){
//         document.querySelector(".Slider8").classList.remove("Slider8_pos3");
//         Slider8 = 2;
        
//     } else if (Slider8==2){
//         document.querySelector(".Slider8").classList.remove("Slider8_pos2");
//         Slider8 = 1;
        
//     } else if (Slider8==1){
        
//     }
// }

// document.querySelector(".D8").addEventListener("click", ()=>{
//     if (ClickDroite==0){

//     } else if (ClickDroite==1){
//         slider8D()
//         classe();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//     }
// })
// document.querySelector(".G8").addEventListener("click", ()=>{
//     slider8G();
//     Desc5();
// })




// var Slider9 = -1

// function slider9D(){
//     if (Slider9==1){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         Slider9 = 2;
//     } else if (Slider9==2){
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
//         Slider9 = 3;

//     } else if (Slider9==3){
//         document.querySelector(".Slider9").classList.add("Slider9_pos4");
//         Slider9 = 4;
        
//     } else if (Slider9==4){
//         document.querySelector(".Slider9").classList.add("Slider9_pos5");
//         Slider9 = 5;
        
//     } else if (Slider9==5){
//         document.querySelector(".Slider9").classList.add("Slider9_pos6");
//         Slider9 = 6;
        
//     } else if (Slider9==6){
//         document.querySelector(".Slider9").classList.add("Slider9_pos7");
//         Slider9 = 7;
        
//     } else if (Slider9==7){
//         document.querySelector(".Slider9").classList.add("Slider9_pos8");
//         Slider9 = 8;
        
//     } else if (Slider9==8){
        
//     }
// }
// function slider9G(){
//     if (Slider9==8){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");
//         Slider9 = 7;
        
//     } else if (Slider9==7){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         Slider9 = 6;

//     } else if (Slider9==6){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos6");
//         Slider9 = 5;
        
//     } else if (Slider9==5){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos5");
//         Slider9 = 4;
        
//     } else if (Slider9==4){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos4");
//         Slider9 = 3;
        
//     } else if (Slider9==3){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos3");
//         Slider9 = 2;
        
//     } else if (Slider9==2){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos2");
//         Slider9 = 1;
        
//     } else if (Slider9==1){
        
//     }
// }

// document.querySelector(".TexteSlide4").innerHTML="None";

// document.querySelector(".D9").addEventListener("click", ()=>{
//     if (ClickDroite2==0){
//         ClickDroite2 = 1;
//         Slider9 = 1;
//         document.querySelector(".TexteSlide4").innerHTML="Citoyen";
//     } else {
//         console.log("oui");
//         slider9D();
//     }
// })
// document.querySelector(".G9").addEventListener("click", ()=>{
//     slider9G()
// })











// // Boutons aléatoires

// // Slider 1 : Classe

// var slider1Alea = 0

// function slider1Rndm(){
//     if (slider1Alea==1){
//         document.querySelector(".Slider1").classList.remove("Slider1_pos2");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos3");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos4");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos5");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos6");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");
        
//         Slider1 = 1

//     } else if (slider1Alea==2){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");

//         document.querySelector(".Slider1").classList.remove("Slider1_pos3");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos4");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos5");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos6");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");

//         Slider1 = 2

//     } else if (slider1Alea==3){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
        
//         document.querySelector(".Slider1").classList.remove("Slider1_pos4");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos5");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos6");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");

//         Slider1 = 3
        
//     } else if (slider1Alea==4){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
//         document.querySelector(".Slider1").classList.add("Slider1_pos4");
        
//         document.querySelector(".Slider1").classList.remove("Slider1_pos5");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos6");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");
//         Slider1 = 4
        
//     } else if (slider1Alea==5){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
//         document.querySelector(".Slider1").classList.add("Slider1_pos4");
//         document.querySelector(".Slider1").classList.add("Slider1_pos5");

//         document.querySelector(".Slider1").classList.remove("Slider1_pos6");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");
//         Slider1 = 5
        
//     } else if (slider1Alea==6){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
//         document.querySelector(".Slider1").classList.add("Slider1_pos4");
//         document.querySelector(".Slider1").classList.add("Slider1_pos5");
//         document.querySelector(".Slider1").classList.add("Slider1_pos6");
        
//         document.querySelector(".Slider1").classList.remove("Slider1_pos7");
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");
//         Slider1 = 6
        
//     } else if (slider1Alea==7){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
//         document.querySelector(".Slider1").classList.add("Slider1_pos4");
//         document.querySelector(".Slider1").classList.add("Slider1_pos5");
//         document.querySelector(".Slider1").classList.add("Slider1_pos6");
//         document.querySelector(".Slider1").classList.add("Slider1_pos7");
        
//         document.querySelector(".Slider1").classList.remove("Slider1_pos8");
//         Slider1 = 7
        
//     } else if (slider1Alea==8){
//         document.querySelector(".Slider1").classList.add("Slider1_pos2");
//         document.querySelector(".Slider1").classList.add("Slider1_pos3");
//         document.querySelector(".Slider1").classList.add("Slider1_pos4");
//         document.querySelector(".Slider1").classList.add("Slider1_pos5");
//         document.querySelector(".Slider1").classList.add("Slider1_pos6");
//         document.querySelector(".Slider1").classList.add("Slider1_pos7");
//         document.querySelector(".Slider1").classList.add("Slider1_pos8");
        
//         Slider1 = 8
        
//     }
// }
// function clickRndm1(){
//     // Chiffres choisis
//     var minNumber1 = 1;
//     var maxNumber1 = 8;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue1 = Math.floor(Math.random() * (maxNumber1 - minNumber1 + 1)) + minNumber1;

//     slider1Alea = randomValue1
//     slider1Rndm();
// }


// document.querySelector(".BA3").addEventListener("click", ()=>{
//     if (ChoisirClasseAvatarC1==0){
//         ChoisirClasseAvatarC1=1
//     }
//     if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     }

//     if (ClickDroite==0){
//         ClickDroite = 1;
//         document.querySelector(".TexteSlide1").innerHTML="Guerrier";
//         Slider1 = 1;
//         clickRndm1();
//         classe();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//         document.querySelector(".CompChoisirClasse").classList.add("none");
//     } else if (ClickDroite==1){
//         clickRndm1();
//         classe();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//     }
// })




// // Slider 2 : Compétence active 1

// var slider2Alea = 0

// function slider2Rndm(){
//     if (slider2Alea==1){
//         document.querySelector(".Slider2").classList.remove("Slider2_pos2");
//         document.querySelector(".Slider2").classList.remove("Slider2_pos3");
//         document.querySelector(".Slider2").classList.remove("Slider2_pos4");
//         document.querySelector(".Slider2").classList.remove("Slider2_pos5");
        
//         Slider2 = 1

//     } else if (slider2Alea==2){
//         document.querySelector(".Slider2").classList.add("Slider2_pos2");

//         document.querySelector(".Slider2").classList.remove("Slider2_pos3");
//         document.querySelector(".Slider2").classList.remove("Slider2_pos4");
//         document.querySelector(".Slider2").classList.remove("Slider2_pos5");

//         Slider2 = 2

//     } else if (slider2Alea==3){
//         document.querySelector(".Slider2").classList.add("Slider2_pos2");
//         document.querySelector(".Slider2").classList.add("Slider2_pos3");
        
//         document.querySelector(".Slider2").classList.remove("Slider2_pos4");
//         document.querySelector(".Slider2").classList.remove("Slider2_pos5");

//         Slider2 = 3
        
//     } else if (slider2Alea==4){
//         document.querySelector(".Slider2").classList.add("Slider2_pos2");
//         document.querySelector(".Slider2").classList.add("Slider2_pos3");
//         document.querySelector(".Slider2").classList.add("Slider2_pos4");
        
//         document.querySelector(".Slider2").classList.remove("Slider2_pos5");
//         Slider2 = 4
        
//     } else if (slider2Alea==5){
//         document.querySelector(".Slider2").classList.add("Slider2_pos2");
//         document.querySelector(".Slider2").classList.add("Slider2_pos3");
//         document.querySelector(".Slider2").classList.add("Slider2_pos4");
//         document.querySelector(".Slider2").classList.add("Slider2_pos5");
        
//         Slider2 = 5
        
//     } 
// }
// function clickRndm2(){
//     // Chiffres choisis
//     var minNumber2 = 1;
//     var maxNumber2 = 5;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue2 = Math.floor(Math.random() * (maxNumber2 - minNumber2 + 1)) + minNumber2;

//     slider2Alea = randomValue2
//     slider2Rndm();
// }


// document.querySelector(".BA5").addEventListener("click", ()=>{
//     if (ClickDroite==0){

//     } else if (ClickDroite==1){
//         clickRndm2();
//         Desc1();
//     }

// })




// // Slider 4 : Compétence active 2

// var slider4Alea = 0

// function slider4Rndm(){
//     if (slider4Alea==1){
//         document.querySelector(".Slider4").classList.remove("Slider4_pos2");
//         document.querySelector(".Slider4").classList.remove("Slider4_pos3");
//         document.querySelector(".Slider4").classList.remove("Slider4_pos4");
//         document.querySelector(".Slider4").classList.remove("Slider4_pos5");
        
//         Slider4 = 1

//     } else if (slider4Alea==2){
//         document.querySelector(".Slider4").classList.add("Slider4_pos2");

//         document.querySelector(".Slider4").classList.remove("Slider4_pos3");
//         document.querySelector(".Slider4").classList.remove("Slider4_pos4");
//         document.querySelector(".Slider4").classList.remove("Slider4_pos5");

//         Slider4 = 2

//     } else if (slider4Alea==3){
//         document.querySelector(".Slider4").classList.add("Slider4_pos2");
//         document.querySelector(".Slider4").classList.add("Slider4_pos3");
        
//         document.querySelector(".Slider4").classList.remove("Slider4_pos4");
//         document.querySelector(".Slider4").classList.remove("Slider4_pos5");

//         Slider4 = 3
        
//     } else if (slider4Alea==4){
//         document.querySelector(".Slider4").classList.add("Slider4_pos2");
//         document.querySelector(".Slider4").classList.add("Slider4_pos3");
//         document.querySelector(".Slider4").classList.add("Slider4_pos4");
        
//         document.querySelector(".Slider4").classList.remove("Slider4_pos5");
//         Slider4 = 4
        
//     } else if (slider4Alea==5){
//         document.querySelector(".Slider4").classList.add("Slider4_pos2");
//         document.querySelector(".Slider4").classList.add("Slider4_pos3");
//         document.querySelector(".Slider4").classList.add("Slider4_pos4");
//         document.querySelector(".Slider4").classList.add("Slider4_pos5");
        
//         Slider4 = 5
        
//     } 
// }
// function clickRndm4(){
//     // Chiffres choisis
//     var minNumber4 = 1;
//     var maxNumber4 = 5;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue4 = Math.floor(Math.random() * (maxNumber4 - minNumber4 + 1)) + minNumber4;

//     slider4Alea = randomValue4
//     slider4Rndm();
// }


// document.querySelector(".BA6").addEventListener("click", ()=>{
//     if (ClickDroite==0){

//     } else if (ClickDroite==1){
//         clickRndm4();
//         Desc2();
//     }

// })




// // Slider 3 : Compétence passive 1

// var slider3Alea = 0

// function slider3Rndm(){
//     if (slider3Alea==1){
//         document.querySelector(".Slider3").classList.remove("Slider3_pos2");
//         document.querySelector(".Slider3").classList.remove("Slider3_pos3");
//         document.querySelector(".Slider3").classList.remove("Slider3_pos4");
//         document.querySelector(".Slider3").classList.remove("Slider3_pos5");
        
//         Slider3 = 1

//     } else if (slider3Alea==2){
//         document.querySelector(".Slider3").classList.add("Slider3_pos2");

//         document.querySelector(".Slider3").classList.remove("Slider3_pos3");
//         document.querySelector(".Slider3").classList.remove("Slider3_pos4");
//         document.querySelector(".Slider3").classList.remove("Slider3_pos5");

//         Slider3 = 2

//     } else if (slider3Alea==3){
//         document.querySelector(".Slider3").classList.add("Slider3_pos2");
//         document.querySelector(".Slider3").classList.add("Slider3_pos3");
        
//         document.querySelector(".Slider3").classList.remove("Slider3_pos4");
//         document.querySelector(".Slider3").classList.remove("Slider3_pos5");

//         Slider3 = 3
        
//     } else if (slider3Alea==4){
//         document.querySelector(".Slider3").classList.add("Slider3_pos2");
//         document.querySelector(".Slider3").classList.add("Slider3_pos3");
//         document.querySelector(".Slider3").classList.add("Slider3_pos4");
        
//         document.querySelector(".Slider3").classList.remove("Slider3_pos5");
//         Slider3 = 4
        
//     } else if (slider3Alea==5){
//         document.querySelector(".Slider3").classList.add("Slider3_pos2");
//         document.querySelector(".Slider3").classList.add("Slider3_pos3");
//         document.querySelector(".Slider3").classList.add("Slider3_pos4");
//         document.querySelector(".Slider3").classList.add("Slider3_pos5");
//         Slider3 = 5
        
//     } 
// }
// function clickRndm3(){
//     // Chiffres choisis
//     var minNumber3 = 1;
//     var maxNumber3 = 5;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue3 = Math.floor(Math.random() * (maxNumber3 - minNumber3 + 1)) + minNumber3;

//     slider3Alea = randomValue3
//     slider3Rndm();
// }


// document.querySelector(".BA7").addEventListener("click", ()=>{
//     if (ClickDroite==0){

//     } else if (ClickDroite==1){
//         clickRndm3();
//         Desc3();
//     }

// })




// // Slider 5 : Compétence passive 2

// var slider5Alea = 0

// function slider5Rndm(){
//     if (slider5Alea==1){
//         document.querySelector(".Slider5").classList.remove("Slider5_pos2");
//         document.querySelector(".Slider5").classList.remove("Slider5_pos3");
//         document.querySelector(".Slider5").classList.remove("Slider5_pos4");
//         document.querySelector(".Slider5").classList.remove("Slider5_pos5");
        
//         Slider5 = 1

//     } else if (slider5Alea==2){
//         document.querySelector(".Slider5").classList.add("Slider5_pos2");

//         document.querySelector(".Slider5").classList.remove("Slider5_pos3");
//         document.querySelector(".Slider5").classList.remove("Slider5_pos4");
//         document.querySelector(".Slider5").classList.remove("Slider5_pos5");

//         Slider5 = 2

//     } else if (slider5Alea==3){
//         document.querySelector(".Slider5").classList.add("Slider5_pos2");
//         document.querySelector(".Slider5").classList.add("Slider5_pos3");
    
//         document.querySelector(".Slider5").classList.remove("Slider5_pos4");
//         document.querySelector(".Slider5").classList.remove("Slider5_pos5");

//         Slider5 = 3
        
//     } else if (slider5Alea==4){
//         document.querySelector(".Slider5").classList.add("Slider5_pos2");
//         document.querySelector(".Slider5").classList.add("Slider5_pos3");
//         document.querySelector(".Slider5").classList.add("Slider5_pos4");
    
//         document.querySelector(".Slider5").classList.remove("Slider5_pos5");
//         Slider5 = 4
        
//     } else if (slider5Alea==5){
//         document.querySelector(".Slider5").classList.add("Slider5_pos2");
//         document.querySelector(".Slider5").classList.add("Slider5_pos3");
//         document.querySelector(".Slider5").classList.add("Slider5_pos4");
//         document.querySelector(".Slider5").classList.add("Slider5_pos5");
//         Slider5 = 5
        
//     } 
// }
// function clickRndm5(){
//     // Chiffres choisis
//     var minNumber5 = 1;
//     var maxNumber5 = 5;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue5 = Math.floor(Math.random() * (maxNumber5 - minNumber5 + 1)) + minNumber5;

//     slider5Alea = randomValue5
//     slider5Rndm();
// }


// document.querySelector(".BA8").addEventListener("click", ()=>{
//     if (ClickDroite==0){

//     } else if (ClickDroite==1){
//         clickRndm5();
//         Desc4();
//     }
    
// })





// // Slider 6 : Qualité 

// var slider6Alea = 0

// function slider6Rndm(){
//     if (slider6Alea==1){
//         document.querySelector(".Slider6").classList.remove("Slider6_pos2");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos3");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos4");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos5");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos6");
        
//         Slider6 = 1

//     } else if (slider6Alea==2){
//         document.querySelector(".Slider6").classList.add("Slider6_pos2");

//         document.querySelector(".Slider6").classList.remove("Slider6_pos3");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos4");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos5");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos6");

//         Slider6 = 2

//     } else if (slider6Alea==3){
//         document.querySelector(".Slider6").classList.add("Slider6_pos2");
//         document.querySelector(".Slider6").classList.add("Slider6_pos3");
        
//         document.querySelector(".Slider6").classList.remove("Slider6_pos4");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos5");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos6");
//         Slider6 = 3
        
//     } else if (slider6Alea==4){
//         document.querySelector(".Slider6").classList.add("Slider6_pos2");
//         document.querySelector(".Slider6").classList.add("Slider6_pos3");
//         document.querySelector(".Slider6").classList.add("Slider6_pos4");
       
//         document.querySelector(".Slider6").classList.remove("Slider6_pos5");
//         document.querySelector(".Slider6").classList.remove("Slider6_pos6");
//         Slider6 = 4
        
//     } else if (slider6Alea==5){
//         document.querySelector(".Slider6").classList.add("Slider6_pos2");
//         document.querySelector(".Slider6").classList.add("Slider6_pos3");
//         document.querySelector(".Slider6").classList.add("Slider6_pos4");
//         document.querySelector(".Slider6").classList.add("Slider6_pos5");
        
//         document.querySelector(".Slider6").classList.remove("Slider6_pos6");
//         Slider6 = 5
        
//     } else if (slider6Alea==6){
//         document.querySelector(".Slider6").classList.add("Slider6_pos2");
//         document.querySelector(".Slider6").classList.add("Slider6_pos3");
//         document.querySelector(".Slider6").classList.add("Slider6_pos4");
//         document.querySelector(".Slider6").classList.add("Slider6_pos5");
//         document.querySelector(".Slider6").classList.add("Slider6_pos6");
//         Slider6 = 6
        
//     } 
// }
// function clickRndm6(){
//     // Chiffres choisis
//     var minNumber6 = 1;
//     var maxNumber6 = 6;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue6 = Math.floor(Math.random() * (maxNumber6 - minNumber6 + 1)) + minNumber6;

//     slider6Alea = randomValue6
//     slider6Rndm();
// }


// document.querySelector(".BA9").addEventListener("click", ()=>{
//     if (ClickDroite3==0){
//         ClickDroite3 = 1;
//         Slider6 = 1;
//     } else if (ClickDroite3==1){
//         document.querySelector(".TexteSlide5").innerHTML="Charismatique";
//         clickRndm6();
//     }   
// })





// // Slider 7 : Défaut

// var slider7Alea = 0

// function slider7Rndm(){
//     if (slider7Alea==1){
//         document.querySelector(".Slider7").classList.remove("Slider7_pos2");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos3");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos4");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos5");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos6");
//         Slider7 = 1

//     } else if (slider7Alea==2){
//         document.querySelector(".Slider7").classList.add("Slider7_pos2");

//         document.querySelector(".Slider7").classList.remove("Slider7_pos3");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos4");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos5");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos6");
//         Slider7 = 2

//     } else if (slider7Alea==3){
//         document.querySelector(".Slider7").classList.add("Slider7_pos2");
//         document.querySelector(".Slider7").classList.add("Slider7_pos3");
        
//         document.querySelector(".Slider7").classList.remove("Slider7_pos4");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos5");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos6");
//         Slider7 = 3
        
//     } else if (slider7Alea==4){
//         document.querySelector(".Slider7").classList.add("Slider7_pos2");
//         document.querySelector(".Slider7").classList.add("Slider7_pos3");
//         document.querySelector(".Slider7").classList.add("Slider7_pos4");
        
//         document.querySelector(".Slider7").classList.remove("Slider7_pos5");
//         document.querySelector(".Slider7").classList.remove("Slider7_pos6");
//         Slider7 = 4
        
//     } else if (slider7Alea==5){
//         document.querySelector(".Slider7").classList.add("Slider7_pos2");
//         document.querySelector(".Slider7").classList.add("Slider7_pos3");
//         document.querySelector(".Slider7").classList.add("Slider7_pos4");
//         document.querySelector(".Slider7").classList.add("Slider7_pos5");
    
//         document.querySelector(".Slider7").classList.remove("Slider7_pos6");
//         Slider7 = 5
        
//     } else if (slider7Alea==6){
//         document.querySelector(".Slider7").classList.add("Slider7_pos2");
//         document.querySelector(".Slider7").classList.add("Slider7_pos3");
//         document.querySelector(".Slider7").classList.add("Slider7_pos4");
//         document.querySelector(".Slider7").classList.add("Slider7_pos5");
//         document.querySelector(".Slider7").classList.add("Slider7_pos6");
//         Slider7 = 6
        
//     } 
// }
// function clickRndm7(){
//     // Chiffres choisis
//     var minNumber7 = 1;
//     var maxNumber7 = 6;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue7 = Math.floor(Math.random() * (maxNumber7 - minNumber7 + 1)) + minNumber7;

//     slider7Alea = randomValue7
//     slider7Rndm();
// }


// document.querySelector(".BA10").addEventListener("click", ()=>{
//     if (ClickDroite4==0){
//         ClickDroite4 = 1;
//         Slider7 = 1;
//     } else if (ClickDroite4==1){
//         document.querySelector(".TexteSlide6").innerHTML="Impulsif";
//         clickRndm7();
//     }   
// })




// // Slider 8 : Exploit

// var slider8Alea = 0

// function slider8Rndm(){
//     if (slider8Alea==1){
//         document.querySelector(".Slider8").classList.remove("Slider8_pos2");
//         document.querySelector(".Slider8").classList.remove("Slider8_pos3");
//         document.querySelector(".Slider8").classList.remove("Slider8_pos4");
//         document.querySelector(".Slider8").classList.remove("Slider8_pos5");
        
//         Slider8 = 1

//     } else if (slider8Alea==2){
//         document.querySelector(".Slider8").classList.add("Slider8_pos2");

//         document.querySelector(".Slider8").classList.remove("Slider8_pos3");
//         document.querySelector(".Slider8").classList.remove("Slider8_pos4");
//         document.querySelector(".Slider8").classList.remove("Slider8_pos5");

//         Slider8 = 2

//     } else if (slider8Alea==3){
//         document.querySelector(".Slider8").classList.add("Slider8_pos2");
//         document.querySelector(".Slider8").classList.add("Slider8_pos3");

//         document.querySelector(".Slider8").classList.remove("Slider8_pos4");
//         document.querySelector(".Slider8").classList.remove("Slider8_pos5");

//         Slider8 = 3
        
//     } else if (slider8Alea==4){
//         document.querySelector(".Slider8").classList.add("Slider8_pos2");
//         document.querySelector(".Slider8").classList.add("Slider8_pos3");
//         document.querySelector(".Slider8").classList.add("Slider8_pos4");
        
//         document.querySelector(".Slider8").classList.remove("Slider8_pos5");
//         Slider8 = 4
        
//     } else if (slider8Alea==5){
//         document.querySelector(".Slider8").classList.add("Slider8_pos2");
//         document.querySelector(".Slider8").classList.add("Slider8_pos3");
//         document.querySelector(".Slider8").classList.add("Slider8_pos4");
//         document.querySelector(".Slider8").classList.add("Slider8_pos5");
//         Slider8 = 5
        
//     } 
// }
// function clickRndm8(){
//     // Chiffres choisis
//     var minNumber8 = 1;
//     var maxNumber8 = 5;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValue8 = Math.floor(Math.random() * (maxNumber8 - minNumber8 + 1)) + minNumber8;

//     slider8Alea = randomValue8
//     slider8Rndm();
// }


// document.querySelector(".BA11").addEventListener("click", ()=>{
//     if (ClickDroite==0){

//     } else if (ClickDroite==1){
//         clickRndm8();
//         Desc5();
//     }
// })





// // Slider 9 : Statut

// var slider9Alea = 0


// function slider9Rndm(){
//     if (slider9Alea==1){
//         document.querySelector(".Slider9").classList.remove("Slider9_pos2");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos3");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos4");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos5");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos6");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");
        
//         Slider9 = 1

//     } else if (slider9Alea==2){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");

//         document.querySelector(".Slider9").classList.remove("Slider9_pos3");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos4");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos5");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos6");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");

//         Slider9 = 2

//     } else if (slider9Alea==3){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
        
//         document.querySelector(".Slider9").classList.remove("Slider9_pos4");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos5");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos6");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");

//         Slider9 = 3
        
//     } else if (slider9Alea==4){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
//         document.querySelector(".Slider9").classList.add("Slider9_pos4");
        
//         document.querySelector(".Slider9").classList.remove("Slider9_pos5");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos6");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");
//         Slider9 = 4
        
//     } else if (slider9Alea==5){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
//         document.querySelector(".Slider9").classList.add("Slider9_pos4");
//         document.querySelector(".Slider9").classList.add("Slider9_pos5");
        
//         document.querySelector(".Slider9").classList.remove("Slider9_pos6");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");
//         Slider9 = 5
        
//     } else if (slider9Alea==6){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
//         document.querySelector(".Slider9").classList.add("Slider9_pos4");
//         document.querySelector(".Slider9").classList.add("Slider9_pos5");
//         document.querySelector(".Slider9").classList.add("Slider9_pos6");
        
//         document.querySelector(".Slider9").classList.remove("Slider9_pos7");
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");
//         Slider9 = 6
        
//     } else if (slider9Alea==7){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
//         document.querySelector(".Slider9").classList.add("Slider9_pos4");
//         document.querySelector(".Slider9").classList.add("Slider9_pos5");
//         document.querySelector(".Slider9").classList.add("Slider9_pos6");
//         document.querySelector(".Slider9").classList.add("Slider9_pos7");
        
//         document.querySelector(".Slider9").classList.remove("Slider9_pos8");
//         Slider9 = 7
        
//     } else if (slider9Alea==8){
//         document.querySelector(".Slider9").classList.add("Slider9_pos2");
//         document.querySelector(".Slider9").classList.add("Slider9_pos3");
//         document.querySelector(".Slider9").classList.add("Slider9_pos4");
//         document.querySelector(".Slider9").classList.add("Slider9_pos5");
//         document.querySelector(".Slider9").classList.add("Slider9_pos6");
//         document.querySelector(".Slider9").classList.add("Slider9_pos7");
//         document.querySelector(".Slider9").classList.add("Slider9_pos8");
//         Slider9 = 8
        
//     }
// }



// document.querySelector(".BA12").addEventListener("click", ()=>{
//     if (ClickDroite2==0){
//         ClickDroite2 = 1;
//         Slider9 = 1;
//     } else if (ClickDroite2==1){
//         document.querySelector(".TexteSlide4").innerHTML="Citoyen";
//         clickRndm9();
//     }   
// })












// // Entrer le nom

// var BoutonNom = 0

// function Btn_Nom(){
//     if (BoutonNom==1){
//         document.querySelector(".BtnNomModifier").classList.add("none");
//         document.querySelector(".BtnNomValid").classList.remove("none");

//         document.querySelector(".TexteNom").classList.add("none");
//         document.querySelector(".InputNom").classList.remove("none");
//     } else if (BoutonNom==0){
//         document.querySelector(".BtnNomModifier").classList.remove("none");
//         document.querySelector(".BtnNomValid").classList.add("none");

//         document.querySelector(".TexteNom").classList.remove("none");
//         document.querySelector(".InputNom").classList.add("none");
//     }
// }

// document.querySelector(".BtnNomValid").addEventListener("click", ()=>{
//     BoutonNom = 0;
//     var EntrerNom = document.querySelector(".InputNom").value;
//     if (EntrerNom==""){
//         document.querySelector(".TexteNom").innerHTML="Nom";
//     } else {
//         document.querySelector(".TexteNom").innerHTML=EntrerNom;
//     }
    
//     Btn_Nom();
// })

// document.querySelector(".BtnNomModifier").addEventListener("click", ()=>{
//     BoutonNom = 1;
//     Btn_Nom();
// })


// var Age = 4

// document.querySelector(".AjouterAge").addEventListener("click", ()=>{
//     if (Age<70) {
//         Age=Age+1;
//         document.querySelector(".TexteAge").innerHTML=Age + " ans";
//     }
// })
// document.querySelector(".RetierAge").addEventListener("click", ()=>{
//     if (Age>5) {
//         Age=Age-1;
//         document.querySelector(".TexteAge").innerHTML=Age + " ans";
//     }
// })

// function AgeRndm(){
//     // Chiffres choisis
//     var minNumberAge = 5;
//     var maxNumberAge = 70;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValueAge = Math.floor(Math.random() * (maxNumberAge - minNumberAge + 1)) + minNumberAge;
    
//     Age = randomValueAge
    
//     document.querySelector(".TexteAge").innerHTML=Age + " ans";
// }

// document.querySelector(".BA4").addEventListener("click", ()=>{
//     AgeRndm();
// })




// // Sexe 

// var Sexe = -1

// function sexe(){
//     if (Sexe<0){

//     } else if (Sexe==0){
//         document.querySelector(".Homme").classList.add("BordureSexe");
//         document.querySelector(".Femme").classList.remove("BordureSexe");
//     } else if (Sexe==1){
//         document.querySelector(".Femme").classList.add("BordureSexe");
//         document.querySelector(".Homme").classList.remove("BordureSexe");
//     }
//     document.querySelector(".TexteNom").innerHTML="Nom";
//     document.querySelector(".InputNom").value = "";
// }

// document.querySelector(".Homme").addEventListener("click", ()=>{
//     if (ChoisirClasseAvatarC2==0){
//         ChoisirClasseAvatarC2=1
//     }
//     if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     }

//     Sexe = 0;
//     sexe();
    
// })
// document.querySelector(".Femme").addEventListener("click", ()=>{
//     if (ChoisirClasseAvatarC2==0){
//         ChoisirClasseAvatarC2=1
//     }
//     if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     }

//     Sexe = 1;
//     sexe();
// })

// function SexeRndm(){
//     // Chiffres choisis
//     var minNumberSexe = 0;
//     var maxNumberSexe = 1;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValueSexe = Math.floor(Math.random() * (maxNumberSexe - minNumberSexe + 1)) + minNumberSexe;
    
//     Sexe = randomValueSexe
// }
// document.querySelector(".BA13").addEventListener("click", ()=>{
//     if (ChoisirClasseAvatarC2==0){
//         ChoisirClasseAvatarC2=1
//     }
//     if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     }

//     SexeRndm();
//     sexe();
// })









// function NomRndm(){
//     if (Sexe==-1){
//         document.querySelector(".TexteBtnRndm").classList.remove("none");
//         setTimeout(()=>{
//             document.querySelector(".TexteBtnRndm").classList.add("none");
//         }, "2000")
//     } else if (Sexe==0){
//         // Chiffres choisis
//         var minNumberNomH = 1;
//         var maxNumberNomH = 15;

//         // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//         var randomValueNomH = Math.floor(Math.random() * (maxNumberNomH - minNumberNomH + 1)) + minNumberNomH;
        
//         NomH = randomValueNomH;


//         if (NomH==1){
//             document.querySelector(".TexteNom").innerHTML="Zephyr";
//             document.querySelector(".InputNom").value = "Zephyr";

//         } else if (NomH==2){
//             document.querySelector(".TexteNom").innerHTML="Orion";
//             document.querySelector(".InputNom").value = "Orion";

//         } else if (NomH==3){
//             document.querySelector(".TexteNom").innerHTML="Elio";
//             document.querySelector(".InputNom").value = "Elio";
            
//         } else if (NomH==4){
//             document.querySelector(".TexteNom").innerHTML="Lucius";
//             document.querySelector(".InputNom").value = "Lucius";
            
//         } else if (NomH==5){
//             document.querySelector(".TexteNom").innerHTML="Maximus";
//             document.querySelector(".InputNom").value = "Maximus";
            
//         } else if (NomH==6){
//             document.querySelector(".TexteNom").innerHTML="Silas";
//             document.querySelector(".InputNom").value = "Silas";
            
//         } else if (NomH==7){
//             document.querySelector(".TexteNom").innerHTML="Oberon";
//             document.querySelector(".InputNom").value = "Oberon";
            
//         } else if (NomH==8){
//             document.querySelector(".TexteNom").innerHTML="Caspian";
//             document.querySelector(".InputNom").value = "Caspian";
            
//         } else if (NomH==9){
//             document.querySelector(".TexteNom").innerHTML="Leander";
//             document.querySelector(".InputNom").value = "Leander";
            
//         } else if (NomH==10){
//             document.querySelector(".TexteNom").innerHTML="Alaric";
//             document.querySelector(".InputNom").value = "Alaric";
            
//         } else if (NomH==11){
//             document.querySelector(".TexteNom").innerHTML="Zephyrus";
//             document.querySelector(".InputNom").value = "Zephyrus";
            
//         } else if (NomH==12){
//             document.querySelector(".TexteNom").innerHTML="Thaddeus";
//             document.querySelector(".InputNom").value = "Thaddeus";
            
//         } else if (NomH==13){
//             document.querySelector(".TexteNom").innerHTML="Ignatius";
//             document.querySelector(".InputNom").value = "Ignatius";
            
//         } else if (NomH==14){
//             document.querySelector(".TexteNom").innerHTML="Peregrine";
//             document.querySelector(".InputNom").value = "Peregrine";
            
//         } else if (NomH==15){
//             document.querySelector(".TexteNom").innerHTML="Caelum";
//             document.querySelector(".InputNom").value = "Caleum";
            
//         }

//     } else if (Sexe==1){
//         // Chiffres choisis
//         var minNumberNomF = 1;
//         var maxNumberNomF = 15;

//         // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//         var randomValueNomF = Math.floor(Math.random() * (maxNumberNomF - minNumberNomF + 1)) + minNumberNomF;
        
//         NomF = randomValueNomF;


//         if (NomF==1){
//             document.querySelector(".TexteNom").innerHTML="Seraphina";
//             document.querySelector(".InputNom").value = "Seraphina";

//         } else if (NomF==2){
//             document.querySelector(".TexteNom").innerHTML="Isolde";
//             document.querySelector(".InputNom").value = "Isolde";

//         } else if (NomF==3){
//             document.querySelector(".TexteNom").innerHTML="Elysia";
//             document.querySelector(".InputNom").value = "Elysia";
            
//         } else if (NomF==4){
//             document.querySelector(".TexteNom").innerHTML="Lumielle";
//             document.querySelector(".InputNom").value = "Lumielle";
            
//         } else if (NomF==5){
//             document.querySelector(".TexteNom").innerHTML="Evadne";
//             document.querySelector(".InputNom").value = "Evadne";
            
//         } else if (NomF==6){
//             document.querySelector(".TexteNom").innerHTML="Calista";
//             document.querySelector(".InputNom").value = "Calista";
            
//         } else if (NomF==7){
//             document.querySelector(".TexteNom").innerHTML="Elowen";
//             document.querySelector(".InputNom").value = "Elowen";
            
//         } else if (NomF==8){
//             document.querySelector(".TexteNom").innerHTML="Aurelia";
//             document.querySelector(".InputNom").value = "Aurelia";
            
//         } else if (NomF==9){
//             document.querySelector(".TexteNom").innerHTML="Thalassa";
//             document.querySelector(".InputNom").value = "Thalassa";
            
//         } else if (NomF==10){
//             document.querySelector(".TexteNom").innerHTML="Elara";
//             document.querySelector(".InputNom").value = "Elara";
            
//         } else if (NomF==11){
//             document.querySelector(".TexteNom").innerHTML="Lyra";
//             document.querySelector(".InputNom").value = "Lyra";
            
//         } else if (NomF==12){
//             document.querySelector(".TexteNom").innerHTML="Melisande";
//             document.querySelector(".InputNom").value = "Melisande";
            
//         } else if (NomF==13){
//             document.querySelector(".TexteNom").innerHTML="Ophelia";
//             document.querySelector(".InputNom").value = "Ophelia";
            
//         } else if (NomF==14){
//             document.querySelector(".TexteNom").innerHTML="Isabeau";
//             document.querySelector(".InputNom").value = "Isabeau";
            
//         } else if (NomF==15){
//             document.querySelector(".TexteNom").innerHTML="Calliope";
//             document.querySelector(".InputNom").value = "Calliope";
            
//         }

//     }
    
// }
// document.querySelector(".BA2").addEventListener("click", ()=>{
//     BoutonNom = 0;
//     Btn_Nom();
//     NomRndm();
// })




// // Random Numéro Candidat

// var Candidat = 5000

// function NumCandidat(){
//     // Chiffres choisis
//     var minNumberCand = 5000;
//     var maxNumberCand = 5999;

//     // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
//     var randomValueCand = Math.floor(Math.random() * (maxNumberCand - minNumberCand + 1)) + minNumberCand;

//     CandNum = randomValueCand
//     document.querySelector(".TexteNumero1").innerHTML=CandNum;
// }
// NumCandidat();








// // Bouton tout aléatoire

// document.querySelector(".BA1").addEventListener("click", ()=>{
//     NumCandidat();
//     ChoisirClasseAvatarC1=1
//     ChoisirClasseAvatarC2=1
//     if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     }

//     if (ClickDroite==0){
//         ClickDroite = 1;
//         document.querySelector(".TexteSlide1").innerHTML="Guerrier";
//         Slider1 = 1;
//         clickRndm1();
//         classe();
//         clickRndm2();
//         clickRndm3();
//         clickRndm4();
//         clickRndm5();
//         ClickDroite3 = 1;
//         document.querySelector(".TexteSlide5").innerHTML="Charismatique";
//         Slider6 = 1;
//         clickRndm6();
//         ClickDroite4 = 1;
//         document.querySelector(".TexteSlide6").innerHTML="Impulsif";
//         Slider7 = 1;
//         clickRndm7();
//         clickRndm8();
//         ClickDroite2 = 1;
//         document.querySelector(".TexteSlide4").innerHTML="Citoyen";
//         Slider9 = 1;
//         clickRndm9();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//         AgeRndm();
//         SexeRndm();
//         sexe();
//         NomRndm();
//         document.querySelector(".CompChoisirClasse").classList.add("none");
//         document.querySelector(".AvatarChoisirClasse").classList.add("none");
//     } else if (ClickDroite==1){
//         ClickDroite = 1;
//         document.querySelector(".TexteSlide1").innerHTML="Guerrier";
//         Slider1 = 1;
//         clickRndm1();
//         classe();
//         clickRndm2();
//         clickRndm3();
//         clickRndm4();
//         clickRndm5();
//         ClickDroite3 = 1;
//         document.querySelector(".TexteSlide5").innerHTML="Charismatique";
//         Slider6 = 1;
//         clickRndm6();
//         document.querySelector(".TexteSlide6").innerHTML="Impulsif";
//         Slider7 = 1;
//         ClickDroite4 = 1;
//         clickRndm7();
//         clickRndm8();
//         ClickDroite2 = 1;
//         document.querySelector(".TexteSlide4").innerHTML="Citoyen";
//         Slider9 = 1;
//         clickRndm9();
//         Desc1();
//         Desc2();
//         Desc3();
//         Desc4();
//         Desc5();
//         AgeRndm();
//         SexeRndm();
//         sexe();
//         BoutonNom = 0;
//         Btn_Nom();
//         NomRndm();
//     }
// })





// // Bouton rechargement de la page

// document.querySelector(".BtnReinitialiser").addEventListener("click", ()=>{
//     location.reload();
// })

// // Bouton cacher tous les boutons

// var ClickCache = 0;

// document.querySelector(".BtnCache").addEventListener("click", ()=>{
//     if (ClickCache==0){
//         document.querySelector(".BA1").classList.add("none");

//         document.querySelector(".BA2").classList.add("none");
//         document.querySelector(".BA13").classList.add("none");
//         document.querySelector(".BA3").classList.add("none");
//         document.querySelector(".BA4").classList.add("none");
//         document.querySelector(".BA5").classList.add("none");
//         document.querySelector(".BA6").classList.add("none");
//         document.querySelector(".BA7").classList.add("none");
//         document.querySelector(".BA8").classList.add("none");
//         document.querySelector(".BA9").classList.add("none");
//         document.querySelector(".BA10").classList.add("none");
//         document.querySelector(".BA11").classList.add("none");
//         document.querySelector(".BA12").classList.add("none");


//         document.querySelector(".G1").classList.add("none");
//         document.querySelector(".G2").classList.add("none");
//         document.querySelector(".G3").classList.add("none");
//         document.querySelector(".G4").classList.add("none");
//         document.querySelector(".G5").classList.add("none");
//         document.querySelector(".G6").classList.add("none");
//         document.querySelector(".G7").classList.add("none");
//         document.querySelector(".G8").classList.add("none");
//         document.querySelector(".G9").classList.add("none");

//         document.querySelector(".D1").classList.add("none");
//         document.querySelector(".D2").classList.add("none");
//         document.querySelector(".D3").classList.add("none");
//         document.querySelector(".D4").classList.add("none");
//         document.querySelector(".D5").classList.add("none");
//         document.querySelector(".D6").classList.add("none");
//         document.querySelector(".D7").classList.add("none");
//         document.querySelector(".D8").classList.add("none");
//         document.querySelector(".D9").classList.add("none");


//         document.querySelector(".ChgerAge").classList.add("none");


//         document.querySelector(".BtnNomValid").classList.add("none");
//         document.querySelector(".BtnNomModifier").classList.add("none");



//         ClickCache = 1;
//     } else if (ClickCache==1){
//         document.querySelector(".BA1").classList.remove("none");

//         document.querySelector(".BA2").classList.remove("none");
//         document.querySelector(".BA13").classList.remove("none");
//         document.querySelector(".BA3").classList.remove("none");
//         document.querySelector(".BA4").classList.remove("none");
//         document.querySelector(".BA5").classList.remove("none");
//         document.querySelector(".BA6").classList.remove("none");
//         document.querySelector(".BA7").classList.remove("none");
//         document.querySelector(".BA8").classList.remove("none");
//         document.querySelector(".BA9").classList.remove("none");
//         document.querySelector(".BA10").classList.remove("none");
//         document.querySelector(".BA11").classList.remove("none");
//         document.querySelector(".BA12").classList.remove("none");


//         document.querySelector(".G1").classList.remove("none");
//         document.querySelector(".G2").classList.remove("none");
//         document.querySelector(".G3").classList.remove("none");
//         document.querySelector(".G4").classList.remove("none");
//         document.querySelector(".G5").classList.remove("none");
//         document.querySelector(".G6").classList.remove("none");
//         document.querySelector(".G7").classList.remove("none");
//         document.querySelector(".G8").classList.remove("none");
//         document.querySelector(".G9").classList.remove("none");

//         document.querySelector(".D1").classList.remove("none");
//         document.querySelector(".D2").classList.remove("none");
//         document.querySelector(".D3").classList.remove("none");
//         document.querySelector(".D4").classList.remove("none");
//         document.querySelector(".D5").classList.remove("none");
//         document.querySelector(".D6").classList.remove("none");
//         document.querySelector(".D7").classList.remove("none");
//         document.querySelector(".D8").classList.remove("none");
//         document.querySelector(".D9").classList.remove("none");


//         document.querySelector(".ChgerAge").classList.remove("none");


//         document.querySelector(".BtnNomValid").classList.remove("none");
//         document.querySelector(".BtnNomModifier").classList.remove("none");



//         ClickCache = 0;
//     }
    
// })