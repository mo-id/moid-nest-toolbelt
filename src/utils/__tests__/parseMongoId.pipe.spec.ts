import { ParseMongoIdPipe } from '../parseMongoId.pipe';

describe('utils / parseMongoId', () => {
  it('throws when the input is not a mongoId', () => {
    const pipe = new ParseMongoIdPipe();
    const test = () => pipe.transform('nonMongoId');

    expect(test).toThrow();
  });

  it('returns the id when is a valid mongoId', () => {
    const mongoId = '61065e94452c728824f1efd1';
    const pipe = new ParseMongoIdPipe();
    const parsedMongoId = pipe.transform(mongoId);

    expect(parsedMongoId).toBe(mongoId);
  });
});
