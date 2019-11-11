const Employee = require("employee");

const Engineer = require("engineer");

const Htmlrenderer = require("htmlrenderer")

const Intern = require(intern);

const Manager = require(manager)

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name id and email if provided valid arguments", () => {
      const employee = new Employee("Sarah", 3);

      expect(employee.name).toEqual("Sarah");
      expect(employee.id).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Child();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Child("Sarah");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});
