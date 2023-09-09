





function random(nb1, nb2){
    return Math.floor(Math.random() * (nb2 - nb1 + 1)) + nb1
}

classePerso = [
    [
        "Guerrier",//nom de la classe


        ["Inflige des dégâts accrus à un ennemi ciblé.", "Effectue une attaque circulaire, touchant plusieurs ennemis à la fois.", "Augmente temporairement la force et la vitesse d'attaque de l'utilisateur et de ses alliés proches.", "Bloque et contre-attaque automatiquement une attaque ennemie.", "Se précipite vers un ennemi pour lui infliger des dégâts et le désorienter."], // Desc. comp. act. 1

        ["Frappe puissante", "Coup tournoyant", "Cri de guerre", "Parry", "Charge féroce"], // nom compétence active 1


        ["Saute en l'air pour atterrir violemment, infligeant des dégâts et étourdissant les ennemis touchés.", "Attire l'attention des ennemis pour les forcer à attaquer le guerrier plutôt que ses alliés.", "Tournoie avec une grande vitesse, infligeant des dégâts aux ennemis autour du guerrier.", "Effectue une attaque précise visant à réduire la résistance à la défense de l'ennemi.", "Entraîne une augmentation temporaire des dégâts infligés par le guerrier et une réduction de la défense de l'ennemi."], // Desc. comp. act. 2

        ["Saut d'écrasement", "Taunt", "Tourbillon de lame", "Brise-armure", "Cri de colère"], // nom comp. act. 2


        ["Augmente les points de vie maximum du guerrier.", "Améliore l'efficacité du guerrier dans l'utilisation de différentes armes.", "Diminue la durée des effets d'étourdissement subis par le guerrier.", "Augmente la probabilité d'esquiver les attaques ennemies.", "Réduit les délais de récupération entre les capacités actives du guerrier."], // Desc. comp. pass. 1

        ["Endurance renforcée", "Maîtrise des armes", "Résistance aux étourdissements", "Réflexes aiguisés", "Détermination"], // nom comp. pass. 1


        ["Augmente la taille et la résistance du guerrier, le rendant plus difficile à abattre.", "À chaque ennemi vaincu, le guerrier gagne temporairement des bonus de force et de vitesse d'attaque.", "Augmente les chances du guerrier d'infliger des coups critiques, infligeant des dégâts accrus.", "Lorsque les points de vie du guerrier sont bas, il gagne temporairement une résistance accrue aux dégâts.", "Les alliés proches du guerrier bénéficient d'un petit bonus de statistiques grâce à sa présence inspirante sur le champ de bataille."], // Desc. comp. pass. 2

        ["Colosse", "Ferveur de combat", "Coup critique", "Instinct de survie", "Aura inspirante"], // nom comp. pass. 2


        ["Le guerrier a mené une bataille contre une horde de gobelins, montrant sa supériorité en combat rapproché.", "Le guerrier a vaincu un géant des montagnes dans un duel épique, démontrant sa force exceptionnelle.", "Le guerrier a joué un rôle crucial dans la défense d'une cité attaquée par des forces ennemies, repoussant les assaillants.", "Le guerrier a remporté un prestigieux tournoi de combat, prouvant sa maîtrise des techniques martiales.", "Le guerrier a mené une mission audacieuse pour sauver un prince capturé par des brigands, gagnant la gratitude de la royauté."], // Desc exploit

        ["Augmentation de la résistance aux dégâts physiques.", "Augmentation de la force physique.", "Augmentation de la résistance aux dégâts magiques.", "Augmentation de la vitesse d'attaque.", "Augmentation de la régénération de santé en combat."], // Desc bonus exploit

        ["Écrasement de la horde gobeline", "Triomphe contre le géant des montagnes", "Défense héroïque de la cité assiégée", "Champion du tournoi des rois", "Sauvetage du prince captif"] // nom exploit

    ],

    [
        "Mage",//nom de la classe
        
        ["Lance un projectile de feu sur un ennemi, infligeant des dégâts de feu.", "Lance un éclair électrique sur un ennemi, infligeant des dégâts de foudre et potentiellement paralysant.", "Tire un rayon de froid intense sur un ennemi, infligeant des dégâts de glace et ralentissant les mouvements.", "Se déplace instantanément vers un emplacement ciblé.", "Crée un bouclier magique pour absorber les dégâts pendant un certain temps."], // Desc comp. act. 1

        ["Boule de feu", "Éclair de foudre", "Rayon glacial", "Téléportation", "Barrière d'énergie"], // nom comp. act. 1


        ["Libère une explosion d'énergie magique autour du mage, infligeant des dégâts aux ennemis à proximité.", "Crée une illusion pour détourner l'attention des ennemis et se rendre temporairement invisible.", "Transforme un ennemi en une créature inoffensive pendant un court laps de temps.", "Utilise la magie pour guérir les blessures et restaurer les points de vie du mage ou d'un allié.", "Prend brièvement le contrôle d'un ennemi pour qu'il agisse en faveur du mage."], // Desc. comp. act. 2

        ["Nova arcanique", "Illusion duperie", "Métamorphose", "Soins spirituels", "Contrôle mental"], // nom comp. act. 2


        ["Augmente les dégâts infligés par les sorts du mage dans un élément spécifique (feu, glace, foudre, etc.).", "Augmente la vitesse d'apprentissage des sorts et réduit les coûts en ressources magiques.", "Diminue les dégâts subis par les attaques magiques.", "Améliore l'efficacité des glyphes et des enchantements utilisés par le mage.", "Réduit les chances que les sorts du mage soient interrompus par des attaques ennemies."], // Desc. comp. pass. 1

        ["Affinité élémentaire", "Étude arcanique", "Résistance magique", "Maîtrise des runes", "Concentration profonde"], // nom comp. pass. 1


        ["Permet au mage de détecter des éléments cachés ou des faiblesses magiques dans son environnement.", "Réduit le temps de récupération entre les sorts du mage.", "Augmente la portée et la précision des sorts à distance du mage.", "Si le mage utilise le même sort plusieurs fois, son efficacité augmente progressivement.", "À la mort du mage, il explose en libérant une onde d'énergie magique qui inflige des dégâts aux ennemis à proximité."], // Desc. comp. pass. 2

        ["Vision astrale", "Canalisation stable", "Clairvoyance", "Résonance magique", "Essence volatile"], // nom comp. pass. 2


        ["Le mage a réussi à maîtriser les quatre éléments (feu, eau, air, terre) et à les manipuler avec habileté.", "Le mage a triomphé d'un sorcier noir puissant qui menaçait d'engloutir le royaume dans les ténèbres.", "Le mage a récupéré une relique ancienne enfermée dans un sanctuaire protégé par des sortilèges complexes.", "Le mage a étudié et maîtrisé des sorts issus de textes ésotériques, gagnant un savoir magique rare.", "Le mage a exploré des dimensions alternatives et en est revenu avec une compréhension profonde des flux temporels."], // Desc exploit

        ["Augmentation des dégâts infligés par les sorts élémentaires.", "Augmentation de la résistance aux dégâts magiques.", "Augmentation de la régénération de ressources magiques.", "Réduction du temps de récupération entre les sorts.", "Augmentation de la vitesse de lancement des sorts."], // Desc bonus exploit

        ["Dompteur des éléments", "Défaite du sorcier noir", "Libérateur de la relique ancienne", "Érudit de la connaissance interdite", "Voyageur des dimensions"] // nom exploit

    ],

    [
        "Voleur",//nom de la classe
        

        ["Inflige des dégâts accrus à un ennemi en profitant de ses points faibles.", "Devient invisible aux yeux des ennemis, permettant de se déplacer sans être détecté pendant un certain temps.", "Dérobe un objet ou de l'argent à un ennemi ou à un PNJ sans être remarqué.", "Place un piège invisible qui se déclenche lorsque les ennemis passent à proximité, les immobilisant ou leur infligeant des dégâts.", "Se déplace instantanément sur une courte distance pour échapper aux dangers ou se positionner stratégiquement."], // Desc. comp. act. 1

        ["Attaque sournoise", "Furtivité", "Vol à la tire", "Piège dissimulé", "Disparition rapide"], // nom comp. act. 1


        ["Enduit ses armes de poison, infligeant des dégâts supplémentaires et causant un affaiblissement à l'ennemi touché.", "Ouvre des serrures pour accéder à des portes verrouillées ou des coffres au trésor.", "Effectue une série de mouvements agiles pour éviter les attaques ennemies.", "Élimine silencieusement un ennemi en un coup mortel lorsque celui-ci est inconscient ou distrait.", "Crée une diversion pour détourner l'attention des ennemis et faciliter le passage en furtivité."], // Desc. comp. act. 2

        ["Poison mortel", "Crochetage", "Esquive acrobatique", "Assassinat silencieux", "Distraction rusée"], // nom comp. act. 2


        ["Augmente la vitesse de déplacement du voleur.", "Diminue la distance à laquelle les ennemis peuvent repérer le voleur en furtivité.", "Augmente les chances de trouver des objets rares ou de grande valeur lors du vol à la tire ou de la fouille.", "Augmente la capacité du voleur à repérer les pièges dissimulés.", "Réduit la durée des effets de contrôle comme l'étourdissement ou l'immobilisation."], // Desc. comp. pass. 1

        ["Agilité innée", "Maître du camouflage", "Chance du voleur", "Détecteur de pièges", "Volonté inébranlable"], // nom comp. pass. 1


        ["Si le voleur esquive une attaque ennemie, il a une chance de riposter automatiquement.", "Augmente les dégâts infligés lors d'une attaque sournoise ou d'une esquive.", "Améliore les réflexes du voleur en furtivité, réduisant les chances d'être surpris.", "Réduit le coût en énergie des capacités d'évasion et de déplacement du voleur.", "Les alliés proches du voleur bénéficient d'un petit bonus de statistiques lorsque celui-ci est en furtivité ou lorsqu'il exécute des attaques sournoises."], // Desc. comp. pass. 2

        ["Contre-attaque", "Agilité destructrice", "Synchronisation des sens", "Mouvements fluides", "Aura d'opportunisme"], // nom comp. pass. 2


        ["Le voleur a réussi à infiltrer une forteresse bien gardée sans jamais être détecté, faisant preuve d'une furtivité exceptionnelle.", "Le voleur est renommé pour avoir volé des trésors inestimables sans laisser de trace, montrant une expertise en vol à la tire.", "Le voleur a appris à créer des poisons mortels et des onguents pour enduire ses armes, infligeant des dégâts supplémentaires à ses ennemis.", "Le voleur est reconnu pour sa capacité à ouvrir toutes sortes de serrures, même les plus complexes, en un rien de temps.", "Le voleur a réussi à échapper à la capture en se fondant dans l'obscurité et en échappant à ses poursuivants."], // Desc exploit

        ["Augmentation de la vitesse de déplacement en furtivité.", "Augmentation des chances de réussite lors du vol à la tire.", "Augmentation des dégâts infligés par les attaques empoisonnées.", "Réduction du temps nécessaire pour crocheter les serrures.", "Augmentation de la résistance aux effets de contrôle lors de l'utilisation de compétences d'évasion."], // Desc bonus exploit

        ["Maître de l'ombre", "Le cambrioleur légendaire", "Artisan des poisons", "Le maître des serrures", "Ombre de la nuit"] // nom exploit

    ],
    
    [
        "Archer",//nom de la classe
        

        ["Tire une flèche avec une grande précision, infligeant des dégâts accrus à un ennemi ciblé.", "Tire une flèche qui traverse plusieurs ennemis en ligne droite, infligeant des dégâts à chacun.", "Tire plusieurs flèches en succession rapide sur un groupe d'ennemis.", "Enflamme une flèche avant de la tirer, infligeant des dégâts de feu à l'ennemi touché.", "Tire une flèche en direction d'un ennemi hors de vue, basé sur une estimation."], // Desc. comp. act. 1

        ["Tir précis", "Flèche perforante", "Salve rapide", "Flèche enflammée", "Tir à l'aveugle"], // nom comp. act. 1


        ["Enduit une flèche de poison pour infliger des dégâts sur la durée à l'ennemi touché.", "Tire une flèche qui se divise en plusieurs projectiles, touchant plusieurs cibles à la fois.", "Prend un moment pour viser soigneusement, infligeant des dégâts massifs à un ennemi.", "Tire une flèche qui assomme temporairement l'ennemi touché.", "Tire une flèche à une distance extrême avec une précision étonnante."], // Desc. comp. act. 2

        ["Flèche empoisonnée", "Tir de dispersion", "Précision meurtrière", "Tir d'étourdissement", "Tir à longue portée"], // nom comp. act. 2


        ["Augmente la portée de tir de l'archer.", "Augmente les dégâts infligés par des types spécifiques de flèches (enflammées, empoisonnées, etc.).", "Réduit les perturbations causées par le mouvement lors du tir.", "Accélère le temps nécessaire pour recharger un arc.", "Augmente les chances de réaliser des coups critiques avec les flèches."], // Desc. comp. pass. 1

        ["Œil d'aigle", "Flèches variées", "Concentration du tireur", "Vitesse de rechargement", "Flèches acérées"], // nom comp. pass. 1


        ["Augmente la distance à laquelle l'archer peut repérer les ennemis.", "Améliore la précision des tirs en mouvement.", "Si l'archer réussit un coup critique, il a une chance d'enchainer automatiquement avec un tir supplémentaire.", "Augmente les chances de tirer dans des positions difficiles (tir à l'envers, en sautant, etc.).", "Permet à l'archer de se déplacer plus rapidement tout en maintenant son arc bandé, facilitant les tirs en mouvement."], // Desc. comp. pass. 2

        ["Observation constante", "Instinct de visée", "Enchaînement rapide", "Flexibilité du tir", "Finesse du tireur"], // nom comp. pass. 2


        ["L'archer est renommé pour ses tirs précis et dévastateurs à longue portée, ayant abattu des cibles difficiles à atteindre.", "L'archer a éliminé un ennemi important d'un seul tir, changeant le cours d'une bataille décisive.", "L'archer a traqué et abattu des créatures dangereuses, prouvant sa maîtrise des combats contre des ennemis sauvages.", "L'archer est capable de maintenir une précision remarquable même en mouvement, touchant ses ennemis tout en évitant les attaques.", "L'archer a réussi à sortir indemne de plusieurs embuscades et à éliminer ses assaillants avec rapidité et précision."], // Desc exploit

        ["Augmentation des dégâts infligés par les tirs à longue portée.", "Augmentation des chances de réaliser des coups critiques avec les tirs.", "Augmentation des dégâts infligés aux ennemis non-humanoïdes.", "Augmentation de la précision des tirs en mouvement.", "Augmentation de la vitesse de déplacement en combat."], // Desc bonus exploit

        ["Tireur d'élite", "Le dernier tir parfait", "Chasseur de monstres", "Tireur en mouvement", "Survivant des embuscades"] // nom exploit

    ],
    
    [
        "Nécromancien",//nom de la classe
        

        ["Fait surgir des squelettes ou des zombies pour combattre aux côtés du nécromancien.", "Projette une main spectral qui inflige des dégâts à distance et peut drainer la vie de l'ennemi touché.", "Jette une malédiction sur un ennemi, lui infligeant des dégâts sur la durée et affaiblissant ses capacités.", "Absorbe la vie des ennemis proches pour restaurer la santé du nécromancien.", "Crée une explosion d'énergie nécrotique qui inflige des dégâts aux ennemis autour du nécromancien."], // Desc. comp. act. 1

        ["Appel des morts", "Main de l'ombre", "Malédiction funeste", "Siphon de vie", "Éruption morbide"], // nom comp. act. 1


        ["Invoque un esprit spectral pour combattre aux côtés du nécromancien et lui conférer des avantages temporaires.", "Marque un ennemi, augmentant les dégâts qu'il subit et permettant au nécromancien de drainer sa vie.", "Prend brièvement le contrôle d'un ennemi mort-vivant pour qu'il agisse en faveur du nécromancien.", "Libère une tempête d'énergie sombre qui inflige des dégâts aux ennemis dans la zone.", "Échange une partie de la santé du nécromancien contre des dégâts directs infligés à l'ennemi."], // Desc. comp. act. 2

        ["Invocation spectrale", "Marque de la mort", "Contrôle des âmes", "Tempête de corruption", "Transfusion macabre"], // nom comp. act. 2


        ["Améliore les compétences et la puissance des serviteurs invoqués par le nécromancien.", "Les alliés proches du nécromancien bénéficient d'un léger regain de santé grâce à son aura nécrotique.", "Augmente les dégâts nécrotiques infligés par le nécromancien.", "Diminue les dégâts nécrotiques subis par le nécromancien.", "Les sorts de soin du nécromancien sont plus efficaces sur les morts-vivants."], // Desc. comp. pass. 1

        ["Maître des morts-vivants", "Aura nécrotique", "Affinité pour la mort", "Résistance à la corruption", "Transmutation vitale"], // nom comp. pass. 1


        ["Réduit les chances que les ennemis ciblent le nécromancien en premier dans un combat.", "Augmente la durée des malédictions et des dégâts sur la durée infligés par le nécromancien.", "Lorsque le nécromancien inflige des dégâts nécrotiques, il a une chance de restaurer sa propre santé.", "Les sorts de contrôle des morts-vivants du nécromancien sont plus difficiles à briser.", "Augmente les dégâts des sorts nécrotiques du nécromancien lorsque la luminosité ambiante est faible."], // Desc. comp. pass. 2

        ["Aura effrayante", "Envoûtement persistant", "Drain de vitalité", "Subjugation des âmes", "Appel des ténèbres"], // nom comp. pass. 2


        ["Le nécromancien a réussi à contrôler une armée de morts-vivants, démontrant sa maîtrise sur les forces de l'au-delà.", "Le nécromancien a défait un chevalier autrefois valeureux, désormais un mort-vivant corrompu, en utilisant sa propre magie noire contre lui.", "Le nécromancien a récupéré un artefact maudit aux pouvoirs obscurs, gagnant une compréhension profonde des énergies nécrotiques.", "Le nécromancien a exploré des tombes oubliées et en est revenu avec des connaissances sur les rituels de résurrection et les secrets des morts.", "Le nécromancien a ouvert des portails entre les mondes, permettant aux morts de traverser temporairement pour combattre à ses côtés."], // Desc exploit

        ["Augmentation de la durée de vie et des dégâts infligés par les serviteurs invoqués.", "Augmentation de la puissance des sorts nécrotiques.", "Augmentation de la régénération de ressources magiques liées à la nécromancie.", "Réduction du temps de recharge des sorts de résurrection et d'invocation.", "Augmentation de la vitesse de lancement des sorts de nécromancie."], // Desc bonus exploit

        ["Dominateur des morts-vivants", "Triomphe contre le chevalier déchu", "Récupération de l'artefact maudit", "Explorateur des tombes anciennes", "Conquérant des barrières de la vie et de la mort"] // nom exploit

    ],
    
    [
        "Prêtre",//nom de la classe
        

        ["Restaure les points de vie d'un allié blessé.", "Invoque une lumière sacrée qui soigne tous les alliés dans la zone.", "Protège un allié en réduisant les dégâts qu'il subit pendant un temps limité.", "Inflige des dégâts à un ennemi des forces obscures ou non-mortes.", "Ramène un allié mort à la vie avec une partie de ses points de vie."], // Desc. comp. act. 1

        ["Soin curatif", "Lumière purificatrice", "Bénédiction de protection", "Exorcisme", "Résurrection"], // nom comp. act. 1


        ["Augmente les statistiques des alliés proches pendant un certain temps.", "Concentre l'énergie divine pour infliger des dégâts aux ennemis et restaurer la santé des alliés.", "Soigne tous les alliés dans un rayon donné, répartissant le total de guérison entre eux.", "Crée une aura autour du prêtre qui guérit progressivement tous les alliés dans la zone.", "Supprime les effets néfastes d'un allié et le protège contre de nouveaux effets pendant un court moment."], // Desc. comp. act. 2

        ["Prière d'inspiration", "Canalisation de l'énergie", "Soin de groupe", "Aura divine", "Absolution"], // nom comp. act. 2


        ["Augmente l'efficacité des sorts de guérison du prêtre.", "Les alliés proches du prêtre bénéficient d'une régénération continue de santé.", "Réduit le temps de recharge des capacités de guérison du prêtre.", "Diminue les dégâts infligés par les sorts obscurs ou maléfiques au prêtre.", "Réduit la durée des effets de contrôle (étourdissement, silence, etc.) subis par le prêtre."], // Desc. comp. pass. 1

        ["Ferveur spirituelle", "Aura sacrée", "Dévotion absolue", "Résistance divine", "Foi inébranlable"], // nom comp. pass. 1


        ["Augmente les dégâts infligés par les sorts offensifs du prêtre.", "Le prêtre peut sacrifier une partie de sa propre santé pour restaurer celle d'un allié blessé.", "Le prêtre a une chance de réduire les coûts en ressources magiques de ses sorts de guérison.", "Réduit la probabilité que les sorts du prêtre soient résistés ou annulés par des effets adverses.", "Les alliés proches du prêtre obtiennent une légère résistance aux dégâts des éléments et aux effets négatifs."], // Desc. comp. pass. 2

        ["Puissance bénie", "Lien spirituel", "Charité divine", "Clarté spirituelle", "Bénédiction de résistance"], // nom comp. pass. 2


        ["Le prêtre a soigné de nombreux soldats blessés sur le champ de bataille, sauvant des vies lors de conflits acharnés.", "Le prêtre a exorcisé une créature possédée par des forces obscures, utilisant sa foi pour renvoyer les esprits malfaisants.", "Le prêtre a béni des objets ou des lieux avec des pouvoirs sacrés, apportant la protection divine aux gens et aux endroits touchés.", "Le prêtre a guidé un groupe de réfugiés à travers des terres dangereuses, les protégeant des dangers et de l'épuisement.", "Le prêtre a purifié une source d'eau contaminée par des énergies sombres, rendant son eau à nouveau pure et nourrissante."], // Desc exploit

        ["Augmentation de l'efficacité des sorts de guérison.", "Augmentation de la résistance aux dégâts magiques.", "Augmentation des résistances élémentaires.", "Augmentation de la régénération de santé hors combat.", "Augmentation de la régénération de ressources magiques."], // Desc bonus exploit

        ["Guérisseur de bataille", "Exorcisme de la créature maléfique", "Bénédictions des éléments sacrés", "Guide spirituel des réfugiés", "Rétablissement de la source divine"] // nom exploit

    ],
    
    [
        "Cowboy",//nom de la classe
        

        ["Effectue une série de tirs rapides sur un ennemi.", "Lance un lasso pour attraper et immobiliser un ennemi à distance.", "Défie un ennemi en un duel, où la précision et la vitesse du cowboy sont mises à l'épreuve.", "Prend le temps de viser et de tirer avec précision sur un ennemi éloigné.", "Fait charger son cheval pour infliger des dégâts et étourdir les ennemis touchés."], // Desc. comp. act. 1

        ["Tir rapide", "Lancer de lasso", "Duel à l'ancienne", "Tir à longue portée", "Coup de pied du cheval"], // nom comp. act. 1


        ["Assène un coup puissant avec la crosse de son arme pour étourdir l'ennemi.", "Lance un bâton de dynamite pour infliger des dégâts massifs dans une zone.", "Identifie les ennemis cachés dans une zone donnée.", "Réduit le temps nécessaire pour recharger les armes à feu.", "Tire plusieurs coups de feu sur une zone ciblée pour toucher plusieurs ennemis."], // Desc. comp. act. 2

        ["Coup de poing du colt", "Dynamitage", "Flair pour le danger", "Rechargement rapide", "Salve de tirs"], // nom comp. act. 2


        ["Augmente la précision des tirs du cowboy.", "Améliore la vitesse de rechargement des armes à feu.", "Réduit les effets de contrôle (étourdissement, immobilisation, etc.) subis par le cowboy.", "Augmente la vitesse de déplacement du cowboy dans des environnements extérieurs.", "Améliore la maniabilité et la vitesse du cheval du cowboy."], // Desc. comp. pass. 1

        ["Visée précise", "Rapidité du tireur", "Résistance à la pression", "Instinct du désert", "Coordination homme-cheval"], // nom comp. pass. 1


        ["Augmente les points de vie maximum du cowboy.", "Augmente les chances du cowboy d'infliger des coups critiques avec ses armes à feu.", "Le cowboy a une meilleure chance de détecter les pièges et les embuscades.", "Le cowboy est plus apte à éviter les attaques en effectuant des mouvements agiles.", "Les alliés proches du cowboy bénéficient d'un petit bonus de statistiques grâce à sa présence encourageante sur le champ de bataille."], // Desc. comp. pass. 2

        ["Dur à cuire", "Coup critique du pistolet", "Sens des pièges", "Évasion acrobatique", "Inspiration cow-boy"], // nom comp. pass. 2


        ["Le cowboy a réussi à apprivoiser et à maîtriser des créatures sauvages redoutables, montrant son expertise dans le dressage animal.", "Le cowboy a mis fin à une bande de hors-la-loi qui terrorisait les terres frontalières, démontrant sa détermination à faire régner la justice.", "Le cowboy a défendu une ville isolée contre une attaque de bandits, prouvant sa loyauté envers sa communauté.", "Le cowboy a remporté de nombreux tournois de rodéo en démontrant son agilité et sa maîtrise de la monte de taureaux sauvages.", "Le cowboy a réussi à s'échapper d'une embuscade tendue par des ennemis supérieurs en nombre en utilisant sa ruse et ses compétences en survie."], // Desc exploit

        ["Augmentation des dégâts infligés par les attaques montées.", "Augmentation de la résistance aux dégâts physiques.", "Augmentation de la régénération de santé en combat.", "Réduction du temps de recharge des compétences de monte et d'équitation.", "Augmentation de la vitesse de déplacement en combat."], // Desc bonus exploit

        ["Dompteur de bêtes sauvages", "Triomphe contre les hors-la-loi", "Sauveur de la ville en péril", "Champion du rodéo", "Évasion audacieuse"] // nom exploit

    ],
    
    [
        "Sorcier",//nom de la classe
        

        ["Tire un projectile énergétique sur un ennemi.", "Crée un bouclier magique pour se protéger contre les attaques ennemies.", "Invoque une créature élémentaire (feu, eau, air, terre) pour combattre aux côtés du sorcier.", "Tire un rayon de glace sur un ennemi, infligeant des dégâts et ralentissant ses mouvements.", "Transforme temporairement un ennemi en une créature inoffensive."], // Desc. comp. act. 1

        ["Projectile magique", "Bouclier arcanique", "Invocation élémentaire", "Rayon de glace", "Métamorphose"], // nom comp. act. 1


        ["Se téléporte instantanément vers un endroit spécifié.", "Crée une sphère de feu qui explose en infligeant des dégâts aux ennemis dans la zone.", "Lance une malédiction sur un ennemi, l'affaiblissant ou l'empêchant d'utiliser certaines capacités.", "Libère un puissant éclair sur un ennemi, infligeant des dégâts de foudre.", "Crée une explosion d'énergie magique qui blesse les ennemis dans la zone."], // Desc. comp. act. 2

        ["Téléportation", "Flamme infernale", "Maléfice", "Éclair déchaîné", "Nova astrale"], // nom comp. act. 2


        ["Améliore l'efficacité des sorts du sorcier dans un élément spécifique.", "Réduit le temps de récupération entre les sorts du sorcier.", "Augmente la quantité de ressources magiques disponibles pour le sorcier.", "Diminue les chances que les sorts du sorcier soient interrompus par des attaques ennemies.", "Améliore l'efficacité des glyphes et des enchantements utilisés par le sorcier."], // Desc. comp. pass. 1

        ["Affinité élémentaire", "Canalisation stable", "Énergie magique renforcée", "Focalisation mentale", "Maîtrise des runes"], // nom comp. pass. 1


        ["Si le sorcier utilise le même sort plusieurs fois, son efficacité augmente progressivement.", "Permet au sorcier de voir des éléments cachés ou des faiblesses magiques dans son environnement.", "À la mort du sorcier, il libère une onde d'énergie magique qui inflige des dégâts aux ennemis à proximité.", "Lorsque les points de vie du sorcier sont bas, il gagne temporairement une résistance accrue aux dégâts.", "Les alliés proches du sorcier bénéficient d'un petit bonus de statistiques grâce à sa présence magiquement renforcée sur le champ de bataille."], // Desc. comp. pass. 2

        ["Résonance mystique", "Vision arcanique", "Essence éthérée", "Instinct magique", "Aura enchantée"], // nom comp. pass. 2


        ["Le sorcier a maîtrisé la fusion de plusieurs éléments pour créer des éclats magiques puissants, témoignant de sa maîtrise des forces naturelles.", "Le sorcier a triomphé d'un seigneur des ombres redoutable en utilisant ses propres énergies magiques pour repousser les ténèbres.", "Le sorcier a exploré d'anciennes archives magiques et en est revenu avec des sorts anciens perdus depuis longtemps.", "Le sorcier a altéré la réalité autour de lui pour détourner une catastrophe imminente, prouvant sa maîtrise des lois magiques fondamentales.", "Le sorcier a voyagé dans des dimensions interdites, gagnant une compréhension profonde des énergies magiques et de la manipulation des dimensions."], // Desc exploit

        ["Augmentation des dégâts infligés par les sorts élémentaires combinés.", "Augmentation de la résistance aux dégâts magiques.", "Réduction du temps de recharge des sorts anciens.", "Augmentation de la résistance aux effets magiques de contrôle.", "Augmentation de la vitesse de lancement des sorts de portail et de dimension."], // Desc bonus exploit

        ["Domination des éclats élémentaires", "Victoire contre le seigneur des ombres", "Connaissance des archives arcaniques", "Sculpteur de réalités", "Explorateur des dimensions interdites"] // nom exploit

    ],
    
];


descPerso = [
    
    ["Charismatique", "Courageux", "Altruiste", "Intelligent", "Déterminé", "Honnête"], // Qualités

    ["Impulsif", "Méfiant", "Têtu", "Égoïste", "Impatient", "Susceptible"], // Défauts

    ["Citoyen", "Noble", "Vagabond", "Réfugié", "Criminel", "Ermite", "Mercenaire", "Soldat"], // Statut

]


classActuel = 0
compAct1 = 0
compAct2 = 0
compPass1 = 0
compPass2 = 0
exploit = 0
qualite = 0
defaut = 0
statut = 0



function updateText(type) {
    ca1 = 0;
    ca2 = 0;
    cp1 = 0;
    cp2 = 0;
    expl = 0;
    if (type == "classe") {

        document.querySelector(".DescC1").textContent = classePerso[classActuel][1][0];  
        document.querySelector(".DescC2").textContent = classePerso[classActuel][3][0];  
        document.querySelector(".DescC3").textContent = classePerso[classActuel][5][0];  
        document.querySelector(".DescC4").textContent = classePerso[classActuel][7][0];
        document.querySelector(".DescC5").textContent = classePerso[classActuel][9][0];
        document.querySelector(".DescC6").textContent = classePerso[classActuel][10][0];

        // Sélectionner tous les éléments avec la classe .slider-container-comp
        const sliderContainers = document.querySelectorAll('.slider-container-comp');

        // Parcourir chaque container et trouver les div avec la classe .slider à l'intérieur
        sliderContainers.forEach(container => {
            const slidersDansContainer = container.querySelectorAll('.slider');
            slidersDansContainer.forEach(slider => {
                // Appliquer la transformation de votre choix, par exemple :
                slider.style.transform = 'translateX(0px)';
            });
        });
        // Sélectionner tous les éléments avec la classe .slider-container-exploit
        const sliderContainer = document.querySelectorAll('.slider-container-exploit');

        // Parcourir chaque container et trouver les div avec la classe .slider à l'intérieur
        sliderContainer.forEach(container => {
            const slidersDansContainer = container.querySelectorAll('.slider');
            slidersDansContainer.forEach(slider => {
                // Appliquer la transformation de votre choix, par exemple :
                slider.style.transform = 'translateX(0px)';
            });
        });


        document.querySelectorAll("#comp-act-1-slider > .slider > div > div").forEach(element => {
            element.textContent = classePerso[classActuel][2][ca1];
            ca1++;
        })
        document.querySelectorAll("#comp-act-2-slider > .slider > div > div").forEach(element => {
            element.textContent = classePerso[classActuel][4][ca2];
            ca2++;
        })
        document.querySelectorAll("#comp-pass-1-slider > .slider > div > div").forEach(element => {
            element.textContent = classePerso[classActuel][6][cp1];
            cp1++;
        })
        document.querySelectorAll("#comp-pass-2-slider > .slider > div > div").forEach(element => {
            element.textContent = classePerso[classActuel][8][cp2];
            cp2++;
        })
        document.querySelectorAll("#exploit-slider > .slider > div > div").forEach(element => {
            element.textContent = classePerso[classActuel][11][expl];
            expl++;
        })
        
        document.querySelector(".TDescC1").textContent = classePerso[classActuel][2][compAct1] + " : ";  
        document.querySelector(".TDescC2").textContent = classePerso[classActuel][4][compAct2] + " : "; 
        document.querySelector(".TDescC3").textContent = classePerso[classActuel][6][compPass1] + " : ";  
        document.querySelector(".TDescC4").textContent = classePerso[classActuel][8][compPass2] + " : "; 
        document.querySelector(".TDescC5").textContent = classePerso[classActuel][11][compPass2] + " : "; 
        document.querySelector(".TDescC6").textContent = "Bonus : "; 

    }
    else if (type == "compAct1") {
        document.querySelector(".DescC1").textContent = classePerso[classActuel][1][compAct1];  
        document.querySelector(".TDescC1").textContent = classePerso[classActuel][2][compAct1] + " : ";  
    }
    else if (type == "compAct2") {
        document.querySelector(".DescC2").textContent = classePerso[classActuel][3][compAct2]; 
        document.querySelector(".TDescC2").textContent = classePerso[classActuel][4][compAct2] + " : "; 
    }
    else if (type == "compPass1") {
        document.querySelector(".DescC3").textContent = classePerso[classActuel][5][compPass1];  
        document.querySelector(".TDescC3").textContent = classePerso[classActuel][6][compPass1] + " : ";  
    }
    else if (type == "compPass2") {
        document.querySelector(".DescC4").textContent = classePerso[classActuel][7][compPass2];  
        document.querySelector(".TDescC4").textContent = classePerso[classActuel][8][compPass2] + " : "; 
    }
    else if (type == "exploit") {
        document.querySelector(".DescC5").textContent = classePerso[classActuel][9][exploit];  
        document.querySelector(".DescC6").textContent = classePerso[classActuel][10][exploit];  
        document.querySelector(".TDescC5").textContent = classePerso[classActuel][11][exploit] + " : "; 
        document.querySelector(".TDescC6").textContent = "Bonus : "; 
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
                compAct1 = 0
                compAct2 = 0
                compPass1 = 0
                compPass2 = 0
                exploit = 0
                updateText("classe");
                
                updateText("compAct1");
                updateText("compAct2");
                updateText("compPass1");
                updateText("compPass2");
                updateText("exploit");
                
            }

            if (element.id == "comp-act-1-slider") {
                compAct1++;
                updateText("compAct1");
            }

            if (element.id == "comp-act-2-slider") {
                compAct2++;
                updateText("compAct2");
            }
            if (element.id == "comp-pass-1-slider") {
                compPass1++;
                updateText("compPass1");
            }

            if (element.id == "comp-pass-2-slider") {
                compPass2++;
                updateText("compPass2");
            }

            if (element.id == "exploit-slider") {
                exploit++;
                updateText("exploit");
            }

            if (element.id == "qualite-slider") {
                qualite++;
            }

            if (element.id == "defaut-slider") {
                defaut++;
            }

            if (element.id == "statut-slider") {
                statut++;
            }
            
            console.log(statut)
        }
    });

    element.querySelector(".fleche-gauche").addEventListener("click", () => {
        if (element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p")) < 0) {

            

            element.querySelector(".slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p"))) + parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width)) + "px)";

            if (element.id == "classe-slider") {
                classActuel--;
                compAct1 = 0
                compAct2 = 0
                compPass1 = 0
                compPass2 = 0
                exploit = 0
                updateText("classe");
                
                updateText("compAct1");
                updateText("compAct2");
                updateText("compPass1");
                updateText("compPass2");
                updateText("exploit");
            }

            if (element.id == "comp-act-1-slider") {
                compAct1--;
                updateText("compAct1");
                
            }

            if (element.id == "comp-act-2-slider") {
                compAct2--;
                updateText("compAct2");
            }

            if (element.id == "comp-pass-1-slider") {
                compPass1--;
                updateText("compPass1");
            }

            if (element.id == "comp-pass-2-slider") {
                compPass2--;
                updateText("compPass2");
            }

            if (element.id == "exploit-slider") {
                exploit--;
                updateText("exploit");
            }

            if (element.id == "qualite-slider") {
                qualite--;
            }

            if (element.id == "defaut-slider") {
                defaut--;
            }

            if (element.id == "statut-slider") {
                statut--;
            }

            console.log(statut)
            
        }
    })
    
    element.querySelector(".random-slider").addEventListener("click", () => {
        var randomNb = random(0, element.querySelector(".slider").childElementCount -1);
        element.querySelector(".slider").style.transform = "translateX(" + parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width * -randomNb) + "px)";

        if (element.id == "classe-slider") {
            classActuel = randomNb;
            
            compAct1 = 0
            compAct2 = 0
            compPass1 = 0
            compPass2 = 0
            exploit = 0
            updateText("classe");

            updateText("compAct1");
            updateText("compAct2");
            updateText("compPass1");
            updateText("compPass2");
            updateText("exploit");
        }

        if (element.id == "comp-act-1-slider") {
            compAct1 = randomNb;
            updateText("compAct1");
        }

        if (element.id == "comp-act-2-slider") {
            compAct2 = randomNb;
            updateText("compAct2");
        }

        if (element.id == "comp-pass-1-slider") {
            compPass1 = randomNb;
            updateText("compPass1");
        }

        if (element.id == "comp-pass-2-slider") {
            compPass2 = randomNb;
            updateText("compPass2");
        }

        if (element.id == "exploit-slider") {
            exploit = randomNb;
            updateText("exploit");
        }

        if (element.id == "qualite-slider") {
            qualite = randomNb;
        }

        if (element.id == "defaut-slider") {
            defaut = randomNb;
        }

        if (element.id == "statut-slider") {
            statut = randomNb;
        }

        console.log(statut)

    })
})





function randomclasse(){
    var rndmClasse = Math.floor(Math.random() * (8 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentClasse = document.querySelector('#classe-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentClasse = parentClasse.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentClasse.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmClasse) + "px)";

    
    });
    classActuel = rndmClasse
    updateText("classe");
}

function randomexploit(){
    var rndmExploit = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentExploit = document.querySelector('#exploit-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentExploit = parentExploit.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentExploit.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmExploit) + "px)";

    
    });
    exploit = rndmExploit
    updateText("exploit");
}


function randomcompact(){
    var rndmA1 = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentA1 = document.querySelector('#comp-act-1-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentA1 = parentA1.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentA1.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmA1) + "px)";

    
    });
    compAct1 = rndmA1
    updateText("compAct1");

    var rndmA2 = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentA2 = document.querySelector('#comp-act-2-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentA2 = parentA2.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentA2.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmA2) + "px)";

    
    });
    compAct2 = rndmA2
    updateText("compAct2");
}
function randomcomppass(){
    var rndmP1 = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentP1 = document.querySelector('#comp-pass-1-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentP1 = parentP1.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentP1.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmP1) + "px)";

    
    });
    compPass1 = rndmP1
    updateText("compPass1");

    var rndmP2 = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentP2 = document.querySelector('#comp-pass-2-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentP2 = parentP2.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentP2.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmP2) + "px)";

    
    });
    compPass2 = rndmP2
    updateText("compPass2");
}

document.querySelector(".BtnAleaCompP").addEventListener("click", ()=>{
    randomcomppass()
})


document.querySelector(".BtnAleaCompA").addEventListener("click", ()=>{
    randomcompact()
})

function randomdesc(){
    var rndmQualite = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentQualite = document.querySelector('#qualite-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentQualite = parentQualite.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentQualite.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmQualite) + "px)";

    qualite = rndmQualite
    });

    var rndmDefaut = Math.floor(Math.random() * (5 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentDefaut = document.querySelector('#defaut-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentDefaut = parentDefaut.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentDefaut.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmDefaut) + "px)";

    defaut = rndmDefaut
    });
    


    var rndmStatut = Math.floor(Math.random() * (8 - 1 + 1)) + 0
    // Sélectionner tous les éléments avec la classe .slider-container-comp
    
    const parentStatut = document.querySelector('#statut-slider');

    // Sélectionner toutes les div avec la classe .slider dans le parent spécifique
    const slidersDansParentStatut = parentStatut.querySelectorAll('.slider');

    // Appliquer la transformation à chaque div .slider dans le parent spécifique
    slidersDansParentStatut.forEach(slider => {
    // Appliquer la transformation de votre choix, par exemple :
    slider.style.transform = "translateX(" + parseFloat(slider.querySelector(".slider > div").getBoundingClientRect().width * -rndmStatut) + "px)";

    statut = rndmStatut
    });

}
document.querySelector(".BtnAleaDesc").addEventListener("click", ()=>{
    randomdesc();

})



















// Entrer le nom

var BoutonNom = 0

function Btn_Nom(){
    if (BoutonNom==1){
        document.querySelector(".BtnNomModifier").classList.add("none");
        document.querySelector(".BtnNomValid").classList.remove("none");

        document.querySelector(".TexteNom").classList.add("none");
        document.querySelector(".InputNom").classList.remove("none");
    } else if (BoutonNom==0){
        document.querySelector(".BtnNomModifier").classList.remove("none");
        document.querySelector(".BtnNomValid").classList.add("none");

        document.querySelector(".TexteNom").classList.remove("none");
        document.querySelector(".InputNom").classList.add("none");
    }
}

document.querySelector(".BtnNomValid").addEventListener("click", ()=>{
    BoutonNom = 0;
    var EntrerNom = document.querySelector(".InputNom").value;
    if (EntrerNom==""){
        document.querySelector(".TexteNom").innerHTML="Nom";
    } else {
        document.querySelector(".TexteNom").innerHTML=EntrerNom;
    }
    
    Btn_Nom();
})

document.querySelector(".BtnNomModifier").addEventListener("click", ()=>{
    BoutonNom = 1;
    Btn_Nom();
})





// Sexe 

var Sexe = -1

function sexe(){
    if (Sexe<0){

    } else if (Sexe==0){
        document.querySelector(".Homme").classList.add("BordureSexe");
        document.querySelector(".Femme").classList.remove("BordureSexe");
    } else if (Sexe==1){
        document.querySelector(".Femme").classList.add("BordureSexe");
        document.querySelector(".Homme").classList.remove("BordureSexe");
    }
}

document.querySelector(".Homme").addEventListener("click", ()=>{
    // if (ChoisirClasseAvatarC2==0){
    //     ChoisirClasseAvatarC2=1
    // }
    // if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
    //     document.querySelector(".AvatarChoisirClasse").classList.add("none");
    // }

    console.log(Sexe)
    Sexe = 0;
    sexe();
    
})
document.querySelector(".Femme").addEventListener("click", ()=>{
    // if (ChoisirClasseAvatarC2==0){
    //     ChoisirClasseAvatarC2=1
    // }
    // if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
    //     document.querySelector(".AvatarChoisirClasse").classList.add("none");
    // }

    console.log(Sexe)
    Sexe = 1;
    sexe();
})

function SexeRndm(){
    // Chiffres choisis
    var minNumberSexe = 0;
    var maxNumberSexe = 1;

    // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
    var randomValueSexe = Math.floor(Math.random() * (maxNumberSexe - minNumberSexe + 1)) + minNumberSexe;
    
    Sexe = randomValueSexe
}
document.querySelector("#btn-alea-sexe").addEventListener("click", ()=>{
    // if (ChoisirClasseAvatarC2==0){
    //     ChoisirClasseAvatarC2=1
    // }
    // if (ChoisirClasseAvatarC1==1 && ChoisirClasseAvatarC2==1){
    //     document.querySelector(".AvatarChoisirClasse").classList.add("none");
    // }

    
    SexeRndm();
    sexe();
    
})



function NomRndm(){
    if (Sexe==-1){
        // document.querySelector(".TexteBtnRndm").classList.remove("none");
        // setTimeout(()=>{
        //     document.querySelector(".TexteBtnRndm").classList.add("none");
        // }, "2000")
    } else if (Sexe==0){
        // Chiffres choisis
        var minNumberNomH = 1;
        var maxNumberNomH = 15;

        // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
        var randomValueNomH = Math.floor(Math.random() * (maxNumberNomH - minNumberNomH + 1)) + minNumberNomH;
        
        NomH = randomValueNomH;


        if (NomH==1){
            document.querySelector(".TexteNom").innerHTML="Zephyr";
            document.querySelector(".InputNom").value = "Zephyr";

        } else if (NomH==2){
            document.querySelector(".TexteNom").innerHTML="Orion";
            document.querySelector(".InputNom").value = "Orion";

        } else if (NomH==3){
            document.querySelector(".TexteNom").innerHTML="Elio";
            document.querySelector(".InputNom").value = "Elio";
            
        } else if (NomH==4){
            document.querySelector(".TexteNom").innerHTML="Lucius";
            document.querySelector(".InputNom").value = "Lucius";
            
        } else if (NomH==5){
            document.querySelector(".TexteNom").innerHTML="Maximus";
            document.querySelector(".InputNom").value = "Maximus";
            
        } else if (NomH==6){
            document.querySelector(".TexteNom").innerHTML="Silas";
            document.querySelector(".InputNom").value = "Silas";
            
        } else if (NomH==7){
            document.querySelector(".TexteNom").innerHTML="Oberon";
            document.querySelector(".InputNom").value = "Oberon";
            
        } else if (NomH==8){
            document.querySelector(".TexteNom").innerHTML="Caspian";
            document.querySelector(".InputNom").value = "Caspian";
            
        } else if (NomH==9){
            document.querySelector(".TexteNom").innerHTML="Leander";
            document.querySelector(".InputNom").value = "Leander";
            
        } else if (NomH==10){
            document.querySelector(".TexteNom").innerHTML="Alaric";
            document.querySelector(".InputNom").value = "Alaric";
            
        } else if (NomH==11){
            document.querySelector(".TexteNom").innerHTML="Zephyrus";
            document.querySelector(".InputNom").value = "Zephyrus";
            
        } else if (NomH==12){
            document.querySelector(".TexteNom").innerHTML="Thaddeus";
            document.querySelector(".InputNom").value = "Thaddeus";
            
        } else if (NomH==13){
            document.querySelector(".TexteNom").innerHTML="Ignatius";
            document.querySelector(".InputNom").value = "Ignatius";
            
        } else if (NomH==14){
            document.querySelector(".TexteNom").innerHTML="Peregrine";
            document.querySelector(".InputNom").value = "Peregrine";
            
        } else if (NomH==15){
            document.querySelector(".TexteNom").innerHTML="Caelum";
            document.querySelector(".InputNom").value = "Caleum";
            
        }

    } else if (Sexe==1){
        // Chiffres choisis
        var minNumberNomF = 1;
        var maxNumberNomF = 15;

        // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
        var randomValueNomF = Math.floor(Math.random() * (maxNumberNomF - minNumberNomF + 1)) + minNumberNomF;
        
        NomF = randomValueNomF;


        if (NomF==1){
            document.querySelector(".TexteNom").innerHTML="Seraphina";
            document.querySelector(".InputNom").value = "Seraphina";

        } else if (NomF==2){
            document.querySelector(".TexteNom").innerHTML="Isolde";
            document.querySelector(".InputNom").value = "Isolde";

        } else if (NomF==3){
            document.querySelector(".TexteNom").innerHTML="Elysia";
            document.querySelector(".InputNom").value = "Elysia";
            
        } else if (NomF==4){
            document.querySelector(".TexteNom").innerHTML="Lumielle";
            document.querySelector(".InputNom").value = "Lumielle";
            
        } else if (NomF==5){
            document.querySelector(".TexteNom").innerHTML="Evadne";
            document.querySelector(".InputNom").value = "Evadne";
            
        } else if (NomF==6){
            document.querySelector(".TexteNom").innerHTML="Calista";
            document.querySelector(".InputNom").value = "Calista";
            
        } else if (NomF==7){
            document.querySelector(".TexteNom").innerHTML="Elowen";
            document.querySelector(".InputNom").value = "Elowen";
            
        } else if (NomF==8){
            document.querySelector(".TexteNom").innerHTML="Aurelia";
            document.querySelector(".InputNom").value = "Aurelia";
            
        } else if (NomF==9){
            document.querySelector(".TexteNom").innerHTML="Thalassa";
            document.querySelector(".InputNom").value = "Thalassa";
            
        } else if (NomF==10){
            document.querySelector(".TexteNom").innerHTML="Elara";
            document.querySelector(".InputNom").value = "Elara";
            
        } else if (NomF==11){
            document.querySelector(".TexteNom").innerHTML="Lyra";
            document.querySelector(".InputNom").value = "Lyra";
            
        } else if (NomF==12){
            document.querySelector(".TexteNom").innerHTML="Melisande";
            document.querySelector(".InputNom").value = "Melisande";
            
        } else if (NomF==13){
            document.querySelector(".TexteNom").innerHTML="Ophelia";
            document.querySelector(".InputNom").value = "Ophelia";
            
        } else if (NomF==14){
            document.querySelector(".TexteNom").innerHTML="Isabeau";
            document.querySelector(".InputNom").value = "Isabeau";
            
        } else if (NomF==15){
            document.querySelector(".TexteNom").innerHTML="Calliope";
            document.querySelector(".InputNom").value = "Calliope";
            
        }

    }
    
}
document.querySelector("#btn-alea-nom").addEventListener("click", ()=>{
    BoutonNom = 0;
    Btn_Nom();
    NomRndm();
})




var Age = 4

document.querySelector(".AjouterAge").addEventListener("click", ()=>{
    if (Age<70) {
        Age=Age+1;
        document.querySelector(".TexteAge").innerHTML=Age + " ans";
    }
})
document.querySelector(".RetierAge").addEventListener("click", ()=>{
    if (Age>5) {
        Age=Age-1;
        document.querySelector(".TexteAge").innerHTML=Age + " ans";
    }
})

function AgeRndm(){
    // Chiffres choisis
    var minNumberAge = 5;
    var maxNumberAge = 70;

    // Génération d'un nombre aléatoire entre minNumber et maxNumber (inclus)
    var randomValueAge = Math.floor(Math.random() * (maxNumberAge - minNumberAge + 1)) + minNumberAge;
    
    Age = randomValueAge
    
    document.querySelector(".TexteAge").innerHTML=Age + " ans";
}

document.querySelector("#btn-alea-age").addEventListener("click", ()=>{
    AgeRndm();
})




function texteSexe(){
    if (Sexe==0){
        document.querySelector("#Sexe").textContent = "Masculin";
    } else if (Sexe==1){
        document.querySelector("#Sexe").textContent = "Féminin";
    }
}


NumEns = 0



function EnsSuiv(){
    if (NumEns==0){
        document.querySelector("#Ens1").classList.remove("none");
        document.querySelector(".ConcepteurPerso").classList.remove("none");

        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");

        document.querySelector(".EnsPerso").classList.replace("EnsPersoFiche", "EnsPersoConcepteur");
        
        NumEns = 1

    } else if (NumEns==1){
        document.querySelector(".EnsPerso").classList.add("none");
        document.querySelector("#Ens2").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");
        NumEns = 2

    } else if (NumEns==2){
        document.querySelector("#Ens3").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");
        NumEns = 3
    } else if (NumEns==3){
        document.querySelector("#Ens4").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");
        NumEns = 4
    } else if (NumEns==4){
        document.querySelector("#Ens5").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector(".BtnSuiv").textContent = "Valider";
        NumEns = 5
    } else if (NumEns==5){
        document.querySelector("#Ens5").classList.add("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");

        document.querySelector(".EnsPerso").classList.remove("none");
        document.querySelector(".EnsPerso").classList.replace("EnsPersoConcepteur", "EnsPersoFiche");

        document.querySelector(".ConcepteurPerso").classList.add("none");
        document.querySelector(".BtnSuiv").textContent = "Suivant";
        NumEns = 0

        document.querySelector("#fiche-comp-act-1").textContent = classePerso[classActuel][2][compAct1];
        document.querySelector("#fiche-comp-act-2").textContent = classePerso[classActuel][4][compAct2];
        document.querySelector("#fiche-comp-pass-1").textContent = classePerso[classActuel][6][compPass1];
        document.querySelector("#fiche-comp-pass-2").textContent = classePerso[classActuel][8][compPass2];
        document.querySelector("#fiche-comp-act-1").textContent = classePerso[classActuel][2][compAct1];
        document.querySelector("#fiche-comp-act-2").textContent = classePerso[classActuel][4][compAct2];
        document.querySelector("#fiche-comp-pass-1").textContent = classePerso[classActuel][6][compPass1];
        document.querySelector("#fiche-exploit").textContent = classePerso[classActuel][11][exploit];
        document.querySelector("#fiche-statut").textContent = descPerso[2][statut];
        document.querySelector("#fiche-qualite").textContent = descPerso[0][qualite];
        document.querySelector("#fiche-defaut").textContent = descPerso[1][defaut];
        document.querySelector("#Nom").textContent = document.querySelector(".InputNom").value;
        texteSexe();
        document.querySelector("#Age").textContent = document.querySelector(".TexteAge").textContent;
        document.querySelector("#Classe").textContent = classePerso[classActuel][0];
    } 
}
function EnsRet(){
    if (NumEns==1){
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector(".ConcepteurPerso").classList.add("none");

        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");

        document.querySelector(".EnsPerso").classList.replace("EnsPersoConcepteur", "EnsPersoFiche");

        NumEns = 0

    } else if (NumEns==2){
        document.querySelector("#Ens1").classList.remove("none");
        
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");

        document.querySelector(".EnsPerso").classList.remove("none");

        NumEns = 1

    } else if (NumEns==3){
        document.querySelector("#Ens2").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");
        NumEns = 2
        
    } else if (NumEns==4){
        document.querySelector("#Ens3").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens4").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");
        NumEns = 3
        
    } else if (NumEns==5){
        document.querySelector("#Ens4").classList.remove("none");
        
        document.querySelector("#Ens1").classList.add("none");
        document.querySelector("#Ens2").classList.add("none");
        document.querySelector("#Ens5").classList.add("none");
        document.querySelector("#Ens3").classList.add("none");
        document.querySelector(".BtnSuiv").textContent = "Suivant";
        NumEns = 4
        
    } 
}


document.querySelector("#BtnRndmAll").addEventListener("click", ()=>{
    SexeRndm();
    sexe();
    BoutonNom = 0;
    Btn_Nom();
    NomRndm();
    AgeRndm();
    document.querySelector("#Ens1").classList.remove("none");
    document.querySelector(".ConcepteurPerso").classList.remove("none");
    randomclasse();
    document.querySelector("#Ens1").classList.add("none");
    document.querySelector("#Ens2").classList.remove("none");
    randomcompact();
    document.querySelector("#Ens2").classList.add("none");
    document.querySelector("#Ens3").classList.remove("none");
    randomcomppass();
    document.querySelector("#Ens3").classList.add("none");
    document.querySelector("#Ens4").classList.remove("none");
    randomexploit();
    document.querySelector("#Ens4").classList.add("none");
    document.querySelector("#Ens5").classList.remove("none");
    randomdesc();
    document.querySelector("#Ens5").classList.add("none");
    document.querySelector(".ConcepteurPerso").classList.add("none");



    document.querySelector("#fiche-comp-act-1").textContent = classePerso[classActuel][2][compAct1];
        document.querySelector("#fiche-comp-act-2").textContent = classePerso[classActuel][4][compAct2];
        document.querySelector("#fiche-comp-pass-1").textContent = classePerso[classActuel][6][compPass1];
        document.querySelector("#fiche-comp-pass-2").textContent = classePerso[classActuel][8][compPass2];
        document.querySelector("#fiche-comp-act-1").textContent = classePerso[classActuel][2][compAct1];
        document.querySelector("#fiche-comp-act-2").textContent = classePerso[classActuel][4][compAct2];
        document.querySelector("#fiche-comp-pass-1").textContent = classePerso[classActuel][6][compPass1];
        document.querySelector("#fiche-exploit").textContent = classePerso[classActuel][11][exploit];
        document.querySelector("#fiche-statut").textContent = descPerso[2][statut];
        document.querySelector("#fiche-qualite").textContent = descPerso[0][qualite];
        document.querySelector("#fiche-defaut").textContent = descPerso[1][defaut];
        document.querySelector("#Nom").textContent = document.querySelector(".InputNom").value;
        texteSexe();
        document.querySelector("#Age").textContent = document.querySelector(".TexteAge").textContent;
        document.querySelector("#Classe").textContent = classePerso[classActuel][0];
})


document.querySelector("#BtnReinitialiser").addEventListener("click", ()=>{
    location.reload();
})

document.querySelector(".BtnSuiv").addEventListener("click", ()=>{
    EnsSuiv();
    console.log(NumEns)
})
document.querySelector(".BtnRet").addEventListener("click", ()=>{
    EnsRet();
    console.log(NumEns)
})
document.querySelector(".BtnCommencer").addEventListener("click", ()=>{
    EnsSuiv();
    console.log(NumEns)
})
