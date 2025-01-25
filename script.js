const linkpages = document.getElementsByClassName('one')
const buttonaction = document.getElementById('action')
const amountinput = document.getElementsById('enter')
const convertamount = document.getElementsById('text')
const feedback = document.getElementsById('result')

const BASE_URL = 'https://openexchangerates.org/api/latest.json?app_id=db1c564ad9d34fb5a913362954e93a30';
      
buttonaction.addEventListener('click', () => {
    const numberr = parseInt(Input.value, 100)
    const amountaccount = parseInt(select.value, 100)
    if (isNaN(numberr)) {
        feedback.textContent = 'enter a amount less than 1000$'
        feedback.textContent.style = 'red'
        return
    }
    const convertnumb=numberr.toString(amountaccount)
    feedback.textContent =`${numberr} to USD ${amountaccount} is ${convertnumb}`
})

amountinput.addEventListener('click', () => {
    const numberr = parseInt(Input.value, 10)
    const amountaccount = parseInt(select.value, 10)
})