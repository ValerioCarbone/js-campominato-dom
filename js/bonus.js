// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// - Creare strutture html( bottone e container)
// - Richiamare l'elemento html del bottone e assegnargli l'evento click 
const btnPlayDOMElement = document.getElementById('btn-play')

let containerDOMElement = document.querySelector('.container')

let difficulty = 'easy'

let selectedDifficulty = 100

btnPlayDOMElement.addEventListener('click', function () {

    containerDOMElement.innerHTML = ''

    if (difficulty === 'easy') {
        selectedDifficulty = 100
    }
    else if (difficulty === 'normal') {
        selectedDifficulty = 81
    }
    else if (difficulty === 'hard') {
        selectedDifficulty = 49
    }

    // - Creare una funzione con un ciclo for che generi una griglia    

    getGrid(containerDOMElement, selectedDifficulty)

    // - Richiamare per classe tali elementi    
    const gridDOMElements = document.querySelectorAll('.cell')

    // - Creare un for che cicli ogni elemento presente nella variabile precedentemente creata e assegnare ad ognuno un numero crescente che sarà uguale all'index del ciclo + 1 e agno ogni elemento aggiungere l'html con il numero rispettivo

    for (let i = 0; i < gridDOMElements.length; i++) {

        let cellDOMElement = gridDOMElements[i]

        if (selectedDifficulty === 81) {

            cellDOMElement.classList.replace('cell', 'medium-grid')
        }
        else if (selectedDifficulty === 49) {

            cellDOMElement.classList.replace('cell', 'small-grid')
        }

        // - Creare un event listener che al click del singolo bottone aggiunga una classe al singolo elemento cliccato e stampi in console l 'html dell'elemento che abbia creato precedentemente

        cellDOMElement.addEventListener('click', function () {

            cellDOMElement.classList.add('bg-light-blue')

            console.log(cellDOMElement.innerHTML)
        })

    }

})


// FUNZIONI


function getGrid(container, cells) {
    for (let i = 1; i <= cells; i++) {

        const htmlString = ` <div class = "cell">${i}</div>`

        container.innerHTML += htmlString

    }
}

function setDifficulty() {
    difficulty = document.getElementById('difficulty-selector').value
}

