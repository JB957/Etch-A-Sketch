const container = document.querySelector("#container")
const body = document.querySelector("body")
const height = screen.height
const btn = document.querySelector('#btn')
createGrid(16)

btn.addEventListener('click', () => {
    let numSquare = Number(prompt("Enter a Number of Squares per side"));
    if(numSquare <= 100){
        container.replaceChildren();
        createGrid(numSquare)
    }  
})

function createGrid(numSquare){
    for (let i = 0; i < numSquare; i++) {
        let row = document.createElement('div');
        row.style.height = `${height/numSquare}px`;
        row.style.width = `${height}px`;
        row.style.display = 'flex';
        container.appendChild(row);

        for (let j = 0; j < numSquare; j++) {
            let col = document.createElement('div');
            col.classList.add("box")
            col.style.height = `${height/numSquare}px`;
            col.style.width = `${height/numSquare}px`;
            col.style.border = "black 1px solid"
            col.addEventListener("mouseenter" , () => {
                col.style.backgroundColor = "black";
            })
            row.appendChild(col);
        }
    }
}
