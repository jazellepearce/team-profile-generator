
const Employee = require('../libs/Employee');


test ('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test ('generates employee name', () => {
    const name = "Name"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ('generate ID', () => {
    const setID = 6578;
    const employee = new Employee("Name", setID);
    expect(employee.id).toBe(setID);
});

test ('Generate Email', () => {
    const setEmail = "Name@place.com"
    const employee = new Employee ("Name", 1, setEmail);
    expect(employee.email).toBe(setEmail);
});


test('get name from getName', () => {
    const name = "Name"
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});


test ('get ID from getId', () => {
    const setID = "6578"
    const employee = new Employee("Name", setID);
    expect(employee.getId()).toBe(setID);
});

test('get email from getEmail', () => {
    const setEmail = "Name@place.com"
    const employee = new Employee("Name", 1, "setEmail");
    expect(employee.getEmail()).toBe(setEmail);
});

