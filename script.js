
// Données "sales" à modifier !
const user = {
    firstName: "   Bruce",
    lastName: "$pringsteen",
    age: "72 years old",
    isBoss: true,
    nextTourDate: new Date("May 31, 2025 20:00").getTime(),
    albums: [
        {
            title: "Greetings from Asbury Park, NJ",
            year: 1973,
            rymScore: 3.59
        },
        {
            title: "The Wild, the Innocent & the E Street Shuffle",
            year: 1973,
            rymScore: 3.76
        },
        {
            title: "Born to Run",
            year: 1975,
            rymScore: 3.98
        },
        {
            title: "Darkness on the Edge of Town",
            year: 1978,
            rymScore: 3.93
        },
        {
            title: "The River",
            year: 1980,
            rymScore: 3.76
        },
        {
            title: "Nebraska",
            year: 1982,
            rymScore: 3.87
        },
        {
            title: "Born in the U.S.A.",
            year: 1984,
            rymScore: 3.71
        },
        {
            title: "Tunnel of Love",
            year: 1987,
            rymScore: 3.52
        },
        {
            title: "Human Touch",
            year: 1992,
            rymScore: 2.97
        },
        {
            title: "The Ghost of Tom Joad",
            year: 1995,
            rymScore: 3.38
        },
        {
            title: "The Rising",
            year: 2002,
            rymScore: 3.56
        },
        {
            title: "Devils & Dust",
            year: 2005,
            rymScore: 3.42
        },
        {
            title: "We Shall Overcome: The Seeger Sessions",
            year: 2006,
            rymScore: 3.7
        },
        {
            title: "Magic",
            year: 2007,
            rymScore: 3.48
        },
        {
            title: "Working on a Dream",
            year: 2009,
            rymScore: 2.95
        },
        {
            title: "Wrecking Ball",
            year: 2012,
            rymScore: 3.27
        },
        {
            title: "High Hopes",
            year: 2014,
            rymScore: 2.97
        },
        {
            title: "Western Stars",
            year: 2019,
            rymScore: 3.27
        },
        {
            title: "Letter to You",
            year: 2020,
            rymScore: 3.42
        }
    ]
};

//Manipulation de strings #1
const welcomeMessage = () => {
    console.log("Cher " + user.firstName.trim() + " " + user.lastName.replace("$", "S") + ", bienvenue dans votre dashboard!");
}

//Manipulation de strings #2
const ageMessage = () => {
    const age = parseInt(user.age.slice(0, 2)) + 1;
    console.log("Vous aurez " + age + " ans l'année prochaine.");
}

//Comnpte à rebours
const countdownMessage = () => {

    //on récupère la date d'ajourd'hui en millisecondes ofc
    let actualDate = new Date().getTime();
    let timeToGo = user.nextTourDate - actualDate;

    //afficher la date comme demandé 
    //modulo ici permet de compter les minutes, on divise timeToGo par 1000 pour changer nos millisecondes en secondes.
    const seconds = Math.floor(timeToGo / 1000) % 60;
    const minutes = Math.floor(timeToGo / 1000 / 60) % 60;
    //modulo ici permet de compter les jours, on divise timeToGo pour avoir des heures.
    const hours = Math.floor((timeToGo / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
    console.log(`${days} jours, ${hours} h ${minutes} min ${seconds} s`);
}

welcomeMessage();
ageMessage();
countdownMessage();


