const Employee = require('../lib/employee');


test("can create new employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test("Can set name", () => {
    const name = "Name";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Can set id", () => {
    const testVal = 100;
    const emp = new Employee("Foo", testVal);
    expect(emp.id).toBe(testVal);
});

test("Can set email", () => {
    const testVal = "email@email.com";
    const emp = new Employee("Foo", 1, testVal);
    expect(emp.email).toBe(testVal);
});

test("Can get name via function", () => {
    const testVal = "Name";
    const emp = new Employee(testVal);
    expect(emp.getName()).toBe(testVal);
});

test("Can get id via function", () => {
    const testVal = 100;
    const emp = new Employee("Foo", testVal);
    expect(emp.getId()).toBe(testVal);
});

test("Can get email via function", () => {
    const testVal = "email@email.com";
    const emp = new Employee("Foo", 1, testVal);
    expect(emp.getEmail()).toBe(testVal);
});

test("getRole() returns 'Employee'", () => {
    const testVal = "employee";
    const emp = new Employee("Name", 1, "email@email.com");
    expect(emp.getRole()).toBe(testVal);
});