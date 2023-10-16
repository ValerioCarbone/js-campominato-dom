// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// - Creare strutture html( bottone e container)
// - Richiamare l'elemento html del bottone e assegnargli l'evento click 

const btnPlayDOMElement = document.getElementById('btn-play')

let containerDOMElement = document.querySelector('.container')

let difficulty = 'easy'

let selectedDifficulty = 100

btnPlayDOMElement.addEventListener('click', function () {

    containerDOMElement.classList.remove('unclickable')

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

    // - Generare le bombe tramite la funzione creata

    const numbersOfBomb = getBombs(1, selectedDifficulty, 16)

    // - Richiamare per classe tali elementi    

    const gridDOMElements = document.querySelectorAll('.cell')

    // - Creare un for che cicli ogni elemento presente nella variabile precedentemente creata e assegnare ad ognuno un numero crescente che sarà uguale all'index del ciclo + 1 e agno ogni elemento aggiungere l'html con il numero rispettivo

    const pointsArray = []

    for (let i = 0; i < gridDOMElements.length; i++) {

        let cellDOMElement = gridDOMElements[i]

        if (selectedDifficulty === 81) {

            cellDOMElement.classList.replace('cell', 'medium-grid')
        }
        else if (selectedDifficulty === 49) {

            cellDOMElement.classList.replace('cell', 'small-grid')
        }

        if (numbersOfBomb.includes(parseInt(cellDOMElement.innerHTML))) {

            cellDOMElement.classList.add('bomb')
        }

        // - Creare un event listener che al click del singolo bottone aggiunga una classe al singolo elemento cliccato e stampi in console l 'html dell'elemento che abbia creato precedentemente

        cellDOMElement.addEventListener('click', function () {


            if (numbersOfBomb.includes(parseInt(this.innerHTML))) {
                
                const cellsBombsDOMElement = document.querySelectorAll('.bomb')
                
                for (let i = 0; i < 16; i++){
                    let currentCellsBombsDOMElement = cellsBombsDOMElement[i]
                    currentCellsBombsDOMElement.classList.add('bg-red')
                }

                containerDOMElement.classList.add('unclickable')

                alert(`Hai perso! Il tuo punteggio è ${pointsArray.length}!`)

            }
            
            else if (pointsArray.length === (parseInt(selectedDifficulty) - 16)) {
                alert(`Hai vinto! Il tuo punteggio è ${pointsArray.length}!`)
            }


            else {
                cellDOMElement.classList.add('bg-light-blue')

                if (!pointsArray.includes(this.innerHTML)) {

                    pointsArray.push(this.innerHTML)
                }
            }




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

function getBombs(rangeMin, rangeMax, numberOfBombs,) {

    bombsArray = []

    while (bombsArray.length < numberOfBombs) {

        numberRandom = getRandomIntInclusive(rangeMin, rangeMax)

        if (!bombsArray.includes(numberRandom)) {
            bombsArray.push(numberRandom)
        }

    }
    console.log(bombsArray)
    return bombsArray
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}