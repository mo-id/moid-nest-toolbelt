import { Injectable, ParseEnumPipe, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class ParseOptionalEnumPipe extends ParseEnumPipe {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value === undefined || value === null) {
      return Promise.resolve(null);
    }

    if (typeof value === "string" && value.trim() === "") {
      return Promise.resolve(null);
    }

    return super.transform(value, metadata);
  }
}
