'-----Ejercicio 1-----'

const button = document.querySelector('#btnBack')
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}
button.addEventListener("click", e => {
    if (e.target === button) {
        let randomColor = '#'
        for (let i = 0; i < 6; i++) {
            randomColor += hex[randomNumber()]
        }
        document.body.style.background = randomColor
    }
})

'-----Ejercicio 2-----'

const btnSuma = document.querySelector('#btnSuma').addEventListener('click', sumarUno);
const btnResta = document.querySelector('#btnResta').addEventListener('click', restaUno);
let count = 0
function sumarUno() {
    count = count + 1;
    document.querySelector('#counter').innerHTML = count
}
function restaUno() {
    count = count - 1;
    document.querySelector('#counter').innerHTML = count
}

'-----Ejercicio 3-----'

const btnHideShow = document.querySelector('#hideShow').addEventListener('click', hideShow)

function hideShow() {
    const text = document.querySelector('#hideText')
    if (text.style.visibility === 'hidden') {
        text.style.visibility = 'visible';
    }
    else {
        text.style.visibility = 'hidden';
    }
}


'-----Ejercicio 4-----'

const btnlist = document.querySelector('#delete').addEventListener('click', deleteListItem)

const list = document.querySelector('#list');

function deleteListItem() {
    const firstItem = list.firstElementChild;
    if (firstItem) {
        list.removeChild(firstItem)
    }
}

'-----Ejercicio 5-----'

const addBtnList = document.querySelectorAll('.addButton');
addBtnList.forEach((button) => {
    button.addEventListener('click', () => {
        const paragraphText = button.previousElementSibling.innerText;

        const listItem = document.createElement('li');
        listItem.innerText = paragraphText;

        const list = document.querySelector('#listAdd');
        list.appendChild(listItem);
    });
});

'-----Ejercicio 6-----'

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('click', () => {
        square.style.display = 'none';
    });
});

const addDivBtn = document.querySelector('#btnAddDiv');

addDivBtn.addEventListener('click', () => {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    document.querySelector('#square-container').appendChild(newSquare);
}); 

'-----Ejercicio 7-----'

const colorDiv = document.querySelector('.color-div');


const blueBtn = document.querySelector('#blueBtn');
const redBtn = document.querySelector('#redBtn');
const greenBtn = document.querySelector('#greenBtn');
const blackBtn = document.querySelector('#blackBtn');
const purpleBtn = document.querySelector('#purpleBtn');

blueBtn.addEventListener('click', changeColor('blue'));
redBtn.addEventListener('click', changeColor('red'));
greenBtn.addEventListener('click', changeColor('green'));
blackBtn.addEventListener('click', changeColor('black'));
purpleBtn.addEventListener('click', changeColor('purple'));

function changeColor(color) {
    colorDiv.style.backgroundColor = color;
}







// Este array debe usarse para el ejercicio 10
// const data = [
//     { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
//     { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
//     { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
//     { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
//     { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
//     { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
//     { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
//     { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
//     { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
//     { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
//     { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
//     { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
//     { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
//     { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
//     { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
//     { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
//     { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
//     { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
//     { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
//     { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
// ]