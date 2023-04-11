import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
  // to find a message
  async findOne(id: string) {
    const fileContent = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(fileContent);
    return messages[id];
  }

  // to find all messages
  async findAll() {
    const fileContent = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(fileContent);
    return messages;
  }

  // to create a message
  async create(message: string) {
    const fileContent = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(fileContent);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: message };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
