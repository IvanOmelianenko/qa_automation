import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobtype = "Dev";

  constructor(id, salary, jobtype) {
    super(id, salary);
    this.#jobtype = jobtype;
  }

  getJobType() {
    return "I am a Dev";
  }

  static returnArrayOfDevs(...devs) {
    return devs.filter((dev) => dev instanceof Dev);
  }
}
