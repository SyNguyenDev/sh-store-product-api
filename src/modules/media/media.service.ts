import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  findOne(id: number) {
    return `This action returns a #${id} media`;
  }
}
