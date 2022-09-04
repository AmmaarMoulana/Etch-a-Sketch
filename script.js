for ( i=0; i<256; i++) {
    const divs = document.querySelector('#container')
    const innerdivs = document.createElement('div')
    innerdivs.classList.add('gridboxes')
    divs.appendChild(innerdivs)
}

const box = document.querySelectorAll('.gridboxes')


function changeGrid (choice) {
    for ( i=0; i<choice*choice; i++) {
        const divs = document.querySelector('#container')
        const innerdivs = document.createElement('div')
        innerdivs.classList.add('gridboxes')
        divs.appendChild(innerdivs)
        console.log(choice)
        
    }
}




for (const gridboxes of box) {
    gridboxes.addEventListener('mouseover', () => {
        gridboxes.style.backgroundColor = "black"
    })
}


reset.addEventListener('click',() => {
    for (const gridboxes of box) {
        gridboxes.style.backgroundColor = "white"
    }
})


gridChoice.addEventListener('click', () => {
    let choice = prompt("Choose a number of boxes per row", "")
    changeGrid(choice)

})



