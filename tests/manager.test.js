const Manager = require('../lib/manager');

test("can set office number", () => {
    const testVal = 100;
    const emp = new Manager("Foo", 1, "email@email.com", testVal);
    expect(emp.officeNum).toBe(testVal);
});

test("getRole() returns 'manager'", () => {
    const testVal = "manager";
    const emp = new Manager("Foo", 1, "email@email.com", 100);
    expect(emp.getRole()).toBe(testVal);
});

test("can get office num via function", () => {
    const testVal = 100;
    const emp = new Manager("Foo", 1, "email@email.com", testVal);
    expect(emp.getOfficeNum()).toBe(testVal);
});