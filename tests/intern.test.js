const Intern = require('../lib/intern');

test("can set school", () => {
    const testVal = "school";
    const emp = new Intern("Foo", 1, "email@email.com", testVal);
    expect(emp.school).toBe(testVal);
});

test("getRole() should return 'intern'", () => {
    const testVal = "intern";
    const emp = new Intern("Foo", 1, "email@email.com", "school");
    expect(emp.getRole()).toBe(testVal);
});

test("can get school via function", () => {
    const testVal = "school";
    const emp = new Intern("Foo", 1, "email@email.com", testVal);
    expect(emp.getSchool()).toBe(testVal);
});