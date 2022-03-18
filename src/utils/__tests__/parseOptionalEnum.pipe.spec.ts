import { ParseOptionalEnumPipe } from "../parseOptionalEnum.pipe";

enum TestEnum {
  Valid = "valid",
}

describe("utils / parseOptionalEnum", () => {
  it("throws when the input is not a valid enum", () => {
    const pipe = new ParseOptionalEnumPipe(TestEnum);
    const test = () => pipe.transform("invalid value", { type: "custom" });

    expect(test).rejects.toThrow();
  });

  it.each([undefined, null, ""])(
    "returns null when the input is %s",
    async (input) => {
      const pipe = new ParseOptionalEnumPipe(TestEnum);
      const result = await pipe.transform(input, { type: "custom" });

      expect(result).toBeNull();
    }
  );

  it("parse the given input and type it correctly", async () => {
    const pipe = new ParseOptionalEnumPipe(TestEnum);
    const result = await pipe.transform("valid", { type: "custom" });

    expect(result).toBe("valid");
  });
});
