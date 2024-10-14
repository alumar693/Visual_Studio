class DegreeCalculator {
    static farenheit2Celsius(farenheitDegree) {
        return (farenheitDegree - 32) * 5 / 9
    }
}
console.log(DegreeCalculator.farenheit2Celsius(32));