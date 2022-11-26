const Manager = require("../lib/manager");

describe("Manager", () => {
    it("should create a new manager object", () => {
        const manager = new Manager("Zach", 1, "zachpweston@gmail.com", 126);
        expect(manager.name).toEqual("Zach");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("zachpweston@gmail.com");
        expect(manager.officeNumber).toEqual(126);
    });
    it("should return manager's office number with getOfficeNumber method", () => {
        const manager = new Manager("Zach", 1, "zachpweston@gmail.com", 126);
        const { officeNumber } = manager;
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
    it("should return a role of manager with getRole method", () => {
        const manager = new Manager("Zach", 1, "zachpweston@gmail.com", 126);
        expect(manager.getRole()).toBe("Manager");
    })
});