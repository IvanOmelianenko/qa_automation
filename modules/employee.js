export class Employee {
  constructor(id, salary) {
    this.id = id;
    this.salary = salary;
  }

  static compareSalary(employee1, employee2) {
    if (employee1.salary > employee2.salary) {
      return `User with ${employee1.id} 1 has greater salary`;
    } else if (employee1.salary < employee2.salary) {
      return `User with ${employee2.id} has greater salary`;
    } else {
      return "Salaries are equal";
    }
  }
}
