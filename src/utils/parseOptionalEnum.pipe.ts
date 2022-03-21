import {
  Injectable,
  ParseEnumPipe,
  ArgumentMetadata,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class ParseOptionalEnumPipe<T = any> implements PipeTransform<T> {
  private enumType: T;

  constructor(enumType: T) {
    this.enumType = enumType;
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    if (value === undefined || value === null) {
      return Promise.resolve(null);
    }

    if (typeof value === "string" && value.trim() === "") {
      return Promise.resolve(null);
    }

    const pipe = new ParseEnumPipe(this.enumType);
    const parsedValue = await pipe.transform(value, metadata);
    return parsedValue;
  }
}
