const container = document.querySelector("#container")
makeGrid()

function makeGrid(){
    for(let r = 0; r < 16; r ++){
        for(let c = 0; c < 16; c ++){
            const content = document.createElement('div')
            content.classList.add('content')
            content.style.border = 'black 1px solid';
            content.style.height = '100px'
            content.style.width = '100px'
            content.addEventListener('mouseenter', () => 
            {
                content.style.backgroundColor = 'black';
            })
            container.appendChild(content);
        }
    }
}