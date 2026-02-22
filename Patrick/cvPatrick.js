const datas = [
    {
        title: "Developpeur full-stack",
        titles: ["Profile", "Compétences", "Experiences", "Contact"],
        containsTitles: [
            "Je suis un développeur venant du programmation et je veux vous presenter ce que je suis vraiment",
            ["Developpement web avec HTML et css depuis des mois", "Elaboration et amelioration des design avec figma et photoshop", "Securisation et utilisation des clouds notament Google cloud", "Utilisation de l'intelligences artificielle dans une application"],
            ["Utilisation de google cloud pour faire tous les développement", "Stage de découverte en dévelopant un applicaton de génération des contenus", "Des dizaines de projets personelles disponible sur github", "Développement d'une application de prediction et de verification des données "],
            ["034 75 488 48 / 032 45 115 23", "patricknomentsoa.p25s@gmail.com", "Linkedin/facebook: Nomentsoa Patrick", "Github: Patrick-p25s"]

        ]
    },{
        title: "Scientifique des donné",
        titles: ["Profile", "Compétences", "Project", "Contact"],
        containsTitles: [
            "Je suis un développeur venant du programmation et je veux vous presenter ce que je suis vraiment",
            ["Les data structure et algorithme des bases ", "Manipulation et visualiasation des données en utilisant Python", "Les bases de machine learning et deeplearning en créant d'un résaux neuronale ", "Programmation procedurale avec quelque langage et les bases de la programtion orienté objet"],
            ["Creation d'un reseau neuronal et cinq variable avec les librairies Python", "Un application de manipulation et visualisation des données de forum du Programme SESAME", "Projet de creation d'un système embarqué en creant un petite automobile ", "Projet de reconnaissance faciale en utilisannt un camera"],
            ["034 75 488 48 / 032 45 115 23", "patricknomentsoa.p25s@gmail.com", "Linkedin/facebook: Nomentsoa Patrick", "Github: Patrick-p25s"]

        ]
    },{
        title: "Etudiant en L1 de l'Emit Fianaratsoa", 
        titles: ["Profile", "Passe-temps", "Objectifs", "Contact"],
        containsTitles: [
            "Je suis un étudiant en L1 de l'Emit Fianaratsoa ",
            ["Faire un petit tour de course ou de jouer au basket-ball", "Ecouter des musique classique et jouer au guitare", "Programmer et développer ce qui se passe dans ma tete et je peux realiser", "Dormir bien, mange un peu trop, regarder des vidéo partout, bosser tous les temps"],
            ["Etudiant en pleine forme sans soucie du lécon et avance bien", "Un développeur très fullstack qui a tous les connaissances de creation d'une application", "Un jeune humble mais extraverti, aide ces amis quand il peut", "En top sante, pleine forme, a l'aise dans tous les environement, drôle mais humble"],
            ["034 75 488 48 / 032 45 115 23", "patricknomentsoa.p25s@gmail.com", "Linkedin/facebook: Nomentsoa Patrick", "Github: Patrick-p25s"]

        ]
    }
]
function createElement(tagname, content="", classes=null){
    let article = document.createElement(tagname);
    article.innerHTML = content;
    article.className = classes;
    return article;

}
const zah = createElement('p', 'Je suis Nomentsoa Patrick', 'title1')
const data = Array.from(document.querySelectorAll('article h4'));
data.push(zah);

const options = {
    jobs: document.getElementById('jobs'),
    style: document.getElementById('styles'),
    color: document.getElementById('color'),
}
console.log(options);

