document.addEventListener("DOMContentLoaded", () => {
    console.log("%cDOM Content Loaded and Parsed!", "color: magenta")


    const calculatorForm = document.querySelector('.calculator-form')
    const recoveryTime = document.querySelector('.recovery-time')

    calculatorForm.addEventListener('submit', () => {
        event.preventDefault()
        calculateRecovery(calculatorForm)
    })

    function calculateRecovery(form) {
        const formData = new FormData(form)
        const activityType = formData.get("activity-type")
        const duration = formData.get("duration")
        const intensity = formData.get("intensity")
        const password = formData.get("password")

        recoveryTime.innerText = `Recovery Time: ${(duration * intensity * activityType) / 20} Hours`

    }

})

fetch('http://localhost:3000/exercises')
    .then(resp => resp.json())
    .then(exercises => handleResponse(exercises))


const listedExercises = document.querySelector('.exercise-log')
function handleResponse(exercises) {
    exercises.forEach(exercise => {
        
        const listExercise = document.createElement('li')
        listExercise.innerText = "If we set up the database correctly, this would show your past activities, #user."
        listedExercises.appendChild(listExercise)
    })
}