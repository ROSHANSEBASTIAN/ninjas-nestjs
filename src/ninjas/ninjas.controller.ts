import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // to get all ninjas
  @Get()
  getNinjas(@Query('type') type: string) {
    if (type == 'fast') {
      return ['You are asking for a fast ninja'];
    } else {
      return ['You are asking for a slow ninja'];
    }
  }

  // to get a particular ninja
  @Get(':id')
  getNinjaFromId(@Param('id') id: string) {
    return { id };
  }

  // to add a ninja
  @Post()
  createANinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }

  // to edit a ninja
  @Put(':id')
  updateNinja() {
    return {};
  }

  // to delete a ninja
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
