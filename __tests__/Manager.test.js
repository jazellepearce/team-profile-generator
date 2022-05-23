const Manager = require('../libs/Manager');

test('office number', () => {
    const setValue= "5555555";
    const employee = new Manager("Name", 1, "name@place.com", setValue);
    expect(employee.officeNumber).toBe(setValue);
})