import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class EmptyBodyPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata) {
    return metadata.type === 'body' && value === undefined ? {} : value;
  }
}
