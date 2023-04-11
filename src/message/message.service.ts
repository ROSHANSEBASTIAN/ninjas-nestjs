import { Injectable } from '@nestjs/common';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepo: MessageRepository) {}

  create(createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);
    return this.messageRepo.create(createMessageDto.content);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
