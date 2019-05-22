function evaluerQuestion(idElementResponse, fn)
{
    const element = document.getElementById(idElementResponse);
    var reponse = false;
    try {
        reponse = fn();
    } catch(err) {
        reponse = false;
    }
    
    if (reponse) {
        element.innerText ="Correct!";
        element.className = "reponse correcte";
    } else {
        element.innerText ="Incorrect!";
        element.className = "reponse incorrect";
    }
}


function evaluerQuestion1()
{
    return (reponse1(1,1) === 2) && (reponse1(-100,100) === 0) && (reponse1(25,35) === 60) && (reponse1(1.5,3.5) === 5);
}

function evaluerQuestion2()
{
    const reponses = {
        10: "jeune",
        11: "jeune",
        15: "jeune",
        19: "jeune",
        19.999999999: "jeune",
        20: "jeune",
        30: "jeune",
        34.999999999: "jeune",
        35: "vieux"
    };

    var bonneResponses = 0;    
    for (var age in reponses) {
        if (reponse2(age) === reponses[age]) {
            bonneResponses++;
        }
    }    
    return bonneResponses === Object.keys(reponses).length;
}

function evaluerQuestion3()
{
    const reponses = [
        ["maison", "bateau", "maison-bateau"],
        ["salong", "ofjsmofi0mcf2034mc043409jcm034j", "salong-ofjsmofi0mcf2034mc043409jcm034j"],
        ["sadafsdfsfsflong", "ofjsmofi0mcf2034mc043409jcm034j", "sadafsdfsfsflong-ofjsmofi0mcf2034mc043409jcm034j"]
    ];
    
    reponses.forEach(function(elem) {
        console.log(elem);
    }); 
    var bonneResponses = 0;    
    reponses.forEach(function(elem) {
        if (reponse3(elem[0], elem[1]) === elem[2]) {
            bonneResponses++;
        }
    });

    return bonneResponses === Object.keys(reponses).length;
}

function evaluerQuestion4()
{
    const titre = "Je suis le titre de la réponse";
    const contenu = "Est que 1 < 0 est vrai? Je ne crois pas.";
    const elementReponse = document.getElementById("item-champ-text-reponse4");
    elementReponse.innerHTML = "";
    reponse4(titre, contenu);
    const elemsTitre = elementReponse.getElementsByTagName("h1");
    const elemsContenu = elementReponse.getElementsByTagName("p");

    return elemsTitre.length == 1 && elemsTitre[0].innerText == titre && elemsContenu.length == 1 && elemsContenu[0].innerText == contenu;
}

function evaluerQuestion5()
{
    return document.getElementsByName("p").length == reponse5();
}

async function evaluerQuestion6()
{
    const reponses = {
        "https://gist.githubusercontent.com/jmlagace/b697616d2aefa4cc859c4efe8676c02d/raw/exemple1.js": 3,
        "https://gist.githubusercontent.com/jmlagace/b697616d2aefa4cc859c4efe8676c02d/raw/exemple2.js": 0,
        "https://gist.githubusercontent.com/jmlagace/b697616d2aefa4cc859c4efe8676c02d/raw/exemple3.js": 6
    };

    const elementReponse6 = document.getElementById("item-champ-text-reponse6");
    var bonneResponses = 0;    
    for (var urlTest in reponses) {
        await reponse6(urlTest);        
        if (elementReponse6.innerText == reponses[urlTest]) {
            bonneResponses++;
        }
    }    
    return bonneResponses === Object.keys(reponses).length;
}