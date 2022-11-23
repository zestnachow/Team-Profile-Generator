const Employee = require("../lib/employee");

test ("creates an employee object", () => {
    const employee = new Employee ("Zach", 1, "zachpweston@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
}) 