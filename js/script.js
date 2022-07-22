const lis = document.querySelectorAll('li')
let grade = 0

const content1 = document.querySelector('#content-1')
const content2 = document.querySelector('#content-2')
const selectedGrade = document.querySelector('#grade')

lis.forEach((item) => {
    item.addEventListener('click', ()=> {
        selectGrade(item)
    })
})

function selectGrade(item) {
    cleanGrade()
    item.classList.add('active')
    grade = item.innerHTML
} 

function cleanGrade() {
    let lis = document.querySelectorAll('li')
    lis.forEach((item) => {
        item.classList.remove('active')
    })
}

function submit() {

    if (! grade) {
        return
    }

    content1.setAttribute('style', 'display: none')
    content2.setAttribute('style', 'display: flex')

    selectedGrade.innerHTML = grade
}

