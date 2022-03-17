import {
  Injectable,
  ParseEnumPipe,
  ArgumentMetadata,
  ParseEnumPipeOptions,
} from '@nestjs/common';

@Injectable()
export class ParseOptionalEnumPipe extends ParseEnumPipe {
  constructor(enumType: any, options?: ParseEnumPipeOptions) {
    super(enumType, options);
  }

  transform(value: any, metadata: ArgumentMetadata) {
    if (value === undefined || value === null) {
      return Promise.resolve(null);
    }

    if (typeof value === 'string' && value.trim() === '') {
      return Promise.resolve(null);
    }

    return super.transform(value, metadata);
  }
}
