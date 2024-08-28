const portfolioContainerOneButton = document.querySelector('.portfolio-container-one-button')
const portfolioContainerTwoButton = document.querySelector('.portfolio-container-two-button')
const portfolioContainerOne = document.querySelector('.portfolio-container-one')
const portfolioContainerTwo = document.querySelector('.portfolio-container-two')

portfolioContainerTwoButton.addEventListener('click', (e) => {
    portfolioContainerTwoButton.classList.toggle('active')
    portfolioContainerOneButton.classList.toggle('active')
    portfolioContainerOne.classList.toggle('active')
    portfolioContainerTwo.classList.toggle('active')
})
portfolioContainerOneButton.addEventListener('click', (e) => {
    portfolioContainerTwoButton.classList.toggle('active')
    portfolioContainerOneButton.classList.toggle('active')
    portfolioContainerOne.classList.toggle('active')
    portfolioContainerTwo.classList.toggle('active')
})

