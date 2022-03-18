import { Injectable } from "@nestjs/common";

import { ParsePositiveIntPipe } from "./parsePositiveInt.pipe";

@Injectable()
export class ParseOptionalPositiveIntPipe extends ParsePositiveIntPipe {
  transform(value: any) {
    if (value === undefined || value === null) {
      return null;
    }

    if (typeof value === "string" && value.trim() === "") {
      return null;
    }

    return super.transform(value);
  }
}
