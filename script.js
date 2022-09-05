
function createGrid (rows) {

    

    for ( i=0; i< rows * rows; i++) {
        const innerdivs = document.createElement('div')
        innerdivs.classList.add('gridboxes')
        container.appendChild(innerdivs)

        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;

        innerdivs.addEventListener('mouseover', e => {
        innerdivs.style.backgroundColor = "black"
        })

       
        reset.addEventListener('click', () => {
        innerdivs.style.backgroundColor = "white"
        })
    


    }
    
    
}


const box = document.querySelectorAll('.gridboxes')


gridChoice.addEventListener('click', () => {
    let choice = prompt("Choose a number of boxes per row", "")
    container.style.gridTemplateRows = `repeat(${choice}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${choice}, 1fr)`;
    createGrid(choice)

})

createGrid(16)