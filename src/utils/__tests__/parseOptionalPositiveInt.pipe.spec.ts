import { ParseOptionalPositiveIntPipe } from "../parseOptionalPositiveInt.pipe";

describe("utils / parseOptionalPositiveInt", () => {
  it("throws when the input is not a number", () => {
    const pipe = new ParseOptionalPositiveIntPipe();
    const test = () => pipe.transform("non numeric input");

    expect(test).toThrow();
  });

  it("throws when the input is not a positive number", () => {
    const pipe = new ParseOptionalPositiveIntPipe();
    const test = () => pipe.transform(-1);

    expect(test).toThrow();
  });

  it("throws when the input is not a integer", () => {
    const pipe = new ParseOptionalPositiveIntPipe();
    const test = () => pipe.transform(1.5);

    expect(test).toThrow();
  });

  it.each([undefined, null, ""])(
    "returns null when the input is %s",
    (input) => {
      const pipe = new ParseOptionalPositiveIntPipe();
      const result = pipe.transform(input);

      expect(result).toBeNull();
    }
  );

  it("parse the given input", () => {
    const pipe = new ParseOptionalPositiveIntPipe();
    const result = pipe.transform("3");

    expect(result).toBe(3);
  });
});
