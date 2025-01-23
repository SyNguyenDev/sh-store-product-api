import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MediaService } from './media.service';

@Controller()
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @MessagePattern('findOneMedia')
  findOne(@Payload() id: number) {
    return this.mediaService.findOne(id);
  }
}
