import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {
     private readonly tickets:Ticket[] = [
        {
            id:1,
            subject:"Cannot log in to my account",
            description:"I forgot my password and the reset email never arrives.",
            priority:"high",
            status:"open",
            createdAt:"2026-11-01T09:15:00.000Z",
        },
        {
            id:2,
            subject:"Invoice not showing in dashboard",
            description:"My latest invoice is missing from the billing page.",
            priority:"medium",
            status:"open",
            createdAt:"2026-11-02T11:40:00.000Z",
        },
        {
            id:3,
            subject:"App crashes on startup",
            description:"The desktop app closes immediately after I open it.",
            priority:"high",
            status:"open",
            createdAt:"2026-11-03T08:05:00.000Z",
        },
        {
            id:4,
            subject:"Wrong email address on profile",
            description:"Please update the email address linked to my profile.",
            priority:"low",
            status:"closed",
            createdAt:"2026-11-04T15:30:00.000Z",
        },
        {
            id:5,
            subject:"Feature request: dark mode",
            description:"It would be great to have a dark mode option in settings.",
            priority:"low",
            status:"closed",
            createdAt:"2026-11-05T18:20:00.000Z",
        },
     ];

     abc(status?:Ticket["status"], priority?:Ticket["priority"]){
        let tickets = this.tickets;

        if(status){
            tickets = tickets.filter((ticket)=>ticket.status === status);
        };


        if(priority){
            tickets = tickets.filter((ticket)=>ticket.priority === priority);
        };


        return tickets;
     }

     findOne(id:number){
            const ticket = this.tickets.find((ticket)=>ticket.id === id);

            if(!ticket) throw new NotFoundException(`Ticket with id ${id} not found`);

            return ticket;
     };

     create(payload:CreateTicketDto){
        return payload;
     }
     


}
