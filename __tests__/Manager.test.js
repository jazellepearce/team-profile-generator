const Manager = require('../libs/Manager');
const Employee = require('../libs/Employee')

test('office number', () => {
    const setValue= "5555555";
    const employee = new Manager("Name", 1, "name@place.com", setValue);
    expect(employee.officeNumber).toBe(setValue);
})

test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Name", 1, "name@place.com");
    expect(employee.getRole()).toBe(testRole);
});