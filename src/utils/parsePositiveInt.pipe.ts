import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

import { Nullable } from "@mo-id/typescript-toolbelt";

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform {
  transform(value: any): Nullable<number> {
    const numeric = Number(value);

    if (Number.isNaN(numeric)) throw new BadRequestException();
    if (!Number.isInteger(numeric)) throw new BadRequestException();
    if (numeric <= 0) throw new BadRequestException();

    return numeric;
  }
}
