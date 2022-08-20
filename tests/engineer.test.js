const Engineer = require('../lib/engineer');

test("Can set Github acc", () => {
    const testVal = "Username";
    const emp = new Engineer("Foo", 1, "email@email.com", testVal);
    expect(emp.github).toBe(testVal);
});

test("getRole() returns 'engineer'", () => {
    const testVal = "engineer";
    const emp = new Engineer("Foo", 1, "email@email.com", testVal);
    expect(emp.getRole()).toBe(testVal);
});

test("Can get Github via function", () => {
    const testVal = "Username";
    const emp = new Engineer("Foo", 1, "email@email.com", testVal);
    expect(emp.getGit()).toBe(testVal);
});