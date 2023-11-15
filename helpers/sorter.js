export default function sortBySalary(objects) {
  return objects.sort((a, b) => {
    if (a.salary !== b.salary) {
      return a.salary - b.salary;
    }
    return a.id - b.id;
  });
}
