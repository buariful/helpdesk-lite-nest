import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { StaffGuard } from './guards/staff.guard.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketService: TicketsService){}

    @Get()
    findall(
        @Query("status") status?: Ticket["status"],
        @Query("priority") priority?: Ticket["priority"],
    ){
        
        return this.ticketService.abc(status, priority);
    };

    @Get(":id")
    findOne (@Param("id", ParseIntPipe) id:number){
        return this.ticketService.findOne(id)
    };

    @UseGuards(StaffGuard)
    @Post()
    create(@Body() payload:CreateTicketDto){
        return this.ticketService.create(payload)
    }
}
