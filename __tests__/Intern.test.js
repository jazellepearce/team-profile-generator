const Intern = require("../libs/Intern");

test("school set up", () => {
    const setValue = "KSU";
    const employee = new Intern("name", 1, "name@place.com", setValue);
    expect(employee.school).toBe(setValue);
})

test("GetSchool", () => {
    const setValue = "KSU";
    const employee = new Intern("Name", 1, "name@place.com", setValue);
    expect(employee.getSchool()).toBe(setValue);
})