import { Nullable } from "@mo-id/typescript-toolbelt";
import {
  Injectable,
  ParseEnumPipe,
  ArgumentMetadata,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class ParseOptionalEnumPipe<EnumType = any> implements PipeTransform {
  constructor(private enumType: EnumType) {}

  async transform(
    value: any,
    metadata: ArgumentMetadata
  ): Promise<Nullable<EnumType>> {
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
