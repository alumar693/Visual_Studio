class FormSalaryCalculator {

    static calculator(name, surname, salary, age) {

        if(salary >= 1000 && salary < 2000) {
            if(age > 45) {
                salary *= 1.03.toFixed(2);
            }else if (age <= 45) {
                salary *= 1.1.toFixed(2);
            }
        }else if(salary < 1000) {
            if (age < 30) {
                salary = 1100.00;
            } else if (age >= 30 && age <= 45){
                salary *= 1.03.toFixed(2);
            } else if (age > 45) {
                salary *= 1.15.toFixed(2);
            }
        }
    alert(name + " " + surname + " cobra " + salary + "€");
    }
}    

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const salary = document.getElementById('salary').value;
      const age = document.getElementById('age').value;
  
      FormSalaryCalculator.calculator(name, surname, salary, age);
    });
  });
  