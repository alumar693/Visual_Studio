class SalaryCalculator {

    static calculator(name, surname, salary, age) {

        if(salary >= 1000 && salary < 2000) {
            if(age > 45) {
                salary *= 1.03;
            }else if (age <= 45) {
                salary *= 1.1;
            }
        }else if(salary < 1000) {
            if (age < 30) {
                salary = 1100;
            } else if (age >= 30 && age <= 45){
                salary *= 1.03;
            } else if (age > 45) {
                salary *= 1.15;
            }
        }
    alert(name + " " + surname + " cobra " + salary + "€");
    }
}    
document.addEventListener('DOMContentLoaded', SalaryCalculator.calculator(prompt("Introduce tu nombre"), prompt("Introduce tu apellido"), prompt("Introduce tu salario"), prompt("Introduce tu edad")));
