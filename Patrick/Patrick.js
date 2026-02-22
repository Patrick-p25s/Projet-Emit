const cvData = {
    dev: {
        jobTitle: "Développeur Full-stack",
        titles: ["Profil", "Compétences clés", "Projets récents", "Contact"],
        profile: "Développeur full-stack orienté produit, je conçois des interfaces claires, des API robustes et des expériences fluides de l'idée jusqu'à la mise en production.",
        list1: [
            "Développement frontend avec HTML, CSS, JavaScript et architecture responsive",
            "Conception backend avec Node.js, API REST et organisation des bases de données",
            "Bonnes pratiques Git, tests de base et amélioration continue du code",
            "Intégration d'outils IA pour accélérer la génération de contenu et le support utilisateur"
        ],
        list2: [
            "Création d'une application web de gestion de contenu avec interface d'administration",
            "Déploiement d'un service cloud avec configuration sécurisée et suivi de performance",
            "Réalisation d'un portfolio dynamique avec filtres, animations et chargement optimisé",
            "Prototype d'outil interne de vérification de données pour réduire les erreurs manuelles"
        ],
        list3: [
            "Téléphone : 034 75 488 48 / 032 45 115 23",
            "Email : patricknomentsoa.p25s@gmail.com",
            "LinkedIn / Facebook : Nomentsoa Patrick",
            "GitHub : Patrick-p25s"
        ]
    },
    data: {
        jobTitle: "Data Scientist",
        titles: ["Profil", "Compétences Data", "Projets Data", "Contact"],
        profile: "Passionné par la science des données, je transforme des données brutes en indicateurs utiles pour la décision grâce à l'analyse, la visualisation et les modèles prédictifs.",
        list1: [
            "Analyse exploratoire de données et nettoyage de jeux de données complexes",
            "Python pour la manipulation de données avec pandas, NumPy et visualisation",
            "Bases solides en machine learning supervisé et évaluation de modèles",
            "Lecture des résultats et traduction en recommandations claires pour les équipes"
        ],
        list2: [
            "Mise en place d'un modèle de prédiction sur plusieurs variables pour estimer des tendances",
            "Tableau de bord de visualisation pour suivre l'évolution de données académiques",
            "Projet de détection d'anomalies pour repérer rapidement les valeurs incohérentes",
            "Prototype de reconnaissance d'images basé sur un réseau neuronal léger"
        ],
        list3: [
            "Téléphone : 034 75 488 48 / 032 45 115 23",
            "Email : patricknomentsoa.p25s@gmail.com",
            "LinkedIn / Facebook : Nomentsoa Patrick",
            "GitHub : Patrick-p25s"
        ]
    },
    student: {
        jobTitle: "Étudiant en informatique - EMIT Fianarantsoa",
        titles: ["Profil", "Compétences en progression", "Objectifs & projets", "Contact"],
        profile: "Étudiant motivé en informatique, j'apprends rapidement et je combine cours académiques et projets personnels pour construire un profil solide en développement et data.",
        list1: [
            "Bases en algorithmique, structures de données et programmation orientée objet",
            "Développement d'interfaces web et compréhension du cycle complet d'une application",
            "Curiosité technique et autonomie dans la résolution de problèmes",
            "Travail d'équipe, communication et volonté de progression continue"
        ],
        list2: [
            "Renforcer mes compétences full-stack avec des projets réels et déployables",
            "Approfondir la data science pour relier développement logiciel et intelligence artificielle",
            "Contribuer à des projets open source pour apprendre de bonnes pratiques d'équipe",
            "Construire un parcours professionnel aligné sur la création de produits utiles"
        ],
        list3: [
            "Téléphone : 034 75 488 48 / 032 45 115 23",
            "Email : patricknomentsoa.p25s@gmail.com",
            "LinkedIn / Facebook : Nomentsoa Patrick",
            "GitHub : Patrick-p25s"
        ]
    }
};

const options = {
    jobs: document.getElementById("jobs"),
    style: document.getElementById("styles"),
    color: document.getElementById("color")
};

const ui = {
    jobTitle: document.getElementById("jobTitle"),
    title1: document.getElementById("title1"),
    title2: document.getElementById("title2"),
    title3: document.getElementById("title3"),
    title4: document.getElementById("title4"),
    profile: document.getElementById("profile"),
    list1: document.getElementById("list1"),
    list2: document.getElementById("list2"),
    list3: document.getElementById("list3")
};

const styleClassMap = {
    style1: "style-1",
    style2: "style-2",
    style3: "style-3"
};

const colorClassMap = {
    blue: "theme-blue",
    red: "theme-red",
    green: "theme-green"
};

function renderList(target, items) {
    target.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        target.appendChild(li);
    });
}

function updateCvContent() {
    const selectedJob = options.jobs.value;
    const data = cvData[selectedJob];

    if (!data) {
        return;
    }

    ui.jobTitle.textContent = data.jobTitle;
    ui.title1.textContent = data.titles[0];
    ui.title2.textContent = data.titles[1];
    ui.title3.textContent = data.titles[2];
    ui.title4.textContent = data.titles[3];
    ui.profile.textContent = data.profile;

    renderList(ui.list1, data.list1);
    renderList(ui.list2, data.list2);
    renderList(ui.list3, data.list3);
}

function updateStyle() {
    document.body.classList.remove("style-1", "style-2", "style-3");
    document.body.classList.add(styleClassMap[options.style.value] || "style-1");
}

function updateColor() {
    document.body.classList.remove("theme-blue", "theme-red", "theme-green");
    document.body.classList.add(colorClassMap[options.color.value] || "theme-blue");
}

function updateAll() {
    updateCvContent();
    updateStyle();
    updateColor();
}

options.jobs.addEventListener("change", updateAll);
options.style.addEventListener("change", updateAll);
options.color.addEventListener("change", updateAll);

updateAll();
