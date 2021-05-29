const students = [
    {
        name: "FRANCOIS Guillaume",
        img_URL: "/img/smiley-1.png"
    },
    {
        name: "RICHARD Allan",
        img_URL: "/img/smiley-2.png"
    },
    {
        name: "PERRIN Maxime",
        img_URL: "/img/smiley-3.png"
    },
    {
        name: "PONSSONET Valentin",
        img_URL: "/img/smiley-4.png"
    },
    {
        name: "LESCEUX Jason",
        img_URL: "/img/smiley-5.png"
    },
    {
        name: "FRAPIER Pascal",
        img_URL: "/img/smiley-6.png"
    },
    {
        name: "ZIMMERMAN Gregory",
        img_URL: "/img/smiley-7.png"
    },
    {
        name: "CLAUDE Madisson",
        img_URL: "/img/smiley-8.png"
    },
    {
        name: "PAUL-CONSTANT Anita",
        img_URL: "/img/smiley-9.png"
    },
    {
        name: "FOUGEROLLE Alexandre",
        img_URL: "/img/smiley-10.png"
    },
]
const shuffledStudents = [
    {
        name: "FRANCOIS Guillaume",
        img_URL: "/img/smiley-1.png"
    },
    {
        name: "RICHARD Allan",
        img_URL: "/img/smiley-2.png"
    },
    {
        name: "PERRIN Maxime",
        img_URL: "/img/smiley-3.png"
    },
    {
        name: "PONSSONET Valentin",
        img_URL: "/img/smiley-4.png"
    },
    {
        name: "LESCEUX Jason",
        img_URL: "/img/smiley-5.png"
    },
    {
        name: "FRAPIER Pascal",
        img_URL: "/img/smiley-6.png"
    },
    {
        name: "ZIMMERMAN Gregory",
        img_URL: "/img/smiley-7.png"
    },
    {
        name: "CLAUDE Madisson",
        img_URL: "/img/smiley-8.png"
    },
    {
        name: "PAUL-CONSTANT Anita",
        img_URL: "/img/smiley-9.png"
    },
    {
        name: "FOUGEROLLE Alexandre",
        img_URL: "/img/smiley-10.png"
    },
]

const table = document.getElementById('app__table');
const select = document.getElementById('number-select');
for (let i = 0; i < students.length; i++) {
    const option = document.createElement('option');
    option.value = i+1;
    option.textContent = i+1;
    select.appendChild(option);
}

const addElementsToTable = (studentsArr, nb) => {
    table.textContent = '';
    for (let i = 0; i < nb; i++) {
        const div = document.createElement('div');
        div.className = "app__table__cell";
        const name = document.createElement('h2');
        name.textContent = studentsArr[i].name;
        const img = document.createElement('img');
        img.className = 'card-img';
        img.src = `.${studentsArr[i].img_URL}`;
        div.appendChild(img);
        div.appendChild(name);
        table.appendChild(div);
    }
}

const getShuffledStudents = () => {
    const arrayToSort = shuffledStudents;
    return arrayToSort.sort(() => Math.random() - 0.5);
}

const mixButton = document.getElementById('mix');
mixButton.addEventListener('click', () => {
    const cardImg = document.getElementsByClassName('card-img');
    for(const img of cardImg) {
        img.classList.add('mixin');
    }
    console.log(cardImg);
    setTimeout(() => {
        addElementsToTable(getShuffledStudents(), select.value);
        for(const img of cardImg) {
            img.classList.remove('mixin');
        }
    }, 3000);
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    addElementsToTable(students, students.length);
});

addElementsToTable(students, students.length);