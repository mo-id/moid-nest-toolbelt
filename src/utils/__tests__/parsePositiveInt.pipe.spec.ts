import { ParsePositiveIntPipe } from '../parsePositiveInt.pipe';

describe('utils / parsePositiveInt', () => {
  it('throws when the input is not a number', () => {
    const pipe = new ParsePositiveIntPipe();
    const test = () => pipe.transform('non numeric input');

    expect(test).toThrow();
  });

  it('throws when the input is not a positive number', () => {
    const pipe = new ParsePositiveIntPipe();
    const test = () => pipe.transform(-1);

    expect(test).toThrow();
  });

  it('throws when the input is not a integer', () => {
    const pipe = new ParsePositiveIntPipe();
    const test = () => pipe.transform(1.5);

    expect(test).toThrow();
  });

  it('transforms the input in a positive integer', () => {
    const pipe = new ParsePositiveIntPipe();
    const numeric = pipe.transform('3');

    expect(numeric).toBe(3);
  });
});
