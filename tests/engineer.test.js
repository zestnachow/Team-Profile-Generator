const Engineer = require("../lib/engineer");


describe("Engineer", () => {
    it("should create a new engineer object", () => {
        const engineer = new Engineer("Zach", 1, "zachpweston@gmail.com", "zestnachow");
        expect(engineer.name).toEqual("Zach");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("zachpweston@gmail.com");
        expect(engineer.github).toEqual("zestnachow");
    });
    it("should return the engineer's github username with getGithub method", () => {
        const engineer = new Engineer("Zach", 1, "zachpweston@gmail.com", "zestnachow");
        const { github } = engineer;
        expect(engineer.getGithub()).tobe(github);
    });
    it("should return employee role of engineer with getRole method", () => {
        const engineer = new Engineer("Zach", 1, "zachpweston@gmail.com", "zestnachow");
        expect(engineer.getRole()).toBe("Engineer");
    })
});