
const Engineer = require('../libs/Engineer');
const Employee = require('../libs/Employee')

test('github setup', () => {
    const setValue = "bebebebe";
    const employee = new Engineer("Name", 1, "name@place.com", setValue);
    expect(employee.github).toBe(setValue);
});

test('gitHub', () => {
    const setValue = "bebebebe";
    const employee = new Engineer("Name", 1, "name@place.com",setValue);
    expect(employee.getGitHub()).toBe(setValue);
})

test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Name", 1, "name@place.com");
    expect(employee.getRole()).toBe(testRole);
});