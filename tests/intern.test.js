const Intern = require("../lib/intern");

describe("Intern", () => {
    it("should create a new intern object", () => {
        const intern = new Intern("Zach", 1, "zachpweston@gmail.com", "Amherst College");
        expect(intern.name).toEqual("Zach");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("zachpweston@gmail.com");
        expect(intern.school).toEqual("Amherst College");
    });
    it("should return intern's school with getSchool method", () => {
        const intern = new Intern("Zach", 1, "zachpweston@gmail.com", "Amherst College");
        const { school } = employee;
        expect(intern.getSchool()).toBe(school);
    });
    it("should return role of Intern with getRole method", () => {
        const intern = new Intern("Zach", 1, "zachpweston@gmail.com", "Amherst College");
        expect(intern.getRole()).toBe("Intern");
    });
});