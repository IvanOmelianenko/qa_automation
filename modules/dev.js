import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobtype = "Dev";

  constructor(id, salary) {
    super(id, salary);
  }

  getJobType() {
    return `I am a ${this.#jobtype}`;
  }

  static returnArrayOfDevs(...devs) {
    return devs.filter((dev) => dev instanceof Dev);
  }
}
