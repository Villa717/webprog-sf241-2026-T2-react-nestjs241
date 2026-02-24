import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';

@Controller('guestbook')
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Get()
  getAll() { return this.guestbookService.findAll(); }

  @Post()
  create(@Body() body: any) { return this.guestbookService.create(body); }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) { 
    return this.guestbookService.update(id, body); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) { 
    return this.guestbookService.delete(id); 
  }
}