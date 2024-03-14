const resultSec = document.getElementById('result-section')
const convertBtn = document.getElementById('convert-btn')
const numToConvertEl = document.getElementById('num-to-convert')


convertBtn.addEventListener('click', function () {
    const numToConvert = Number(numToConvertEl.value)
    if (numToConvert) {
        resultSec.innerHTML = convertToLength(numToConvert)
        resultSec.innerHTML += convertToVolume(numToConvert)
        resultSec.innerHTML += convertToMass(numToConvert)

    }


})


function convertToLength(length) {

    const feetToMeter = (length * 0.3048).toFixed(3)
    const meterToFeet = (length * 3.28084).toFixed(3)
    return `<div class="result-container">
<h2 id="result-heading">Length (Meter/Feet)</h2>
<h3 id="result-text"  class="white-text">${length} meters = ${meterToFeet} feet | ${length} feet = ${feetToMeter} meters</h3>
</div>`

}

function convertToVolume(volume) {

    const literToGallen = (volume * 0.264172).toFixed(3)
    const gallenToLiter = (volume * 3.78541).toFixed(3)

    return `<div class="result-container">
    <h2 id="result-heading">Volume (Liters/Gallons)</h2>
    <h3 id="result-text" class="white-text">${volume} liters = ${literToGallen} gallons | ${volume} gallons = ${gallenToLiter} liters</h3>
    </div>`

}

function convertToMass(mass) {
    const kgToPound = (mass * 2.20462).toFixed(3)
    const poundTokg = (mass * 0.453592).toFixed(3)
    return `<div class="result-container">
    <h2 id="result-heading">Mass (Kilograms/Pounds)</h2>
    <h3 id="result-text"  class="white-text">${mass} kilos = ${kgToPound} pounds | ${mass} pounds = ${poundTokg} kilos</h3>
    </div>`


}

