console.log('Warsztat - Ustaw tło elementów');


const setBackground = () => {
    let p1 = document.querySelector(".first");
    let p2 = document.querySelector(".last")
    
    p1.classList.add('red');
    p2.classList.add('yellow');
}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click',setBackground);