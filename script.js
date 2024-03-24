const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
const reset = document.querySelector('.reset')

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
    })
});

reset.addEventListener('click', () => {
    body.style.backgroundColor = 'white'
})