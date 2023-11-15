import { Employee } from "./employee.js";

export class PM extends Employee {
  #jobtype = "PM";

  constructor(id, salary, jobtype) {
    super(id, salary);
    this.#jobtype = jobtype;
  }

  getJobType() {
    return "I am a PM";
  }
}
