const professionalExperienceButton = document.querySelector('.professional-experience-button')
const volunteerExperienceButton = document.querySelector('.volunteer-experience-button')
const professionalExperienceContainer = document.querySelector('.professional-experience-container')
const volunteerExperienceContainer = document.querySelector('.volunteer-experience-container')

volunteerExperienceButton.addEventListener('click', (e) => {
    volunteerExperienceContainer.classList.toggle('active')
    professionalExperienceContainer.classList.toggle('active')
    volunteerExperienceButton.classList.toggle('active')
    professionalExperienceButton.classList.toggle('active')
})
professionalExperienceButton.addEventListener('click', (e) => {
    volunteerExperienceContainer.classList.toggle('active')
    professionalExperienceContainer.classList.toggle('active')
    volunteerExperienceButton.classList.toggle('active')
    professionalExperienceButton.classList.toggle('active')
})

