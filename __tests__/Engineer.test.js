
const Engineer = require('../libs/Engineer');

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