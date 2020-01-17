let cells = document.querySelectorAll('.cell');
let shape = 'X'
cellCount = 0



// 8 winning combos
let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
]



// switches through the 'X's and 'O's and runs and checks them to loop 
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked(cell) {
    if (cell.target.textContent == '') {
        cell.target.textContent = shape
        checkWin();
        if (shape == 'X') {
            shape = 'O'            
            let snd = new Audio("Lightsaber Turn On-SoundBible.com-1637663395.mp3");
            snd.play();
            
        }
        else { shape = 'X' 
        let snd = new Audio("Lightsaber Clash-SoundBible.com-203518049.mp3");
            snd.play();
        }
    };
};



function checkWin() {
    cellCount++
    for (i = 0; i < wins.length; i++) {
        let shapeCount = 0;
        for (j = 0; j < wins[i].length; j++) {
            if (wins[i][j].innerHTML == shape) {
                shapeCount++
            };
            if (shapeCount == 3) {
                alert(shape + '...may the force be with you.')
                reset();
                return;
            }
            if (cellCount == 9 && shapeCount == 3) {
                alert(shape + '...may the force be with you.')
                reset();
                return;
            }
            else if (shapeCount != 3 && cellCount == 9) {
                alert('Give yourself to the Dark Side.')
                reset();
                return;
            }
        };
    }
}


function reset() {
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        shape = 'O'
        cellCount = 0
    }
}

// var snd = new Audio("name");
// snd.play();