import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja-dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  // constructor
  constructor(private readonly ninjaService: NinjasService) {}

  // to get all ninjas
  @Get()
  getNinjas(@Query('weapon') weapon: 'Sword' | 'Spear') {
    // const service = new NinjasService();
    return this.ninjaService.getNinjas(weapon);
  }

  // to get a particular ninja
  @Get(':id')
  getNinjaFromId(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjaService.getNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // to add a ninja
  @Post()
  createANinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.addNinja(createNinjaDto);
  }

  // to edit a ninja
  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjaService.updateNinja(id, updateNinjaDto);
  }

  // to delete a ninja
  @Delete(':id')
  deleteNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjaService.removeNinja(+id);
  }
}
