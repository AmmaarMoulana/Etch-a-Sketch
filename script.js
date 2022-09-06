function createGrid (rows) {

    
    
    for ( i=0; i< rows * rows; i++) {
        const innerdivs = document.createElement('div')
        innerdivs.classList.add('gridboxes')
        container.appendChild(innerdivs)
        
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;

        if (eraser.addEventListener("click",() => {
            innerdivs.addEventListener('mouseover', () => {
            innerdivs.style.backgroundColor = "white"
            })
        })) return 

        if (psychedelic.addEventListener("click",() => {
            innerdivs.addEventListener('mouseover', () => {
            innerdivs.style.backgroundColor = getRandomColor()
            })
        })) return

        if (black.addEventListener("click",() => {
            innerdivs.addEventListener('mouseover', () => {
            innerdivs.style.backgroundColor = "black"
            })
        })) return

        innerdivs.addEventListener('mouseover', () => {
        innerdivs.style.backgroundColor = "black"
        })

        
        reset.addEventListener('click', () => {
        innerdivs.style.backgroundColor = "white"
        })
        
    }
}

gridChoice.addEventListener('click', () => {
    let choice = prompt("Choose a number of boxes per row", "")
    container.style.gridTemplateRows = `repeat(${choice}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${choice}, 1fr)`;
    const child = document.querySelectorAll('.gridboxes')
    child.forEach(child => child.remove());
    createGrid(choice)
    
    
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function clearGrid () {
    gridboxes.style.backgroundColor = "white"
}

createGrid(16)