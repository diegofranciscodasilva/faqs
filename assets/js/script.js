const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

function toggleAnswer(answer, btn) {
    if(answer.style.display === 'none' || answer.style.display === ' ') {
        answer.style.display = 'block'
        btn.style.backgroundImage = 'url(assets/images/icon-minus.svg)'
    } else {
        answer.style.display = 'none'
        btn.style.backgroundImage = 'url(assets/images/icon-plus.svg)'
    }
}

function clickAnswer() {
    btn1.addEventListener('click', () => {
        toggleAnswer(answer1, btn1)
    })
    btn2.addEventListener('click', () => {
        toggleAnswer(answer2, btn2)
    })
    btn3.addEventListener('click', () => {
        toggleAnswer(answer3, btn3)
    })
    btn4.addEventListener('click', () => {
        toggleAnswer(answer4, btn4)
    })
}

document.addEventListener('DOMContentLoaded', clickAnswer)