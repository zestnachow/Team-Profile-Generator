const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should create an employee object that stores the specified data", () => {
            const employee = new Employee("Zach", 1, "zachpweston@gmail.com");
            expect(employee.name).toEqual("Zach");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("zachpweston@gmail.com");
    });
    it("should return the employee's name with getName method", () => {
        const employee = new Employee("Zach", 1, "zachpweston@gmail.com");
        const { name } = employee;
        expect(employee.getName()).toBe(name);
    });
    it("should return the employee's ID number with getId method", () => {
        const employee = new Employee("Zach", 1, "zachpweston@gmail.com");
        const { id } = employee;
        expect(employee.getId()).toBe(id);
    });
    it("should return the employee's email address with getEmail method", () => {
        const employee = new Employee("Zach", 1, "zachpweston@gmail.com");
        const { email } = employee;
        expect(employee.getEmail()).toBe(email);
    });
    it("should return the employee's role with getRole method", () => {
        const employee = new Employee("Zach", 1, "zachpweston@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});

