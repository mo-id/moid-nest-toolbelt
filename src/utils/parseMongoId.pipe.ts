import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { isMongoId } from 'class-validator';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any) {
    const isValid = isMongoId(value);
    if (!isValid) throw new BadRequestException();
    return value;
  }
}
