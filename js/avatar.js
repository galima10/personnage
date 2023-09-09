document.querySelector(".BtnSuivPerso").addEventListener("click", ()=>{
    document.querySelector(".ConcepteurAvatar").classList.add("none");
    document.querySelector(".EnsPerso").classList.replace("EnsPersoConcepteurAvatar", "EnsPersoConcepteur")
})

document.querySelector(".BtnModifierAv").addEventListener("click", ()=>{
    document.querySelector(".ConcepteurAvatar").classList.remove("none");
    document.querySelector(".EnsPerso").classList.replace("EnsPersoConcepteur", "EnsPersoConcepteurAvatar")
})



// JS pour le menu horizontale en haut
document.querySelectorAll(".Choix1").forEach(element => {
    element.addEventListener("click", () => {
        // Ajoute la classe "ChoixActuel" à l'élément cliqué
        element.classList.add("ChoixActuel");

        // Parcourt tous les autres éléments avec la classe "Choix1"
        document.querySelectorAll(".Choix1").forEach(otherElement => {
            // Vérifie si l'élément actuel n'est pas l'élément cliqué
            if (otherElement !== element) {
                // Supprime la classe "ChoixActuel" des autres éléments
                otherElement.classList.remove("ChoixActuel");
            }
        });

        if (element.id == "Visage"){
            document.querySelector(".MenuVisage").classList.remove("none")
            document.querySelector(".C-Visage").classList.remove("none")
            document.querySelector(".PaletteCouleur").classList.remove("none")
        } else {
            document.querySelector(".MenuVisage").classList.add("none")
            document.querySelector(".C-Visage").classList.add("none")
        }

        if (element.id == "Vetements"){
            document.querySelector(".MenuVetement").classList.remove("none")
            document.querySelector(".C-Vetements").classList.remove("none")
            document.querySelector(".PaletteCouleur").classList.remove("none")
        } else {
            document.querySelector(".MenuVetement").classList.add("none")
            document.querySelector(".C-Vetements").classList.add("none")
        }


        if (element.id == "General"){
            // document.querySelector(".MenuVisage").classList.remove("none")
            // document.querySelector(".C-Visage").classList.remove("none")
            document.querySelector(".PaletteCouleur").classList.add("none")
            
        } else {
            // document.querySelector(".MenuVisage").classList.add("none")
            // document.querySelector(".C-Visage").classList.add("none")
            
        }
    });
});



// JS pour le menu verticale à droite
document.querySelectorAll(".Choix2").forEach(element => {
    element.addEventListener("click", () => {
        // Ajoute la classe "ChoixActuel" à l'élément cliqué
        element.classList.add("ChoixActuel");

        // Parcourt tous les autres éléments avec la classe "Choix1"
        document.querySelectorAll(".Choix2").forEach(otherElement => {
            // Vérifie si l'élément actuel n'est pas l'élément cliqué
            if (otherElement !== element) {
                // Supprime la classe "ChoixActuel" des autres éléments
                otherElement.classList.remove("ChoixActuel");
            }
        });
        if (element.id == "choix-haut"){
            document.querySelector(".EnsChoixHaut").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixHaut").classList.add("none")
        }



        if (element.id == "choix-sourcil"){
            document.querySelector(".EnsChoixSourcils").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixSourcils").classList.add("none")
        }


        if (element.id == "choix-yeux"){
            document.querySelector(".EnsChoixYeux").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixYeux").classList.add("none")
        }


        if (element.id == "choix-oreille"){
            document.querySelector(".EnsChoixOreilles").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixOreilles").classList.add("none")
        }


        if (element.id == "choix-bouche"){
            document.querySelector(".EnsChoixBouche").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixBouche").classList.add("none")
        }


        if (element.id == "choix-nez"){
            document.querySelector(".EnsChoixNez").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixNez").classList.add("none")
        }


        if (element.id == "choix-cheveux"){
            document.querySelector(".EnsChoixCheveux").classList.remove("none")
        } else {
            document.querySelector(".EnsChoixCheveux").classList.add("none")
        }
    });
});




// JS pour les choix qui découlent du menu verticale à droite


sourcil = [
    ["sourcil1", "sourcil3", "sourcil5", "sourcil7"], // sourcil droit
    ["sourcil2", "sourcil4", "sourcil6", "sourcil8"] // sourcil grauche
]

yeux = [
    "yeux1", "yeux2", "yeux3", "yeux4", "yeux5"
]

bouche = [
    "smile1", "smile2", "smile3", "smile4", "smile5", "smile6", "smile7"
]

nez = [
    "nez1", "nez2", "nez3"
]




document.querySelectorAll(".ChoixDansContenu").forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("ChoixActuel");
        document.querySelectorAll(".ChoixDansContenu").forEach(otherElement => {
            if (otherElement !== element) {
                otherElement.classList.remove("ChoixActuel");
            }
        });
        if (element.id == "choix-sourcil-1"){
            document.querySelector("#sourcil1").classList = '';
            document.querySelector("#sourcil1").classList.add(sourcil[0][0]);

            document.querySelector("#sourcil2").classList = '';
            document.querySelector("#sourcil2").classList.add(sourcil[1][0]);
        } 

        if (element.id == "choix-sourcil-2"){
            document.querySelector("#sourcil1").classList = '';
            document.querySelector("#sourcil1").classList.add(sourcil[0][1]);

            document.querySelector("#sourcil2").classList = '';
            document.querySelector("#sourcil2").classList.add(sourcil[1][1]);
        } 

        if (element.id == "choix-sourcil-3"){
            document.querySelector("#sourcil1").classList = '';
            document.querySelector("#sourcil1").classList.add(sourcil[0][2]);

            document.querySelector("#sourcil2").classList = '';
            document.querySelector("#sourcil2").classList.add(sourcil[1][2]);
        } 

        if (element.id == "choix-sourcil-4"){
            document.querySelector("#sourcil1").classList = '';
            document.querySelector("#sourcil1").classList.add(sourcil[0][3]);

            document.querySelector("#sourcil2").classList = '';
            document.querySelector("#sourcil2").classList.add(sourcil[1][3]);
        } 


        if (element.id == "choix-yeux-1"){
            document.querySelectorAll("#yeux").forEach(element => {
                element.classList = '';
                element.classList.add("CouleurNoire");
                element.classList.add(yeux[0]);
            })
        }
        if (element.id == "choix-yeux-2"){
            document.querySelectorAll("#yeux").forEach(element => {
                element.classList = '';
                element.classList.add("CouleurNoire");
                element.classList.add(yeux[1]);
            })
        }
        if (element.id == "choix-yeux-3"){
            document.querySelectorAll("#yeux").forEach(element => {
                element.classList = '';
                element.classList.add("CouleurNoire");
                element.classList.add(yeux[2]);
            })
        }
        if (element.id == "choix-yeux-4"){
            document.querySelectorAll("#yeux").forEach(element => {
                element.classList = '';
                element.classList.add("CouleurNoire");
                element.classList.add(yeux[3]);
            })
        }
        if (element.id == "choix-yeux-5"){
            document.querySelectorAll("#yeux").forEach(element => {
                element.classList = '';
                element.classList.add("CouleurNoire");
                element.classList.add(yeux[4]);
            })
        }


        if (element.id == "choix-oreille-1"){
            document.querySelector("#oreille-point").classList.add("none");
        }
        if (element.id == "choix-oreille-2"){
            document.querySelector("#oreille-point").classList.remove("none");
        }


        if (element.id == "choix-bouche-1"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[0]);
        }
        if (element.id == "choix-bouche-2"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[1]);
        }
        if (element.id == "choix-bouche-3"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[2]);
        }
        if (element.id == "choix-bouche-4"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[3]);
        }
        if (element.id == "choix-bouche-5"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[4]);
        }
        if (element.id == "choix-bouche-6"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[5]);
        }
        if (element.id == "choix-bouche-7"){
            document.querySelector("#bouche").classList = '';
            document.querySelector("#bouche").classList.add(bouche[6]);
        }

        
        if (element.id == "choix-nez-1"){
            document.querySelector("#nez").classList = '';
            document.querySelector("#nez").classList.add("CouleurPeauHumaine2");
            document.querySelector("#nez").classList.add(nez[0]);
        }
        if (element.id == "choix-nez-2"){
            document.querySelector("#nez").classList = '';
            document.querySelector("#nez").classList.add("CouleurPeauHumaine2");
            document.querySelector("#nez").classList.add(nez[1]);
        }
        if (element.id == "choix-nez-3"){
            document.querySelector("#nez").classList = '';
            document.querySelector("#nez").classList.add("CouleurPeauHumaine2");
            document.querySelector("#nez").classList.add(nez[2]);
        }


        if (element.id == "choix-cheveux-1"){
            document.querySelectorAll("#cheveux").forEach(element =>{
                element.classList.add("none");
            })
        }
        if (element.id == "choix-cheveux-2"){
            document.querySelectorAll("#cheveux").forEach(element =>{
                element.classList.add("none");
            })
            document.querySelector(".coupeH1").classList.remove("none");
        }
        if (element.id == "choix-cheveux-3"){
            document.querySelectorAll("#cheveux").forEach(element =>{
                element.classList.add("none");
            })
            document.querySelector(".coupeH2").classList.remove("none");
        }



        if (element.id == "choix-haut-1"){
            document.querySelectorAll("#G-vet").forEach(element =>{
                element.classList.add("none");
            })
        }
        if (element.id == "choix-haut-2"){
            document.querySelectorAll("#G-vet").forEach(element =>{
                element.classList.add("none");
            })
            document.querySelector(".G-vet-1").classList.remove("none");
        }
        if (element.id == "choix-haut-3"){
            document.querySelectorAll("#G-vet").forEach(element =>{
                element.classList.add("none");
            })
            document.querySelector(".G-vet-2").classList.remove("none");
        }

    });
    
});
